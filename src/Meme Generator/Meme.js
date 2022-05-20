import React, { Component } from 'react';
import memesData from './memesData';




function Meme() {

	function handleClick() {
	const rand = Math.floor(Math.random() * memesData.data.memes.length)
	console.log(memesData.data.memes[rand].url);
	}
		return (
			<div className='meme-container'>
				<div className='form'>

						<input type={'text'} id={'textup'} name={'textup'} placeholder={'Top text'} className='text'></input>
						<input type={'text'} id={'textdown'} name={'textdown'} placeholder={'Bottom text'} className='text'></input>

					<input 
					type={'submit'} 
					value={'Get a new meme image 🖼'} 
					className='button'>
					onClick={handleClick}
					</input>
				</div>
			</div>
		)
	}


export default Meme;