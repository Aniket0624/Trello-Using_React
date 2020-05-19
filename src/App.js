import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardComponent from './components/board-component';
import ListComponent from './components/list-component';
import HeaderComponent from './components/header-component';

class App extends Component {
  state = {};
  render() {
    // console.log("object");
    return (
      <Router>
      <React.Fragment>
      <div>
        <HeaderComponent/>
      </div>
        <div className="App">
          <Switch>
            <Route path="/" exact component={BoardComponent} />
            <Route path="/board/:id" component={ListComponent} />
          </Switch>
        </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
