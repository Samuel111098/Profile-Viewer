import React, { Component, Fragment } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Repos from '../repos/Repos';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export class User extends Component {
	componentDidMount() {
		this.props.getUser(this.props.match.params.login);
		this.props.getUserRepos(this.props.match.params.login);
	}

	render() {
		const { name, avatar_url, location, company, bio, login, followers, public_repos } = this.props.user;

		const { loading, repos } = this.props;

		if (loading) return <Spinner />;

		return (
			<Fragment>
				<Link to='/' style={{ display: 'inline' }}>
					<i className='fas fa-undo btn' style={{ width: '5%', borderRadius: '0px', color: '#111' }} />
				</Link>
				<Container>
					<Row className='cont'>
						<Col>
							<img src={avatar_url} className='round-img' alt='github_image' />
						</Col>
						<Col style={{ marginLeft: '2rem' }}>
							<h1>{name}</h1>
							<h5>@{login}</h5>
							<h5> Location: {location === null ? 'Not Available' : location} </h5>
						</Col>
					</Row>
					<Row className='cont1'>
						<Col>
							<h1>Bio</h1>
							<h4>{bio === null ? <h4>Not Available</h4> : bio}</h4>
						</Col>
					</Row>
					<Row className='cont1'>
						<Col>
							<h1>Works at</h1>
							<h4>{company === null ? <h4>Not Available</h4> : company}</h4>
						</Col>
					</Row>
					<Row className='cont2'>
						<Col>
							<h1>Repositories</h1>
							<h4>{public_repos === null ? <h4>Not Available</h4> : public_repos}</h4>
						</Col>
						<Col>
							<h1>Followers</h1>
							<h4>{followers === null ? <h4>Not Available</h4> : followers}</h4>
						</Col>
					</Row>
					<Row className='cont1'>
						<h1>Pinned Repositories</h1>
						<Col>
							<Repos repos={repos} />
						</Col>
					</Row>
				</Container>
			</Fragment>
		);
	}
}

export default User;
