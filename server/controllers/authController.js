const bcrypt = require('bcryptjs');

module.exports = {
	register: async (req, res) => {
		const { email, password } = req.body,
			db = req.app.get('db');

		let foundUser = await db.customer.check_customer(email);
		if (foundUser[0]) {
			return res.status(400).send('Email is already in use');
		}

		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(password, salt);
		let newUser = await db.customer.register_customer(email, hash);

		let customerCart = await db.cart.create_cart(newUser[0].customer_id);
		let sessionCustomer = { ...newUser[0], ...customerCart[0] };

		req.session.user = sessionCustomer;
		res.status(201).send(req.session.user);
	},
	login: async (req, res) => {
		const { email, password } = req.body,
			db = req.app.get('db');

		let foundUser = await db.customer.check_customer(email);
		if (!foundUser[0]) {
			return res.status(400).send('Email or Password is Incorrect');
		}

		const authorized = bcrypt.compareSync(password, foundUser[0].password);
		if (!authorized) {
			return res.status(401).send('Incorrect password');
		}

		delete foundUser[0].password;
		req.session.user = foundUser[0];
		res.status(202).send(req.session.user);
	},
	logout: (req, res) => {
		req.session.destroy();
		res.sendStatus(200);
	},
};
