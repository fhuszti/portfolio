import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './assets/scss/index.scss';
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import InteractiveResume from "./pages/InteractiveResume";

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/cv-interactive">
					<InteractiveResume/>
				</Route>
				<Route path="/cv">
					<Resume/>
				</Route>
				<Route path="/">
					<Home/>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
