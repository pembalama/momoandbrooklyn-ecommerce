module.exports = {
	getProducts: (req, res) => {
		const db = req.app.get('db');

		db.products
			.get_products()

			.then(products => res.status(200).send(products))
			.catch(err => res.status(500).send(err));
	},
};
