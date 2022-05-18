import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Hero />
                <Card />
            </div>
        )
    }
}