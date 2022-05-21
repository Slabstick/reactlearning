import React from 'react';

function Box(props) {
	const color = {backgroundColor: props.black ? "#222222" : "#cccccc"}
	// console.log(props.black)
	return (
		<div className='box' black={props.black} style={color} onClick={props.changeColor}>
			{props.id} {props.lineid}
		</div>
	);
}

export default Box;