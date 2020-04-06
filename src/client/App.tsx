import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';
import Register from './Pages/Register';

class App extends React.Component<IAppProps, IAppState> {

	render() {
		return (
			<Router>
				<Navbar />
				<main className="container mt-5 pt-3">
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/register" component={Register} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export interface IAppProps { }

export interface IAppState { }

export default App;
