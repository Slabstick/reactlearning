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
		<div className='mg-meme-container'>
			<div className='mg-form'>
					<input type={'text'} id={'textup'} name={'textup'} placeholder={'Top text'} className='mg-text'></input>
					<input type={'text'} id={'textdown'} name={'textdown'} placeholder={'Bottom text'} className='mg-text'></input>
				<input 
				type={'submit'} 
				value={'Get a new meme image 🖼'} 
				className='mg-button'
				onClick={getMemeImage}
				>
				</input>
			</div>
			<img src={meme.randomImage} alt="" className='mg-meme-image'/>
		</div>
	)
}


export default Meme;