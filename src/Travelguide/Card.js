import React from "react";




export default class Card extends React.Component {

	render() {
		const line =()=> {
			if (this.props.id < this.props.length) {
				return <hr/>
			}
		}
		return(
			<div>
				<div className="tg-card-container">
					<div className="tg-image-wrapper">
						<img src={this.props.imageUrl} alt="" className="tg-card-image" />
					</div>
					<div className="tg-card-text">
						<div className="tg-card-location">
							<img src="./images/pin-icon.png" alt="" className="tg-pin-icon" />
							<span className="tg-location">{this.props.location.toUpperCase()}</span>
							<a href={this.props.googleMapsUrl} className="tg-location-link" >View on Google Maps</a>
						</div>
						<h2 className="tg-card-title">{this.props.title}</h2>
						<h3 className="tg-date">{this.props.startDate} - {this.props.endDate}</h3>
						<p className="tg-description">{this.props.description}</p>

					</div>
					
				</div>
				{line()}
			</div>
			
		)
	}
}
