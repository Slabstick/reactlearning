import React from "react";

export default class Card extends React.Component {

    render() {
        let badgeText
        if (this.props.openSpots === 0) {
            badgeText = "SOLD OUT!"
        } else if (this.props.location === "Online") {
            badgeText = "ONLINE"
        }
        return(
                <div className="card">
                    {badgeText && <div className="card-badge">{badgeText}</div>}
                    <img src={`./images/${this.props.coverImg}`} alt="" className="card-image" />
                    <div className="rating"><img src="./images/Star 1.png" alt="red star" className="star" /><p className="ratings">{this.props.stats.rating}</p><p className="ratings-count">({this.props.stats.reviewCount}) · </p><p className="ratings-location">{this.props.location}</p></div>
                    <p className="description">{this.props.title}</p>
                    <div className="prices"><p className="price">From ${this.props.price} </p><p className="perwho">/ person</p></div>
                </div>
        )
    }
}

// img = {`./images/$.coverImg}`}
// rating = {.stats.rating }
// reviewCount = {.stats.reviewCount }
// location = {.location }
// title = {.title }
// price = {.price }
// openSpots = {.openSpots }