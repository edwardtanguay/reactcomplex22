import { Component } from 'react';
import logo from './logo.png';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleLogo: true
		};

		// need for ES6
		this.toggleLogo = this.toggleLogo.bind(this);
	}

	toggleLogo(event) {
		this.setState((prevState) => ({
			toggleLogo: !prevState.toggleLogo
		}));
	}

	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo}
						className={this.state.toggleLogo ? 'static-logo' : 'animated-logo'}
						onClick={this.toggleLogo}
						alt="logo" />
					<div><span className="mainHeader">Welcome to React</span></div>
				</header>
			</div>
		);
	}
}

export default App;
