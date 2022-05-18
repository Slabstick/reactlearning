import React from "react"
import airbnb from "./airbnblogo.svg"


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <img src={airbnb} className="logo" alt="airbnb logo"/>
            </div>
        )
    }
    
}