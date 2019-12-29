import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <div>
          <ul class="nav justify-content-left">
            <li class="nav-item">
               <h3>right or wrong</h3>
            </li>
        
          </ul>


          <ul class="nav justify-content-right">
              <li class="nav-item">
              <h3>Top Score: {this.props.topScore}</h3>
              </li>
              <li class="nav-item">
                <h3>Score: {this.props.score} </h3>
              </li>
          </ul>
      
      </div>
     );
  }
}
 
export default NavBar;