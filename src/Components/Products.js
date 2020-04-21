import React from 'react';
import axios from 'axios';

class Products extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		axios
			.get('/api/products')
			.then(res => this.setState({ products: res.data }))
			.catch(err => console.log(err));
	}

	render() {
		console.log(this.state.products);
		return <div>Products Component</div>;
	}
}

export default Products;
