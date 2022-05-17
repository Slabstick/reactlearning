import React from "react";
import logo from '../logo.svg';


export default class Navbar extends React.Component {
    render() {
        return (
            <div className="navbar">
                <nav className="logo">
                    <img src={logo} alt="react logo" />
                    <h1 className="title">ReactFacts</h1>
                </nav>
                <h2 className="extra-title">React Course - Project 1</h2>
            </div>
        )
    }
}