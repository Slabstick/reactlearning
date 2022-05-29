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
                <div className="abnb-card">
                    {badgeText && <div className="abnb-card-badge">{badgeText}</div>}
                    <img src={`./reactlearning/images/${this.props.coverImg}`} alt="" className="abnb-card-image" />
                    <div className="abnb-rating"><img src="./reactlearning/images/Star 1.png" alt="red star" className="abnb-star" /><p className="abnb-ratings">{this.props.stats.rating}</p><p className="abnb-ratings-count">({this.props.stats.reviewCount}) · </p><p className="abnb-ratings-location">{this.props.location}</p></div>
                    <p className="abnb-description">{this.props.title}</p>
                    <div className="abnb-prices"><p className="abnb-price">From ${this.props.price} </p><p className="abnb-perwho">/ person</p></div>
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