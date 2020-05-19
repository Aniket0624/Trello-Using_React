import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderComponent extends Component {
    state = {  }
    render() { 
        return ( 
             <header style= {{display: 'flex'}}>
        <div class="primary">
          <div class="home-direction">
          <Link to = "/">
            <i href="/" class="fa fa-home fa-5x" style= {{color: "white"}} aria-hidden="true"></i>
            </Link>
          </div>
          <img src="./Images/header-logo-2x.01ef898811a879595cea.png" alt="Trello" style= {{float: "center"}} />
          <button class="user-logo">AD</button>
        </div>
      </header>
       );
    }
}
 
export default HeaderComponent;