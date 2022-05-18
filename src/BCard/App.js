import React from "react";
import "./App.css"
import Picture from "./Picture";
import Main from "./Main";
import Footer from "./Footer";

export default class App extends React.Component {
    render() {
        return(
            <div className="container">
                <div className="card">
                    <Picture />
                    <Main />
                    <Footer />
                </div>
                
            </div>
        )
    }
}