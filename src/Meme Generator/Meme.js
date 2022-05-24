import React from 'react';
import memesData from './memesData';




function Meme(props) {

	return (
		<div className='mg-meme-container'>
			<div className='mg-form'>
				<input 
					type={'text'} 
					id={'topText'} 
					name={'topText'} 
					placeholder={'Top text'} 
					className='mg-text'
					value={props.meme.topText}
					onChange={props.setText}
				>
				</input>
				<input 
					type={'text'} 
					id={'bottomText'} 
					name={'bottomText'} 
					placeholder={'Bottom text'} 
					className='mg-text'
					value={props.meme.bottomText}
					onChange={props.setText}
				>
				</input>
				<input 
					type={'submit'} 
					value={'Get a new meme image 🖼'} 
					className='mg-button'
					onClick={props.setMeme}
				>
				</input>
			</div>
			<div className='mg-meme'>
				<img src={props.meme.randomImage} alt="randomly generated meme image" className='mg-meme-image' />
				<h2 className='mg-meme-text top'>{props.meme.topText}</h2>
				<h2 className='mg-meme-text bottom'>{props.meme.bottomText}</h2>
			</div>
			
		</div>
	)
}


export default Meme;