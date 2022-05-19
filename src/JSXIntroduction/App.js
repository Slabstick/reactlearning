import React from "react";
import Contact from "./Contact"
import "./App.css"
import mrWhiskers from "./images/mr-whiskerson.jpg"
import fluffykins from "./images/fluffykins.jpg"
import felix from "./images/felix.jpg"
import pumpkin from "./images/pumpkin.jpg"


export default class App extends React.Component {
    render () {
        return(
            <div className="contacts">
                <Contact
                    img={mrWhiskers}
                    name="Mr. Whiskerson"
                    phone="(212) 555-1234"
                    email="mr.whiskaz@catnap.meow"
                />
                <Contact
                    img={fluffykins}
                    name="Fluffykins"
                    phone="(212) 555-2345"
                    email="fluff@me.com"
                />
                <Contact
                    img={felix}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Contact
                    img={pumpkin}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
            </div>
        )
    }
}