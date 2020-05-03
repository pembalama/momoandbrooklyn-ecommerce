import React from 'react';

// import '../App.scss';
import './Footer.scss';

const Footer = () => (
	<section className="Footer">
		<div className="legal-info">© 2020 MOMO & BROOKLYN, Inc.</div>
		<div className="icon">
			<i className="fab fa-facebook-square"></i>
			<i className=" fab fa-twitter"></i>
			<i className="fab fa-instagram"></i>
			<i className="fab fa-pinterest"></i>
		</div>
		<div className="more-info">
			<h6>Contact Us</h6>
			<h6>Terms of Use</h6>
			<h6>Privacy Policy</h6>
			<h6>Returns</h6>
			<h6>Careers</h6>
		</div>
	</section>
);

export default Footer;
