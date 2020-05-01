import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/reducer';
// import AuthModal from '../Modal/AuthModal';

// import '../App.scss';
// import { ReactComponent as Logo } from '../../assets/MOMO & BROOKLYN.svg';

const Header = props => {
	const handleLogout = () => {
		axios
			.get('/api/logout')
			.then(() => {
				// Clear user
				props.logoutUser();
				props.history.push('/');
			})
			.catch(err => console.log(err));
	};

	// const handleLogin = () => {
	// 	this.handleToggle();
	// };

	console.log(props);
	return (
		<div>
			<header className="wrapper">
				<Link to="/" className="logo">
					{/* <Logo className="logo" /> */}
					MOMO & BROOKLYN
				</Link>
				{JSON.stringify(props.user) !== '{}' ? (
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
							<li>
								<Link to="/" onClick={() => handleLogout()}>
									Logout
								</Link>
							</li>
						</ul>
					</nav>
				) : (
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
							<li>
								{/* <Link to="/" onClick={() => handleLogin()}>
									Login
								</Link> */}
							</li>
						</ul>
					</nav>
				)}
			</header>
		</div>
	);
};

// export default Header;
const mapStateToProps = reduxState => reduxState;

export default withRouter(connect(mapStateToProps, { logoutUser })(Header));

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Header = () => (
// 	<header className="wrapper">
// 		<a className="logo">
//
// 			MOMO & BROOKLYN
// 		</a>
// 		<nav id="desktop-nav" className="header">
// 			<ul>
// 				<li>
// 					<Link to="/">shop</Link>
// 				</li>
// 				<li>
// 					<Link to="/cart">cart</Link>
// 				</li>
// 				<li>
// 					<Link to="/about">about</Link>
// 				</li>
// 				<li>
// 					<Link to="/about">Logout</Link>
// 				</li>
// 			</ul>
// 		</nav>
// 	</header>
// );

// export default Header;
