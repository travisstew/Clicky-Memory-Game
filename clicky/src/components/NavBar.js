import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <nav id="navbar" class="navbar navbar-light sticky-top ">
           <h4>Clicky </h4> <h4>Click an image to begin!</h4>  <h4>Top Score: {this.props.topScore} | Score: {this.props.score} </h4>
      </nav>
  
        
     
          
    



   
     );
  }
}
 
export default NavBar;