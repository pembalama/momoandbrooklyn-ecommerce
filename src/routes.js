import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Products from './Components/Products';
import Cart from './Components/Cart';

export default (
	<Switch>
		<Route exact path="/" component={Products} />
		<Route path="/cart" component={Cart} />
	</Switch>
);
