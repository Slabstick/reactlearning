import React from "react"



export default class Contacts extends React.Component {
    render() {
        return(
            <div className="contacts">
                <div className="contact-card">
                    <img src="reactlearning/src/JSXIntroduction/images/mr-whiskerson.jpg" />
                    <h3>Mr. Whiskerson</h3>
                    <div className="info-group">
                        <img src="./images/phone.svg" />
                        <p>(212) 555-1234</p>
                    </div>
                    <div className="info-group">
                        <img src="" />
                        <p>mr.whiskaz@catnap.meow</p>
                    </div>
                </div>
            </div>
        )
    }
}
