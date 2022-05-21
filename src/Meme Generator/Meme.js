import React from 'react';
import memesData from './memesData';




function Meme() {

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	const [allMemeImages, setAllMemeImages] = React.useState(memesData);

	function getMemeImage() {
	const rand = Math.floor(Math.random() * allMemeImages.data.memes.length);
	setMeme(prevImage => ({
		...prevImage,
		randomImage: allMemeImages.data.memes[rand].url
	}));
	}

	return (
		<div className='meme-container'>
			<div className='form'>
					<input type={'text'} id={'textup'} name={'textup'} placeholder={'Top text'} className='text'></input>
					<input type={'text'} id={'textdown'} name={'textdown'} placeholder={'Bottom text'} className='text'></input>
				<input 
				type={'submit'} 
				value={'Get a new meme image 🖼'} 
				className='button'
				onClick={getMemeImage}
				>
				</input>
			</div>
			<img src={meme.randomImage} alt="" className='meme-image'/>
		</div>
	)
}


export default Meme;