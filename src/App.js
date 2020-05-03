import React from 'react';
import routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import './App.scss';

function App() {
	return (
		<div className="App">
			<Header />
			<div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
				{routes}
			</div>
			<Footer />
		</div>
	);
}

export default App;
