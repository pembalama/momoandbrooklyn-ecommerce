import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.scss';
import { ReactComponent as Logo } from '../assets/MOMO & BROOKLYN.svg';

const Header = () => (
	<header>
		<nav id="desktop-nav" className="header">
			<Link className="link" to="/">
				Shop
			</Link>
			<span>
				<Logo className="logo" />
			</span>
			<div className="nav-two">
				<Link className="link" to="/cart">
					Cart
				</Link>
				<Link className="link" to="/cart">
					About
				</Link>
			</div>
		</nav>
	</header>
);

export default Header;
