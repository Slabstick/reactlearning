import React from "react";


export default class Nav extends React.Component {
	render() {
		return (
			<div className="nav">
				<img src="./images/world.svg" alt="" className="world-icon"/>
				<h1 className="title">my travel journal</h1>
			</div>
		)
	}
}