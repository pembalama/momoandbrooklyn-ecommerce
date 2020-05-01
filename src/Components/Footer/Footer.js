import React from 'react';
// import { Link } from 'react-router-dom';
// import '../App.scss';
import './Footer.scss';

const Footer = () => (
	<section className="Footer">
		<div className="legal-info">
			COPYRIGHT © 2020 MOMO & BROOKLYN BY PEMBA LAMA
		</div>
		{/* <div className="icon">
			<i className="fab fa-facebook"></i>
			<i className=" fab fa-instagram"></i>
			<i className="fab fa-pinterest"></i>
			<i className="fab fa-youtube"></i>
		</div> */}
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
