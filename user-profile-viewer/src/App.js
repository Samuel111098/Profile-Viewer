import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Jumbo from './components/layout/Jumbo';
import Users from './components/users/Users';
import Search from './components/users/Search';
import User from './components/users/User';
import axios from 'axios';

class App extends Component {
	state = {
		users: [],
		user: {},
		loading: false
	};

	//Default users shown
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process
				.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data, loading: false });
	}

	//Searching for users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		//console.log(text);
		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ users: res.data.items, loading: false });
	};

	//Getting a Single User
	getUser = async (username) => {
		this.setState({ loading: true });
		//console.log(text);
		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env
				.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
		);
		this.setState({ user: res.data, loading: false });
	};

	//Clearing the users component
	clearUsers = () => this.setState({ users: [], loading: false });

	render() {
		const { users, user, loading } = this.state;

		return (
			<Router>
				<div className='App'>
					<Switch>
						<Route
							exact
							path='/'
							render={(props) => (
								<Fragment>
									<Jumbo />
									<div className='wrapper'>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={users.length > 0 ? true : false}
										/>
										<Users loading={loading} users={users} />
									</div>
								</Fragment>
							)}
						/>
						<Route
							exact
							path='/user/:login'
							render={(props) => <User {...props} getUser={this.getUser} user={user} loading={loading} />}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
