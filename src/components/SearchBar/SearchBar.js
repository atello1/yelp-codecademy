/*NADA EN ETAPA 1*/
import React from "react";
import "./SearchBar.css";
import explanation from "./explanation.PNG";
class SearchBar extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      term:"",
      location:""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleTerm = this.handleTerm.bind(this);
    this.handleLocation = this.handleLocation.bind(this);
  }

  handleSearch(){
if(this.state.term!==""&&this.state.location!==""){
 this.props.searchYelp(this.state.term, this.state.location, "best_match");
}


  }

  handleLocation(event){
    const newLocation= event.target.value;
    this.setState({location:newLocation});
  }

  handleTerm(event){
    const newTerm= event.target.value;
    this.setState({term:newTerm});
  }

  render(){

    return (
      <div className="SearchBar">
      <div className="header-title">
      <h1>ReactJS Student Exercice</h1>
      <p className="intro">Yelp's API Requests</p>
      <p className="intro2">Components, state, props and event handlers</p>
      <p className="intro3">By Ana Tello</p>
      </div>
        <div className="SearchBar-fields">
          <input onChange={this.handleTerm} placeholder="Search Businesses" />
          <input onChange={this.handleLocation} placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <a onClick={this.handleSearch}>Search</a>
        </div>
      </div>
    )
  }
}
export default SearchBar;
