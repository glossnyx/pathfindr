import { h, render } from "preact";
import Router, { Route } from "preact-router";
import "preact/devtools";

const Search = () => <div>Search</div>;
const Mod = (props: { id: string }) => <div>Mod {props.id}</div>;

const Main = () => (
	<Router>
		<Route default path="/" component={Search} />
		<Route path="/mod/:id" component={Mod} />
	</Router>
);

render(<Main />, document.getElementById("root") ?? document.body);
