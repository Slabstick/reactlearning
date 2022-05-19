import React from "react"
import phone from "./images/phone.svg"
import mail from "./images/mail.svg"



export default class Contact extends React.Component {
    render() {
        return(
            <div className="contact">
                <div className="contact-card">
                    <img src={this.props.img} alt=""/>
                    <h3>{this.props.name}</h3>
                    <div className="info-group">
                        <img src={phone} alt="" />
                        <p>{this.props.phone}</p>
                    </div>
                    <div className="info-group">
                        <img src={mail} alt="" />
                        <p>{this.props.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}
