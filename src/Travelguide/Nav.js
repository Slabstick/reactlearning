import React from "react";


export default class Nav extends React.Component {
	render() {
		return (
			<div className="tg-nav">
				<img src="./images/world.svg" alt="" className="tg-world-icon"/>
				<h1 className="tg-title">my travel journal</h1>
			</div>
		)
	}
}