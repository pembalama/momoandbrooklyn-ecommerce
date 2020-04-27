import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.scss';
import { ReactComponent as Logo } from '../assets/MOMO & BROOKLYN.svg';

const Header = () => (
	<header>
		<nav id="desktop-nav" className="header">
			<Link to="/">Shop</Link>
			<span>
				<Logo className="logo" />
			</span>
			<Link to="/cart">Cart</Link>
			<Link to="/cart">About</Link>
		</nav>
	</header>
);

export default Header;
