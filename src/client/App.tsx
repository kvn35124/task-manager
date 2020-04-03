import * as React from 'react';
import {BrowswerRouter as Router, Switch, Route} from 'react-router-dom';


class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<Router>
				<Switch>
					<Route exact path ="" />
					<Route exact path=""/>
					<Route exact path=""/>
				</Switch>
			</Router>
		);
	}
}

export interface IAppProps {}

export interface IAppState {}

export default App;
