import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../redux/reducer';
import axios from 'axios';
import './AuthModal.scss';

const AuthModal = props => {
	const [emailInput, setEmailInput] = useState(''),
		[passInput, setPassInput] = useState('');

	const login = () => {
		axios
			.post('/api/login', { email: emailInput, password: passInput })
			.then(res => {
				props.getUser(res.data);
				props.toggleFn();
			})
			.catch(err => console.log(err));
	};

	const register = () => {
		axios
			.post('/api/register', { email: emailInput, password: passInput })
			.then(res => {
				props.getUser(res.data);
				props.toggleFn();
			})
			.catch(err => console.log(err));
	};

	return (
		<div className="form">
			<div className="modal">
				<p className="modal-message">To add to your cart please sign in.</p>
				<input
					value={emailInput}
					placeholder="Email address"
					onChange={e => setEmailInput(e.target.value)}
				/>
				<input
					value={passInput}
					placeholder="Password"
					type="password"
					onChange={e => setPassInput(e.target.value)}
				/>
				<button className="login-btn" onClick={login}>
					Login
				</button>
				<button className="register-btn" onClick={register}>
					Don't have an account? <span>Sign up</span>
				</button>
				<span className="modal-close" onClick={props.toggleFn}>
					X
				</span>
			</div>
		</div>
	);
};

export default connect(null, { getUser })(AuthModal);

// used REACT HOOKS here with the Auth Modal.
