import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import routes from './routes';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<div>{routes}</div>
			<Footer />
		</div>
	);
}

export default App;
