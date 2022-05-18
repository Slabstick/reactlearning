import React from "react";
import zaferes from "./image 12.png"
import star from "./Star 1.png"

export default class Card extends React.Component {
    render() {
        return(
            <div className="cards">
                <div className="card">
                    <img src={zaferes} alt="swimmer zaferes" className="card-image" />
                    <div className="rating"><img src={star} alt="red star" className="star" /><p className="ratings">5.0</p><p className="ratings-count">(6) · </p><p className="ratings-location">USA</p></div>
                    <p className="description">Life lessons with Katie Zaferes</p>
                    <div className="prices"><p className="price">From $136 </p><p className="perwho">/ person</p></div>
                </div>
            </div>
            
        )
    }
}