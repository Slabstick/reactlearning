import React from 'react';
import "./App.css"
import Die from './Die';

function App() {

	const [dice, setDice] = React.useState(allNewDice());
	let [win, setWin] = React.useState(false)
	

	function allNewDice() {
		const diceArray = []
		for (let i = 0; i < 10; i++) {
			diceArray.push(Math.floor(Math.random() * 6 + 1))
		}
		return diceArray.map((die, index) => {
			return {
				value: die,
				isHeld: false,
				id: index
			}
		})
	}

	function clickDie(dieId) {
		setDice(oldDice => {
			return oldDice.map(oldDie => {
				if (oldDie.id === dieId) {
					return {...oldDie, 
							isHeld: !oldDie.isHeld}
				} else {
					return oldDie
				}
			})
		})
	}

	function cast() {
		setDice(oldDice => {
			return oldDice.map(oldDie => {
				if (oldDie.isHeld) {
					return oldDie;
				} else {
					return {
						...oldDie,
						value: Math.ceil(Math.random()*6)
					}
				}
			})
		})
	}
	const dielements = dice.map((die, index) => {
		return <Die key={index} id={die.id} value={die.value} isHeld={die.isHeld} clickDie={clickDie}/>
	})
	// Win condition
	React.useEffect(()=> {
		const diceMap = dice.map(die => die.value)
		if (diceMap.every(value => value === dice[0].value) === true) {
			setWin(true);
		}
	}, [dice])

	return (
		<main className='tg-main'>
			<div className='tg-game-container'>
				<div className='tg-game'>
					<h1 className='tg-title'>Tenzies</h1>
					<p className='tg-rules'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
					<div className='tg-dice'>
						{dielements}
					</div>
					<button className='tg-button' onClick={cast} disabled={win && true}>{win? 'YOU WON!' : 'Roll'}</button>
				</div>
			</div>
		</main>
	);
}

export default App;