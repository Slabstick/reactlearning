import React, { useState, useEffect } from 'react';

function Die(props) {
	const [animation, setAnimation] = useState(1);
	// if (props.isRolling) {
	// 	console.log(`${props.id} is rolling!`)
	// } else {
	// 	console.log(`${props.id} is sleep!`)
	// }

	useEffect(()=> {
		if (props.isRolling) {
			const interval = setInterval(()=>{
				setAnimation(Math.ceil(Math.random() * 6));
			}, 50);
			return () => clearInterval(interval)
		}
	}, [props.isRolling, animation])

	return (
		<button 
			className={props.isHeld === false ? 'tg-die' : 'tg-die-held'} 
			onClick={()=>props.clickDie(props.id)}
		>
			{props.isRolling ? animation : props.value}
		</button>
	);
}

export default Die;