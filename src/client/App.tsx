import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Navbar from './Component/Navbar';
import Register from './Pages/Register';
import Description from './Pages/Description';
import Edit from './Pages/Edit';

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
						<Route exact path ="/tasks/:id" component={Description} />
						<Route exact path="/edit/:id" component={Edit} />
					</Switch>
				</main>
			</Router>
		);
	}
}

export interface IAppProps { }

export interface IAppState { }

export default App;
