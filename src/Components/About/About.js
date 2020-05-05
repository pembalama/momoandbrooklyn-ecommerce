import React from 'react';
import './About.scss';

function About() {
	return (
		<div className="about-container">
			<img
				className="about-pic"
				src="https://images.unsplash.com/photo-1544967919-44c1ef2f9e7a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
				alt="plants"
				style={{ width: 600 }}
			/>
			<div className="about-w">
				<h1>Welcome to Momo & Brooklyn</h1>
				<h3>Perfect gifts to make anyone feel special.</h3>
				<hr></hr>
				<p>
					Made with 100% soft wool, our beanie hats always feels comfortable to
					wear.
				</p>
			</div>

			<p>
				Our beanie hats are knitted with great care and attention. They boast a
				luxury texture and warmth Relaxed silhouette and a rich, luxurious
				finish..
			</p>
			<br></br>

			<p>Contact: Momo&Brooklyn@gmail.com</p>
			<br></br>
		</div>
	);
}

export default About;
