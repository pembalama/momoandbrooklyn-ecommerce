import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.scss';
// import { ReactComponent as Logo } from '../../assets/MOMO & BROOKLYN.svg';

const Header = () => (
	<header className="wrapper">
		<a className="logo">
			{/* <Logo className="logo" /> */}
			MOMO & BROOKLYN
		</a>
		<nav id="desktop-nav" className="header">
			<ul>
				<li>
					<Link to="/">shop</Link>
				</li>
				<li>
					<Link to="/cart">cart</Link>
				</li>
				<li>
					<Link to="/about">about</Link>
				</li>
			</ul>
		</nav>
	</header>
	// <header>
	// 	<nav id="desktop-nav" className="header">
	// 		<Link className="link" to="/">
	// 			Shop
	// 		</Link>
	// 		<span>
	// 			<Logo className="logo" />
	// 		</span>
	// 		<div className="nav-two">
	// 			<Link className="link" to="/cart">
	// 				Cart
	// 			</Link>
	// 			<Link className="link" to="/about">
	// 				About
	// 			</Link>
	// 		</div>
	// 	</nav>
	// </header>
);

export default Header;
