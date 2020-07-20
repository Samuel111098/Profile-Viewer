import React from 'react';
import Card from 'react-bootstrap/Card';

const RepoItem = ({ repo }) => {
	return (
		<Card>
			<Card.Body>
				<Card.Title style={{ fontSize: '1.5rem', margin: '0.5rem auto', textDecorationLine: 'underline' }}>
					{repo.full_name}
				</Card.Title>
				<Card.Text style={{ fontSize: '1.2rem', margin: '0.5rem auto' }}>
					{repo.description === null ? 'Not Available' : repo.description}
				</Card.Text>
				<Card.Link className='btn' href={repo.html_url}>
					Link to Repository
				</Card.Link>
			</Card.Body>
		</Card>
	);
};

export default RepoItem;
