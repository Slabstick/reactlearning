import React from 'react';
import Box from './Box';
import "./App.css"
import chessboard from './chessboard';

export default function App() {	
	//										chessboard	 square		 .id,.black
	// prevSquare = squares = chessboard = 1 array aus 8 objekten aus 2 werten / [{a:v}{a:v}{a:v}{a:v}{a:v}{a:v}{a:v}{a:v}]
	function changeColor(id) {
		setSquares(prevSquares => prevSquares.map(square => {
			return square.id === id ? {...square, black: !square.black} : square;
		}))
	}
	// console.log(chessboard);
	const [squares, setSquares] = React.useState(chessboard);
	const cbElements = squares.map(square => {
		return (<Box
				lineid={square.lineId}
				id={square.id}
				key={square.id}
				black={square.black}
				changeColor={() => changeColor(square.id)} />
		)
	})
	return (
		<div className='cb-box-container'>
			{cbElements}
		</div>
	)
}