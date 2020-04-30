import React from 'react';
import './About.scss';

function About() {
	return (
		// <div className={style.About}>
		// 	<img
		// 		className="about-pic"
		// 		src="https://images.unsplash.com/photo-1574368825577-91938ed16776?ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80"
		// 	/>
		// 	<div>
		// 		<h1>AMAZING HANDKNITTED GIFTS</h1>
		// 		<h3>Perfect gifts to make anyone feel special.</h3>
		// 		<hr></hr>
		// 		<p>SOME TEXT</p>
		// 	</div>
		// 	<img src="https://images.unsplash.com/photo-1582223474654-65a642836b00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80" />
		// 	<p>SOME TEXT</p>
		// </div>

		<div className="About">
			<div className="aboutText">
				<div>
					<h4>AMAZING HANDKNITTED GIFTS.</h4>

					<p>Perfect gifts to make anyone feel special!</p>
				</div>
			</div>
		</div>
	);
}

export default About;
