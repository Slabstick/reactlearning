import React from "react";

export default class Main extends React.Component {
    render() {
        return(
            <div>
                <h1 className="main-title">Fun facts about React</h1>
                <ul className="list">
                    <li>Was released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 100K stars on GitHub</li>
                    <li>Is maintained by Facebook</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
        )
    }
}