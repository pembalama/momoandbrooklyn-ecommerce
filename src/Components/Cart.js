import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import StripeCheckoutButton from './Stripe';
import Edit from './Edit';

class Cart extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			cart: [],
		};
	}

	componentDidMount() {
		this.getCart();
	}

	getCart = () => {
		axios
			.get(`/api/cart/${this.props.user.cart_id}`)
			.then(res => this.setState({ cart: res.data }))
			.catch(err => console.log(err));
	};

	deleteCartItem = id => {
		axios
			.delete(`/api/cart-item/${id}`)
			.then(() => this.getCart())
			.catch(err => console.log(err));
	};

	editCartItem = (item, qty) => {
		// console.log(product);
		axios
			.put(`/api/cart-item/${item.cart_item_id}`, { qty })
			.then(results => {
				this.getCart();
			})
			.catch(err => console.log(err));
	};

	render() {
		const mappedCart = this.state.cart.map((item, i) => {
			return (
				<Edit
					item={item}
					key={i}
					editCartItem={this.editCartItem}
					deleteCartItem={this.deleteCartItem}
				/>
			);
		});
		const total = this.state.cart.reduce((total, element) => {
			return total + +element.price * +element.qty;
		}, 0);
		return (
			<div>
				{mappedCart}
				<div className="total">Total Amount: ${total}</div>
				<div>
					<StripeCheckoutButton price={total} />
				</div>
			</div>
		);
	}
}

const mapStateToProps = reduxState => reduxState;

export default connect(mapStateToProps)(Cart);
