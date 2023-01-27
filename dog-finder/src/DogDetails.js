import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./DogDetails.css";

const DogDetails = ({ dog }) => {
	return (
		<div className="DogDetails">
			<Link exact to="/dogs">
				See All Dogs
			</Link>
			<h3 className="DogDetails-name">{dog.name}</h3>
			<p className="DogDetails-age">{dog.age} years old</p>

			<img src={dog.src} />
			<ul className="DogDetails-facts">
				{dog.facts.map((fact) => (
					<li key={uuid()}>{fact}</li>
				))}
			</ul>
		</div>
	);
};

export default DogDetails;
