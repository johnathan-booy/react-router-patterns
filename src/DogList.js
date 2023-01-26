import React from "react";
import DogDetails from "./DogDetails";
import { v4 as uuid } from "uuid";

const DogList = ({ dogs }) => {
	return (
		<div className="DogList">
			<h1>All Dogs</h1>
			{dogs.map((dog) => (
				<DogDetails dog={dog} key={uuid()} />
			))}
		</div>
	);
};

export default DogList;
