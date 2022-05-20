import React, { Component } from 'react';

function Header() {

		return (
			<div className='header'>
				<div className='logo-container'>
					<img src='./images/Troll Face.svg'className='logo'alt=''/>
					<h1 className='title'>Meme Generator</h1>
				</div>
				<div className='project'><h2>React Course - Project 3</h2></div>
			</div>
		)
	}

export default Header;