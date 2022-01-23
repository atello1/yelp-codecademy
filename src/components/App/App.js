/*
The purpose of the <negocio /> component is to represent how a negocio (a restaurant) in Ravenous will be formatted and styled.
*/
import React from "react";
import './App.css'; //  ./ means in this directory
import BusinessList from '../BusinessList/BusinessList';//Import the <Business /> Component
import SearchBar from '../SearchBar/SearchBar';
import Yelp from '../../util/Yelp';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      negocios: [],
      lastSearchEmpty : false,
    };
    /*etapa 2*/
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term,location){
    Yelp.search(term, location, "best_match").then( negocios => {
    !negocios ||  negocios.length == 0 ? this.setState({lastSearchEmpty: true}) : this.setState({lastSearchEmpty: false});
      this.setState({negocios: negocios});
    });
  }

  render() {
    //console.log(this.state.negocios);//console.log dentro de render
    //menu here if i want
    return (
      <div className="App">
      <div className="header-top">
      </div>

      <SearchBar searchYelp={this.searchYelp} />
      { this.state.lastSearchEmpty ? <div className="noresults">Sorry, not results were fond</div> : <BusinessList negocios={this.state.negocios}/> }

      <a href="#" id="ui-to-top" className="ui-to-top active"></a>
      </div>
    );
  }
}

//////////////////////////////////////
/*En businessList.js*********************************************/

/*ETAPA 4 :*/
/*
ETAPA 4- hacer de negocio un componente independiente
Ahora esta en businesList.js

businesList.js
busines.js

pasar la info de cada negocio como una props
y recogerla en busines.js
En BusinessList.js
return (
<Business negocio={negocio} key={negocio.id} />
)
En Business.js
<div className="Business"  >
<div className="image-container">
<img src={this.props.negocio.imageSrc} />
</div>
<h2>{this.props.negocio.name}</h2>
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
*/
export default App;
//Ana@Dell MINGW64 /f/projects
