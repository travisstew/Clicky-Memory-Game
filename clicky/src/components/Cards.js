import React, { Component } from 'react';
import '../App.css'
class Cards extends Component {
    
  MouseEnter = (e)=>{
     e.target.style.transform = `scale(${1.2})`;
  }
  MouseLeave = (e)=>{
    e.target.style.transform = `scale(${1})`;
  }

  render() { 
         
    return (
      // backgroundImage:`url(${this.props.image})`    width: 3+"rem",
       <div onClick={()=> this.props.cardSelectHandle(this.props.cards)} onMouseEnter={this.MouseEnter} onMouseLeave={this.MouseLeave}  className="card-item" style={{ backgroundImage:`url(${this.props.image})`} } >
      
      </div>
      );
  }
}
 
export default Cards;
