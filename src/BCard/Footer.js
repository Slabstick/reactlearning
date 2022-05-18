import React from "react";
import twitter from "./twitter.svg"
import github from "./brand-github.svg"
import instagram from "./brand-instagram.svg"
import twitch from "./brand-twitch.svg"

export default class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <a href="https://twitter.com/slabsticker"><img src={twitter} className="footlogo" alt="twitter"></img></a>
                <a href="https://github.com/Slabstick"><img src={github} className="footlogo" alt="github"></img></a>
                <a href="https://www.instagram.com/slabstick/"><img src={instagram} className="footlogo" alt="instagram"></img></a>
                <a href="https://www.twitch.tv/slabstick"><img src={twitch} className="footlogo" alt="twitch"></img></a>
            </div>
        )
    }
}