import React from "react";
import logo from '../logo.svg';


export default class Navbar extends React.Component {
    render() {
        return (
            
				<nav className="rf-navbar">
					<img src={logo} alt="react logo" className="rf-logo"/>
                    <h1 className="rf-title">ReactFacts</h1>
                </nav>
            
        )
    }
}