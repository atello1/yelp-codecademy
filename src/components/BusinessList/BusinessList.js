/*
The purpose of the <negocioList /> component is to is to simulate what a returned list of negocios would look like in Ravenous (after querying the Yelp API, for example).
*/
import React from "react";
import './BusinessList.css'
import Business from '../Business/Business';//Import the <Business /> Component
//Recall that .. indicates a parent directory.
class BusinessList extends React.Component {
  render() {

    return (
      <div className="BusinessList">
      {   this.props.negocios && this.props.negocios.map(negocio=>{
        return (
          <Business negocio={negocio} key={negocio.id} />
        )
      }) }

      </div>
    );
  }
}
//This list component will need to be rendered again by another component, so you'll need to export it.
export default BusinessList;
