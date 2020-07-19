import React, { Component } from 'react';
import UserItem from './UserItem';
import './User.css';

class Users extends Component {
	render() {
		return (
			<div className='userStyle'>{this.props.users.map((user) => <UserItem key={user.id} user={user} />)}</div>
		);
	}
}

export default Users;
