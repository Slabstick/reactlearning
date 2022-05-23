import React from 'react';
import Header from './Header';
import Airbnb from "./Airbnb/App"
import BCard from "./BCard/App"

function Mainapp(props) {
	return (
		<div>
			<Header />
			<BCard />
		</div>
	);
}

export default Mainapp;