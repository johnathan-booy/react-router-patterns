import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./DogDetails";

const FindDogDetails = ({ dogs }) => {
	const { name } = useParams();
	const dog = dogs.find((dog) => dog.name === name);
	return <DogDetails dog={dog} />;
};

export default FindDogDetails;
