import React from "react";

const DogDetails = ({ dog }) => {
	return (
		<div className="DogDetails">
			<h3 className="DogDetails-name">{dog.name}</h3>
		</div>
	);
};

export default DogDetails;
