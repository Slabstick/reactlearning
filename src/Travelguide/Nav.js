import React from "react";
import world from "./world.svg"


export default class Nav extends React.Component {
	render() {
		return (
			<div className="tg-nav">
				<img src={world} alt="" className="tg-world-icon"/>
				<h1 className="tg-title">my travel journal</h1>
			</div>
		)
	}
}