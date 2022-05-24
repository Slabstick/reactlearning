import React, { Component } from 'react';
import "./App.css"
import Header from './Header';
import Meme from './Meme';
import memesData from './memesData';

function App() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});

	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function handleMemeChange() {
		const rand = Math.floor(Math.random() * allMemeImages.data.memes.length);
		setMeme(prevImage => ({
			...prevImage,
			randomImage: allMemeImages.data.memes[rand].url
		}));
	}

	function handleTextChange(event) {
		const {name, value} = event.target
		setMeme(prevMeme => ({
			...prevMeme,
			[name]: value
		}))
	}
		return (
			<div className='mg-container'>
				<Header />
				<Meme 
					meme = {meme}
					setMeme = {handleMemeChange}
					setText = {handleTextChange}
				/>
			</div>
		)
	}


export default App;