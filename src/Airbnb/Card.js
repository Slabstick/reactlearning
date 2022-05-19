import React from "react";

export default class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
                <div className="card">
                    <img src={this.props.img} alt="" className="card-image" />
                    <div className="rating"><img src="./images/Star 1.png" alt="red star" className="star" /><p className="ratings">{this.props.rating}</p><p className="ratings-count">({this.props.reviewCount}) · </p><p className="ratings-location">{this.props.location}</p></div>
                    <p className="description">{this.props.title}</p>
                    <div className="prices"><p className="price">From ${this.props.price} </p><p className="perwho">/ person</p></div>
                </div>
        )
    }
}