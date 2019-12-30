import React, { Component } from 'react';

class NavBar extends Component {
  state = {  }
  render() { 
    return ( 
      <div className="">
          <ul className="nav justify-content-left ">
            <li className="nav-item">
               <h3>right or wrong</h3>
            </li>
        
          </ul>

          <ul className="nav justify-content-right">
              <li className="nav-item">
              <h3>Top Score: {this.props.topScore}</h3>
              </li>
              <li className="nav-item">
                <h3>Score: {this.props.score} </h3>
              </li>
          </ul>
      
      </div>
     );
  }
}
 
export default NavBar;