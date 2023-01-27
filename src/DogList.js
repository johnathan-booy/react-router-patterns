import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import "./DogList.css";

const DogList = ({ dogs }) => {
	return (
		<>
			<h1>We have dogs!</h1>
			<p>and they are paw-some!</p>
			<div className="DogList">
				{dogs.map((dog) => (
					<Link to={`/dogs/${dog.name}`} className="DogList-dog" key={uuid()}>
						<h3 className="DogList-dog-name">{dog.name}</h3>
						<img src={dog.src} />
					</Link>
				))}
			</div>
		</>
	);
};

export default DogList;
