import React from "react";
import Main from "./Main";
import Navbar from "./Navbar";
import './App.css'

export default class App extends React.Component {
    render() {
        return(
            <div className="rf-container">
                <Navbar />
                <div className="rf-main">
                    <Main />
                </div>
                
            </div>
        )
    }
}