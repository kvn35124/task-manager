import * as React from 'react';
import { BrowswerRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';

class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<Router>
				<Navbar />
				<main className="container">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export interface IAppProps { }

export interface IAppState { }

export default App;
