import React from "react";
import Nav from "./Nav";
import Card from "./Card";
import "./App.css"
import data from "./data"

let cardData = data.map(item => {
	return <Card
		key={item.id}
		{...item}
		length={data.length}
	/>
})

export default class App extends React.Component {
	render() {
		return(
			<div className="tg-container">
				<Nav />
				{cardData}
			</div>
		)
	}
}