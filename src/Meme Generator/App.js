import React from 'react';
import "./App.css"
import Header from './Header';
import Meme from './Meme';


function App() {
	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	
	const [allMemes, setAllMemes] = React.useState([]);

	React.useEffect(()=> {
		async function getMemes() {
			const res = await fetch("https://api.imgflip.com/get_memes")
			const data = await res.json()
			setAllMemes(data)
		}
		// Alternatively without the extra function getMemes()
		// async await needs to be in a nested func because useEffect can be called with a return value of a clean up function
		// like "removeEventListener("resize")"
		// fetch("https://api.imgflip.com/get_memes")
		// .then(res => res.json())
		// .then(data => setAllMemes(data))
		getMemes()
	}, [])
	
	function handleMemeChange() {
		const rand = Math.floor(Math.random() * allMemes.data.memes.length);
		setMeme(prevImage => ({
			...prevImage,
			randomImage: allMemes.data.memes[rand].url
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