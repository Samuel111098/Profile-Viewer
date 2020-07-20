import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class Search extends Component {
	state = {
		text: ''
	};

	onChange = (e) => this.setState({ text: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		//console.log(this.state.text);
		this.props.searchUsers(this.state.text);
		this.setState({ text: '' });
	};

	render() {
		return (
			<div>
				<Form onSubmit={this.onSubmit}>
					<input
						style={enterStyle}
						type='text'
						placeholder='Enter User'
						value={this.state.text}
						onChange={this.onChange}
					/>
					<input style={btnStyle} type='submit' value='search' />
				</Form>
			</div>
		);
	}
}
const btnStyle = {
	backgroundColor: 'black',
	color: 'white',
	display: 'block',
	padding: '1rem',
	width: '100%',
	marginTop: '1rem'
};

const enterStyle = {
	padding: '0.7rem',
	width: '100%'
};

export default Search;
