import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Search extends Component {
	state = {
		text: ''
	};

	onChange = (e) => this.setState({ text: e.target.value });

	onSubmit = (e) => {
		e.preventDefault();
		if (this.state.text === '') {
			alert('Please Enter Values');
		} else {
			//console.log(this.state.text);
			this.props.searchUsers(this.state.text);
			this.setState({ text: '' });
		}
	};

	render() {
		const { clearUsers, showClear } = this.props;
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
				{showClear && (
					<Button style={btn1Style} onClick={clearUsers} variant='light'>
						Clear
					</Button>
				)}
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
	marginTop: '1rem',
	cursor: 'pointer'
};

const btn1Style = {
	backgroundColor: 'rgb(235,235,235)',
	display: 'block',
	padding: '1rem',
	width: '100%',
	marginTop: '1rem',
	borderRadius: '0px'
};

const enterStyle = {
	padding: '0.7rem',
	width: '100%'
};

export default Search;
