import React from "react";
import Group77 from "./Group 77.png";

export default class Hero extends React.Component {
    render() {
        return(
            <div className="hero">
                <img src={Group77} alt="collage of happy marketing people" className="group77"/>
                <h1>Online Experiences</h1>
                <p className="introduction">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        )
    }
}