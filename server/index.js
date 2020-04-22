require('dotenv').config();
const express = require('express'),
	massive = require('massive'),
	session = require('express-session'),
	authCtrl = require('./controllers/authController'),
	mainCtrl = require('./controllers/mainController'),
	{ SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
	port = SERVER_PORT,
	app = express();

app.use(express.json());
app.use(
	session({
		resave: false,
		saveUninitialized: true,
		secret: SESSION_SECRET,
		cookie: { maxAge: 1000 * 60 * 60 * 24 * 14 },
	})
);

massive({
	connectionString: CONNECTION_STRING,
	ssl: { rejectUnauthorized: false },
}).then(db => {
	app.set('db', db);
	console.log('db connected successfully');
});

//Main endpoints
app.get('/api/products', mainCtrl.getProducts);
app.post('/api/cart-item', mainCtrl.addTocart);
app.get('/api/cart/:id', mainCtrl.getCart);
app.delete('/api/cart-item/:id', mainCtrl.deleteCartItem);

//Auth endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

app.listen(port, () => console.log(`Server is running on ${port}`));
