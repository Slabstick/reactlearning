import React, { useState, useEffect } from 'react';
import "./App.css"
import Die from './Die';
import Confetti from 'react-confetti'

function App() {

	const [dice, setDice] = useState(JSON.parse(localStorage.getItem('dice')) || allNewDice());
	let [win, setWin] = useState(JSON.parse(localStorage.getItem('win')) || false);
	let [rounds, setRounds] = useState(Number(localStorage.getItem('rounds')) || 0);
	let [animate, setAnimate] = useState(false);
	

	React.useEffect(()=> {
		localStorage.setItem('dice', JSON.stringify(dice));
		localStorage.setItem('win', win);
		localStorage.setItem('rounds', rounds);
	},[dice, win, rounds]);

	// console.log(localStorage.getItem('win'))
	

	function allNewDice() {
		const diceArray = []
		for (let i = 0; i < 10; i++) {
			diceArray.push(Math.floor(Math.random() * 6 + 1));
		}
		return diceArray.map((die, index) => {
			return {
				value: die,
				isHeld: false,
				id: index,
				isRolling: false
			};
		});
	}

	function clickDie(dieId) {
		setDice(oldDice => {
			return oldDice.map(oldDie => {
				if (oldDie.id === dieId) {
					return {...oldDie, 
							isHeld: !oldDie.isHeld};
				} else {
					return oldDie;
				}
			});
		});
	}

	function tutorial() {
		if (rounds === 0) {
			return 'Roll until all dice are the same. Click each die to freeze it at its current value between rolls.';
		}

		if (win === true) {
			return `YOU WON AFTER ${rounds} ROUNDS!!!`;
		}

		if (rounds > 0) {
			return `Good Luck!`;
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
					};
				}
			});
		});
	}

	function animateRollingDice() {
		setDice(oldDice => oldDice.map(oldDie => {
			if (!oldDie.isHeld) {
				return {
					...oldDie,
					isRolling: true
				};
			} else {
				return oldDie
			}
		}));
	}

	function unanimateRollingDice() {
		setDice(oldDice => oldDice.map(oldDie => {
			return {
				...oldDie,
				isRolling: false
			}
		}));
	}

	useEffect(()=>{
		if (animate) {
			animateRollingDice();
			const roll = setTimeout(()=>{
				rollOnce();
				unanimateRollingDice();
				setAnimate(false);
			}, 2000);
			return () => clearTimeout(roll);
		};
	}, [animate]);
	// console.log(animate)
	function rollDice() {
		if (!win) {
			setRounds(oldRounds => oldRounds + 1);
			setAnimate(true);
		} else {
			setDice(allNewDice());
			setRounds(0);
			setWin(false);
		}
	}
	const dielements = dice.map((die, index) => {
		return <Die 
					key={index} 
					id={die.id} 
					value={die.value} 
					isHeld={die.isHeld} 
					clickDie={clickDie} 
					isRolling={die.isRolling}
					animate={animate}
				/>
	})
	// Win condition
	useEffect(()=> {
		if (dice.every(die => die.value === dice[0].value && die.isHeld) === true) {
			setWin(true);
		}
	}, [dice, rounds]);

	return (
		<main className='tg-main'>
			{win && <Confetti height='380px' width='360px' />}
			<div className='tg-game-container'>
				<div className='tg-header'>
					<h1 className='tg-title'>{win ? 'WINNER!' : 'Tenzies'}</h1>
				</div>
				<div className='tg-game'>
					
					<p className='tg-rules'>{tutorial()}</p>
					<div className='tg-dice'>
						{dielements}
					</div>
					<button 
						className='tg-button' 
						onClick={rollDice}
						disabled={animate ? true : false}
					>{win ? 'Restart?' : 'Roll'}</button>
				</div>
			</div>
		</main>
	);
}

export default App;

//TODO: Add Timer & Highscore (to localstorage) and add dots to dice instead of numbers