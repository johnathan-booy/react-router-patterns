import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
	const history = useHistory();
	const [formData, setFormData] = useState({ name: "", color: "#00f0f0" });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addColor(formData);
		history.push("/colors");
	};

	return (
		<form onSubmit={handleSubmit}>
			<h1>Add a color</h1>
			<label htmlFor="name">Name</label>
			<input
				id="name"
				name="name"
				type="text"
				minLength={1}
				maxLength={20}
				value={formData.name}
				onChange={handleChange}
			/>
			<label htmlFor="color">Color</label>
			<input
				id="color"
				name="color"
				type="color"
				value={formData.color}
				onChange={handleChange}
			/>
			<button>Submit</button>
		</form>
	);
};

export default NewColorForm;
