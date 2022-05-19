import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import data from "./data";



let cardData = data.map(item => {
    return  <Card
                img={`./images/${item.coverImg}`}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}
            />
})

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Hero />
                <div className="cards">{cardData}</div>
            </div>
        )
    }
}
