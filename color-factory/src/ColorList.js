import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";

const ColorList = ({ colors }) => {
	return (
		<div>
			<h1>Welcome to the Color Factory!</h1>
			<h3>
				<Link to="/colors/new">Add a Color</Link>
			</h3>
			<h3>Select a color</h3>
			{colors.map((color) => (
				<p key={uuid()}>
					<Link to={`/colors/${color.name}`}>{color.name}</Link>
				</p>
			))}
		</div>
	);
};

export default ColorList;
