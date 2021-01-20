import { h, render } from "preact";
import Router, { Route } from "preact-router";
import "preact/devtools";

import "./index.css";

import ModPage from "~/pages/ModPage";
import SearchPage from "~/pages/SearchPage";

const Main = () => (
	<Router>
		<Route default path="/" component={SearchPage} />
		<Route path="/mod/:id" component={ModPage} />
	</Router>
);

render(<Main />, document.querySelector("#root") ?? document.body);
