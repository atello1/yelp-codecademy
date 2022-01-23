/*
The purpose of the <Business /> component is to represent how a business (a restaurant) in Ravenous will be formatted and styled.
*/
import React from "react";
import './Business.css'; //  ./ means in this directory



class Business extends React.Component {
//<a className="button" href=""><span>Restaurant</span></a>
  render(){


    return (
      <div className="Business"  >

  <h2>{this.props.negocio.name}</h2>
      <div className="image-container">
      <img src={this.props.negocio.imageSrc} />
      </div>

      <div className="Business-information">
      <div className="Business-address">
      <p>{this.props.negocio.address}</p>
      <p>{this.props.negocio.city}</p>
      <p>{this.props.negocio.state} {this.props.negocio.zipCode}</p>
      </div>
      <div className="Business-reviews">
      <h3>{this.props.negocio.category}</h3>
      <h3 className="rating">{this.props.negocio.rating} stars</h3>
      <p>{this.props.negocio.reviewCount} reviews</p>
      </div>
      </div>
      </div>
    );
  }

}

//This list component will need to be rendered again by another component(business list), so you'll need to export it.
export default Business;
