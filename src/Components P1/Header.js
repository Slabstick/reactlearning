import React from "react";
import logo from '../logo.svg';

export class Header extends React.Component {
    render() {
        return (
            <header className="App-header">
                <nav className="navbar">
                    <img src={logo} className="App-logo" alt="logo" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </header>
        )
    }
}