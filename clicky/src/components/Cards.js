import React, { Component } from 'react';
import '../App.css'
class Cards extends Component {
  
  render() { 
    return (
      // backgroundImage:`url(${this.props.image})`    width: 3+"rem",
       <div onClick={()=> this.props.cardSelectHandle(this.props.cards)} className="col" style={{ backgroundImage:`url(${this.props.image})` }}>
        {/* <div className="card-body cardImage">
          
          <img   src={this.props.image } alt="characters"></img>
          
        </div> */}
  
    </div>
      );
  }
}
 
export default Cards;
