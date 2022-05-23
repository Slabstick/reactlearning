import React from 'react';
import Header from './Header';
import BCard from "./BCard/App"
import Airbnb from "./Airbnb/App"
import Chessboard from "./Chessboard/App"
import JSXIntroduction from "./JSXIntroduction/App"
import MemeGen from "./Meme Generator/App"
import SignUpForm from "./SignUpForm/App"
import TravelGuide from "./Travelguide/App"


function Mainapp() {
	const [appChoice, setAppChoice] = React.useState("bCard")

	function handleChange(event) {
		setAppChoice(event.target.value)
	}
	function renderApp(){
		switch (appChoice) {
			case "bCard" : return <BCard />
			case "airbnb" : return <Airbnb />
			case "chessboard" : return <Chessboard />
			case "jsxIntroduction" : return <JSXIntroduction />
			case "meme-Generator" : return <MemeGen />
			case "signUpForm" : return <SignUpForm />
			case "travelguide" : return <TravelGuide />
	}
	}
	
	


	return (
		<div>
			<Header choice={appChoice} handleChange={handleChange}/>
			{renderApp()}
		</div>
	);
}

export default Mainapp;