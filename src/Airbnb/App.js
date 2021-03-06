import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";

let cardData = data.map(item => {
    return  <Card
                key={item.id}
                {...item}
            />
})

export default class App extends React.Component {
    render() {
        return (
            <div className="abnb-container">
                <Navbar />
                <Hero />
                <div className="abnb-cards">{cardData}</div>
            </div>
        )
    }
}
