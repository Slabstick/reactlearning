import React, { Component } from 'react';
import "./App.css"
import Header from './Header';
import Meme from './Meme';

function App() {
		return (
			<div className='container'>
				<Header />
				<Meme />
			</div>
		)
	}


export default App;