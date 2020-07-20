import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './UserItem.css';

const UserItem = ({ user: { login, avatar_url, html_url, gists_url } }) => {
	return (
		<Card className='card'>
			<Card.Img className='round-img' variant='top' src={avatar_url} />
			<Card.Body>
				<Card.Title>{login}</Card.Title>
				<Link to={`/user/${login}`} className='btn'>
					Read More
				</Link>
			</Card.Body>
		</Card>
	);
};

export default UserItem;
