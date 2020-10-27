import React from 'react';
import './Card.css';

const Card = (props) => (
	<div className={props.card.animation}
		onClick={() => props.clickCard(props.card)}>
		<img src="juice.jpg" alt="Juice" className="card-image" />
		<div className="container">
			<h3>Vitamin Juice <span className="price">$3.99</span></h3>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dignissimos cumque soluta id repellat error non perspiciatis vero ad facilis mollitia delectus, iste consequuntur quaerat, minus ab eligendi? Vero rem quos maxime et, eius repellat earum.</p>
		</div>
	</div>
);

export default Card;