import React from 'react';
import Card from 'react-bootstrap/Card';
import './UserItem.css';

const UserItem = ({ user: { login, avatar_url, html_url, gists_url } }) => {
	return (
		<Card className='card'>
			<Card.Img className='round-img' variant='top' src={avatar_url} />
			<Card.Body>
				<Card.Title>{login}</Card.Title>
				<Card.Text>{gists_url}</Card.Text>
				<a href={html_url} className='btn'>
					Read More
				</a>
			</Card.Body>
		</Card>
	);
};

export default UserItem;
