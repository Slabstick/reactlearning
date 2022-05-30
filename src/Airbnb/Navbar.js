import React from "react"
import logo from "./images/airbnblogo.svg"

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="abnb-navbar">
				<img src={logo} className="abnb-logo" alt="airbnb logo"/>
            </div>
        )
    }
    
}