import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../redux/reducer';
import axios from 'axios';
import './AuthModal.css';

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
			<input
				value={emailInput}
				placeholder="Email"
				onChange={e => setEmailInput(e.target.value)}
			/>
			<input
				value={passInput}
				placeholder="Password"
				type="password"
				onChange={e => setPassInput(e.target.value)}
			/>
			<button onClick={login}>Login</button>
			<button onClick={register}>Register</button>
			<button onClick={props.toggleFn}>Cancel</button>
		</div>
	);
};

export default connect(null, { getUser })(AuthModal);

// used REACT HOOKS here with the Auth Modal.
