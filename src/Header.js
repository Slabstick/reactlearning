import React from 'react';

function Header(props) {

	return (
		<div className='main-header'>
			<form className='app-picker'>
				<label htmlFor='app'>Choose App:</label> <br/>
				<select 
				id='app'
				onChange={props.handleChange}
				value={props.choice}
				className="main-select"
				>
					<option value="airbnb">Airbnb</option>
					<option value="bCard">Business Card</option>
					<option value="chessboard">Chessboard</option>
					<option value="jsxIntroduction">Cat Cards</option>
					<option value="meme-Generator">Meme Generator</option>
					<option value="signUpForm">SignUp Form</option>
					<option value="travelguide">Travelguide</option>
					<option value="reactfacts">React Facts</option>
					<option value="tenzies">Tenzies</option>
				</select>
			</form>
		</div>
	);
}

export default Header;