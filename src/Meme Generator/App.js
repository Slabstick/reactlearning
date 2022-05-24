import React, { Component } from 'react';
import "./App.css"
import Header from './Header';
import Meme from './Meme';

function App() {
	const [textData, setTextData] = React.useState({
		topText: "",
		bottomText: ""
	})
		return (
			<div className='mg-container'>
				<Header 
					
				/>
				<Meme />
			</div>
		)
	}


export default App;