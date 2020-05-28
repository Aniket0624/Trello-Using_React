import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from "@chakra-ui/core";

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
          <Avatar size="lg" style = {{marginTop : "0.25em"}} name="Aniket Das" src="src/images/Aniket Das Passport.jpg" />
        </div>
      </header>
       );
    }
}
 
export default HeaderComponent;