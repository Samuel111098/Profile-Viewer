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
		repos: [],
		loading: false
	};

	//Default users shown
	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(`https://api.github.com/users`);
		this.setState({ users: res.data, loading: false });
	}

	//Searching for users
	searchUsers = async (text) => {
		this.setState({ loading: true });
		//console.log(text);
		const res = await axios.get(`https://api.github.com/search/users?q=${text}`);
		this.setState({ users: res.data.items, loading: false });
	};

	//Getting a Single User
	getUser = async (username) => {
		this.setState({ loading: true });
		//console.log(text);
		const res = await axios.get(`https://api.github.com/users/${username}`);
		this.setState({ user: res.data, loading: false });
	};

	//Get User Repos
	getUserRepos = async (username) => {
		this.setState({ loading: true });
		//console.log(text);
		const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`);
		this.setState({ repos: res.data, loading: false });
	};

	//Clearing the users component
	clearUsers = () => this.setState({ users: [], loading: false });

	render() {
		const { users, user, repos, loading } = this.state;

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
							render={(props) => (
								<User
									{...props}
									getUser={this.getUser}
									getUserRepos={this.getUserRepos}
									repos={repos}
									user={user}
									loading={loading}
								/>
							)}
						/>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
