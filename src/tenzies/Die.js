import React from 'react';

function Die(props) {
	return (
		<button 
			className={props.isHeld === false ? 'tg-die' : 'tg-die-held'} 
			onClick={()=>props.clickDie(props.id)}
		>
			{props.value}
		</button>
	);
}

export default Die;