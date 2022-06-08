import React from 'react';
import Header from './Header';
import BCard from "./BCard/App"
import Airbnb from "./Airbnb/App"
import Chessboard from "./Chessboard/App"
import JSXIntroduction from "./JSXIntroduction/App"
import MemeGen from "./Meme Generator/App"
import SignUpForm from "./SignUpForm/App"
import TravelGuide from "./Travelguide/App"
import ReactFacts from "./ReactFacts/App"
import Tenzies from "./tenzies/App"
import {BrowserRouter as Router, Route} from 'react-router-dom'

function Mainapp() {
	const [appChoice, setAppChoice] = React.useState(localStorage.getItem('appChoice') || "tenzies")
	
	React.useEffect(() => {
		return localStorage.setItem('appChoice', appChoice)
	}, [appChoice])

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
			case "reactfacts" : return <ReactFacts />
			case "tenzies" : return <Tenzies />
			default: return <BCard />
	}
	}

	return (
		<Router className='mainbody'>
			<Header choice={appChoice} handleChange={handleChange}/>
			<div className='mainapp'>
				{renderApp()}
			</div>
			
		</Router>
	);
}

export default Mainapp;