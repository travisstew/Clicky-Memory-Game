import React, { Component } from 'react';

class Cards extends Component {
  
  render() { 
    return (
      
       <div onClick={()=> this.props.cardSelectHandle(this.props.cards)} className="card" style={{width: 18+"rem", background:this.props.image}}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
  
    </div>
      );
  }
}
 
export default Cards;
