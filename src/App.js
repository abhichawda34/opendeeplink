import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const simulateClick = (e) => {
    e.click();
  }

  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />				
				<a ref={simulateClick} href="myntra://myntra.com/cbc/store">
					Click me
				</a>
			</header>
		</div>
	);
}

export default App;
