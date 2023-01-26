import { Redirect, Route, Switch } from "react-router-dom";
import DogList from "./DogList";

function Routes({ dogs }) {
	return (
		<Switch>
			<Route exact path="/dogs">
				<DogList dogs={dogs} />
			</Route>
			<Route exact path="/dogs/:name">
				<h1>One dog</h1>
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
}

export default Routes;
