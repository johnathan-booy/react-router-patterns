import { Redirect, Route, Switch } from "react-router-dom";
import ColorList from "./ColorList";
import FindColor from "./FindColor";
import NewColorForm from "./NewColorForm";

function Routes({ colors, addColor }) {
	return (
		<Switch>
			<Route exact path="/colors">
				<ColorList colors={colors} />
			</Route>
			<Route exact path="/colors/new">
				<NewColorForm addColor={addColor} />
			</Route>
			<Route exact path="/colors/:name">
				<FindColor colors={colors} />
			</Route>
			<Redirect to="colors" />
		</Switch>
	);
}

export default Routes;
