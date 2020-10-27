import { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Card from './components/Card'

// import Animate from 'animate.css-react'
// import 'animate.css/animate.css' 

const duration = "test";

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			toggleLogo: true,
			cards: [
				{
					id: 1,
					animation: 'card'
				},
				{
					id: 2,
					animation: 'card'
				},
				{
					id: 3,
					animation: 'card'
				},
				{
					id: 4,
					animation: 'card'
				},
				{
					id: 5,
					animation: 'card'
				},
				{
					id: 6,
					animation: 'card'
				}
			]
		};

		// need for ES6
		this.toggleLogo = this.toggleLogo.bind(this);
		this.clickCard = this.clickCard.bind(this);
	}

	toggleLogo(event) {
		this.setState((prevState) => ({
			toggleLogo: !prevState.toggleLogo
		}));
	}

	clickCard(card) {
		let cards = this.state.cards;
		cards.find(m => m.id == card.id).animation = "card animate__animated animate__zoomOut";
		this.setState({ cards })
	}

	render() {
		return (
			<div className="App">
				{/* <Animate
					appear="fadeInDown"
					durationAppear={1000}
					component="div" >

					<h1>react animate.css</h1>

				</Animate> */}

				<h1 class="animate__animated animate__bounce">An animated element</h1>


				<header className="App-header">
					<img src={logo}
						className={this.state.toggleLogo ? 'static-logo' : 'static-logo animate__animated animate__jello'}
						onMouseEnter={this.toggleLogo}
						onMouseLeave={this.toggleLogo}
						alt="logo" />
					<div><span className="mainHeader">Welcome to React</span></div>
				</header>
				<div className="grid">
					{this.state.cards.map((card) => {
						return (
							<Card duration={duration} key={card.id} card={card} clickCard={this.clickCard} />
						)
					})}
				</div>
			</div>
		);
	}
}

export default App;