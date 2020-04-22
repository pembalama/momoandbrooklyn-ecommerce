import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import routes from './routes';
import Header from './Components/Header';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			{routes}
		</div>
	);
}

export default App;
