import React from 'react';
import "./App.css"
import Die from './Die';
import Confetti from 'react-confetti'

function App() {

	const [dice, setDice] = React.useState(JSON.parse(localStorage.getItem('dice')) || allNewDice());
	let [win, setWin] = React.useState(JSON.parse(localStorage.getItem('win')) || false);
	let [rounds, setRounds] = React.useState(Number(localStorage.getItem('rounds')) || 0)

	React.useEffect(()=> {
		localStorage.setItem('dice', JSON.stringify(dice))
		localStorage.setItem('win', win)
		localStorage.setItem('rounds', rounds)
	},[dice, win, rounds])

	// console.log(localStorage.getItem('win'))
	

	function allNewDice() {
		const diceArray = []
		for (let i = 0; i < 10; i++) {
			diceArray.push(Math.floor(Math.random() * 6 + 1))
		}
		return diceArray.map((die, index) => {
			return {
				value: die,
				isHeld: false,
				id: index,
				rolling: false
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

	function tutorial() {
		if (rounds === 0) {
			return 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.'
		}

		if (win === true) {
			return `YOU WON AFTER ${rounds} ROUNDS!!!`
		}

		if (rounds > 0) {
			return `Good Luck!`
		}
	}

	function rollOnce() {
		setDice(oldDice => {
			return oldDice.map(oldDie => {
				if (oldDie.isHeld) {
					return oldDie;
				} else {
					return {
						...oldDie,
						value: Math.ceil(Math.random() * 6)
					}
				}
			})
		})
	}

	function rollDice() {
		if (!win) {
			setRounds(oldRounds => oldRounds + 1)
			rollOnce();
		} else {
			setDice(allNewDice())
			setRounds(0)
			setWin(false)
		}
	}
	const dielements = dice.map((die, index) => {
		return <Die key={index} id={die.id} value={die.value} isHeld={die.isHeld} clickDie={clickDie}/>
	})
	// Win condition
	React.useEffect(()=> {
		if (dice.every(die => die.value === dice[0].value && die.isHeld) === true) {
			setWin(true);
		}
	}, [dice, rounds])

	return (
		<main className='tg-main'>
			{win && <Confetti height='380px' width='360px' />}
			<div className='tg-game-container'>
				<div className='tg-game'>
					<h1 className='tg-title'>{win ? 'WINNER!' : 'Tenzies'}</h1>
					<p className='tg-rules'>{tutorial()}</p>
					<div className='tg-dice'>
						{dielements}
					</div>
					<button className='tg-button' onClick={rollDice}>{win ? 'Restart?' : 'Roll'}</button>
				</div>
			</div>
		</main>
	);
}

export default App;

//TODO: Add Timer & Highscore (to localstorage) and add dots to dice instead of numbers