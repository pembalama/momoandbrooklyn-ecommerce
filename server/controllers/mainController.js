module.exports = {
	getProducts: (req, res) => {
		const db = req.app.get('db');

		db.products
			.get_products()

			.then(products => res.status(200).send(products))
			.catch(err => res.status(500).send(err));
	},
	addTocart: (req, res) => {
		const { cart_id, product_id, price } = req.body,
			db = req.app.get('db');

		db.cart
			.add_to_cart(cart_id, product_id, price)
			.then(() => res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
	getCart: (req, res) => {
		const { id } = req.params,
			db = req.app.get('db');

		db.cart
			.get_cart(id)
			.then(items => res.status(200).send(items))
			.catch(err => res.status(500).send(err));
	},
	deleteCartItem: (req, res) => {
		const { id } = req.params,
			db = req.app.get('db');

		db.cart
			.delete_cart_item(id)
			.then(() => res.sendStatus(200))
			.catch(err => res.status(500).send(err));
	},
};