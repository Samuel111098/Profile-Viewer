import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import './Jumbo.css';

const Jumbo = () => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<i className='fab fa-github' />
					<h1>Github Profile Viewer</h1>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Jumbo;
