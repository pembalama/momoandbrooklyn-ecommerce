import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
	<div>
		<Link to="/">Products</Link>
		<Link to="/cart">Cart</Link>
	</div>
);

export default Header;
