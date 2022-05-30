import React from 'react';
import troll from "./Troll Face.svg"

function Header() {


		return (
			<div className='mg-header'>
				<div className='mg-logo-container'>
					<img src={troll}className='mg-logo'alt=''/>
					<h1 className='mg-title'>Meme Generator</h1>
				</div>
				<div className='mg-project'><h2>React Course - Project 3</h2></div>
			</div>
		)
	}

export default Header;