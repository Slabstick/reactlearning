import React from "react";
import star from "./Star 1.png"

export default class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="cards">
                <div className="card">
                    <img src={this.props.img} alt="swimmer zaferes" className="card-image" />
                    <div className="rating"><img src={star} alt="red star" className="star" /><p className="ratings">{this.props.rating}</p><p className="ratings-count">({this.props.reviewCount}) · </p><p className="ratings-location">{this.props.country}</p></div>
                    <p className="description">{this.props.title}</p>
                    <div className="prices"><p className="price">From ${this.props.price} </p><p className="perwho">/ person</p></div>
                </div>
            </div>
            
        )
    }
}