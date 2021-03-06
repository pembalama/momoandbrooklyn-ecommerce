import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AuthModal from '../Modal/AuthModal';
import './Products.scss';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			showModal: false,
		};
	}

	componentDidMount() {
		axios
			.get('/api/products')
			.then(res => this.setState({ products: res.data }))
			.catch(err => console.log(err));
	}

	addToCart = (id, price) => {
		if (this.props.user.email) {
			axios
				.post('/api/cart-item', {
					cart_id: this.props.user.cart_id,
					product_id: id,
					price,
				})
				.then(() => {
					window.alert('Item added to cart');
				})
				.catch(err => console.log(err));
		} else {
			this.handleToggle();
		}
	};

	handleToggle = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	render() {
		// console.log(this.state.products);
		const mappedProducts = this.state.products.map((product, i) => (
			<div key={i} className="product-container">
				<img src={product.image} alt={product.name} className="product-image" />
				<p className="product-name">{product.name}</p>
				<p className="product-description">{product.description}</p>
				<p className="product-price">${product.price}</p>
				<button
					onClick={() => this.addToCart(product.product_id, product.price)}
					className="add-to-cart-button"
				>
					Add to Cart
				</button>
			</div>
		));
		return (
			<div className="products">
				{mappedProducts}{' '}
				{this.state.showModal ? (
					<AuthModal toggleFn={this.handleToggle} />
				) : null}
			</div>
		);
	}
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Products);
