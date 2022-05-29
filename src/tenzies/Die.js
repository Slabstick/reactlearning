import React, { useState, useEffect } from 'react';

function Die(props) {
	const [animation, setAnimation] = useState(1);

	useEffect(()=> {
		if (props.isRolling) { //animate randomly between 1 and 6 every 50ms
			const interval = setInterval(()=>{
				setAnimation(Math.ceil(Math.random() * 6));
			}, 50);
			return () => clearInterval(interval)
		}
	}, [props.isRolling, animation])
	// console.log(props.rounds)
	return (
		<button 
			className={props.isHeld === false ? 'tg-die' : 'tg-die-held'}
			disabled={props.rounds === 0 ? true : false}
			onClick={()=>props.clickDie(props.id)}
		>
			{props.isRolling ? animation : props.value}
		</button>
	);
}

export default Die;