import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const simulateClick = (e) => {
    e.click();
  }
  const onButtonClick = () => {
    window.location.href = "https://www.myntra.com/giftcard";
  }

  return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div ref={simulateClick} onClick={onButtonClick}>
					Click me
				</div>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
