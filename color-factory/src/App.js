import { useState } from "react";
import "./App.css";
import Routes from "./Routes";

function App({ defaultColors }) {
	const [colors, setColors] = useState(defaultColors);

	const addColor = (color) => {
		setColors((colors) => [...colors, color]);
	};

	return (
		<div className="App">
			<Routes colors={colors} addColor={addColor} />
		</div>
	);
}

App.defaultProps = {
	defaultColors: [
		{ name: "Red", color: "#ff0000" },
		{ name: "Green", color: "#00ff00" },
		{ name: "Blue", color: "#0000ff" },
		{ name: "Yellow", color: "#ffff00" },
		{ name: "Purple", color: "#660066" },
	],
};

export default App;
