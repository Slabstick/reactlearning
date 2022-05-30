import React from "react";
import group77 from "./images/Group 77.png"

export default class Hero extends React.Component {
    render() {
        return(
            <div className="abnb-hero">
				<img src={group77} alt="collage of happy marketing people" className="abnb-group77"/>
                <h1>Online Experiences</h1>
                <p className="abnb-introduction">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        )
    }
}