import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import zaferes from "./image 12.png"


export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Navbar />
                <Hero />
                <Card 
                    img={zaferes} 
                    rating={5.0} 
                    reviewCount={6} 
                    country="Germany" 
                    title="Life Lessons with Katie Zaferes" 
                    price={136}
                    />
            </div>
        )
    }
}