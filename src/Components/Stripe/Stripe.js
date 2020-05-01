import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const stripePrice = price * 100;
	const publicKey = 'pk_test_Wbws1dYC56rDTsTovvcUOdIM00cVjJ9tzx';

	const onToken = async token => {
		token.card = void 0;

		await axios
			.post('/api/payment', { token, amount: stripePrice })
			.then(() => {
				alert('Payment Submitted');
			})
			.catch(err => console.log(err));
		// console.log(token);
		// alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			// description={`Your total is $${price}`}
			amount={stripePrice}
			// panelLabel="Proceed to Checkout"
			token={onToken}
			stripeKey={publicKey}
			// shippingAddress
			// billingAddress
		/>
	);
};

export default StripeCheckoutButton;
