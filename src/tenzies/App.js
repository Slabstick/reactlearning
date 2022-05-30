import React, { useState, useEffect, useMemo } from 'react';
import "./App.css"
import Die from './Die';
import Confetti from 'react-confetti'

function App() {

	const [dice, setDice] = useState(JSON.parse(localStorage.getItem('dice')) || allNewDice());
	const [win, setWin] = useState(JSON.parse(localStorage.getItem('win')) || false);
	const [rounds, setRounds] = useState(Number(localStorage.getItem('rounds')) || 0);
	const [animate, setAnimate] = useState(false);
	const [timeStart, setTimeStart] = useState(Date.parse(localStorage.getItem('timeStart')) || new Date());
	const [timeWon, setTimeWon] = useState(Number(localStorage.getItem('timeWon')) || 1000);


	// console.log(timePlayed)

	React.useEffect(()=> {
		localStorage.setItem('dice', JSON.stringify(dice));
		localStorage.setItem('win', win);
		localStorage.setItem('rounds', rounds);
		localStorage.setItem('timeWon', timeWon);
		localStorage.setItem('timeStart', timeStart);
	},[dice, win, rounds, timeWon, timeStart]);

	// console.log(localStorage.getItem('timeStart'))

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
			return `YOU WON AFTER ${rounds} ROUNDS WITH ${timeWon} SECONDS!`;
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
	// console.log(timeStart)
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
	let timeNow = new Date();
	function rollDice() {
		if (!win) {
			if (rounds === 0) {
				setTimeStart(timeNow);
			}
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
					rounds={rounds}
				/>
	})
	// Win condition
	useMemo(()=> {
		if (dice.every(die => die.value === dice[0].value && die.isHeld) === true && !win) {
			setWin(true);
			let timeNow = new Date();
			setTimeWon(parseInt((timeNow - timeStart) / 1000));
		}
	}, [dice, timeStart, win]);

	function reset() {
		setDice(allNewDice());
		setRounds(0);
		setWin(false);
	}

	let button = () => {
		if (win) {
			return 'Restart?';
		} else if (rounds === 0) {
			return 'Start!';
		} else {
			return 'Roll!';
		}
	}
	return (
		<main className='tg-main'>
			<span className='tg-confetti'>{win && <Confetti />}</span>
			<div className='tg-game-container'>
				<div className='tg-header'>
					<h1 className='tg-title'>{win ? 'WINNER!' : 'Tenzies'}</h1>
				</div>
				<div className='tg-game'>
					
					<p className='tg-rules'>{tutorial()}</p>
					<div className='tg-dice'>
						{dielements}
					</div>
						<div className='buttons'>
						<button
							className='tg-button'
							onClick={rollDice}
							disabled={animate ? true : false}
						>{button()}</button>
						<button
							className='tg-reset'
							onClick={reset}
						>Reset</button>
						</div>
					
				</div>
			</div>
		</main>
	);
}

export default App;

//TODO: Add Timer & Highscore (to localstorage) and add dots to dice instead of numbers