import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Color from "./Color";

const FindColor = ({ colors }) => {
	const { name } = useParams();
	const color = colors.find(
		(color) => color.name.toLowerCase() === name.toLowerCase()
	);

	if (!color) return <Redirect to="/colors" />;

	return <Color color={color} />;
};

export default FindColor;
