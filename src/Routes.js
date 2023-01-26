import { Redirect, Route, Switch } from "react-router-dom";

function Routes({ dogs }) {
	return (
		<Switch>
			<Route exact path="/dogs">
				<h1>List of dogs</h1>
			</Route>
			<Route exact path="/dogs/:name">
				<h1>One dog</h1>
			</Route>
			<Redirect to="/dogs" />
		</Switch>
	);
}

export default Routes;
