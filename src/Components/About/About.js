import React from 'react';
import './About.scss';

function About() {
	return (
		<div className="about-container">
			<h3>Welcome to Momo & Brooklyn</h3>
			<br />
			<div className="two-col">
				<div className="left-col">
					<img
						className="about-pic"
						src="https://images.unsplash.com/photo-1544967919-44c1ef2f9e7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
						alt="plants"
					/>
				</div>

				<div className="about-info right-col">
					<br />
					<h4>Perfect gifts to make anyone feel special.</h4>

					<p>
						Made with 100% soft wool, our beanie hats always feels comfortable
						to wear.
					</p>

					<p>
						Our beanie hats are knitted with great care and attention. They
						boast a luxury texture and warmth Relaxed silhouette and a rich,
						luxurious finish..
					</p>
				</div>
			</div>
			<br></br>
			<br></br>
			<hr className="contact-line-break"></hr>
			<br />
			<p>
				<span>Contact Us:</span> <br />
				<span className="email">Momo&Brooklyn@gmail.com</span>
			</p>
			<br></br>
		</div>
	);
}

export default About;
