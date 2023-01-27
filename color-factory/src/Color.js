import React from "react";
import { Link } from "react-router-dom";

const Color = ({ color }) => {
	const style = { backgroundColor: color.color };
	return (
		<div style={style}>
			<h1>{color.name}</h1>
			<Link to="/colors">All Colors</Link>
		</div>
	);
};

export default Color;
