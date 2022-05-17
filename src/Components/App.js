import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import './App.css'

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <Navbar />
                <div className="main">
                    <Main />
                </div>
                
            </div>
        )
    }
}