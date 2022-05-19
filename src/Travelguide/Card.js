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
				<div className="card-container">
					<div className="image-wrapper">
						<img src={this.props.imageUrl} alt="" className="card-image" />
					</div>
					<div className="card-text">
						<div className="card-location">
							<img src="./images/pin-icon.png" alt="" className="pin-icon" />
							<span className="location">{this.props.location.toUpperCase()}</span>
							<a href={this.props.googleMapsUrl} className="location-link" >View on Google Maps</a>
						</div>
						<h2 className="card-title">{this.props.title}</h2>
						<h3 className="date">{this.props.startDate} - {this.props.endDate}</h3>
						<p className="description">{this.props.description}</p>

					</div>
					
				</div>
				{line()}
			</div>
			
		)
	}
}
