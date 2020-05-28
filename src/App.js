import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BoardComponent from './components/board-component';
import ListComponent from './components/list-component';
import HeaderComponent from './components/header-component';
import { Provider } from "react-redux";
import thunkMiddleware from 'redux-thunk'
import {fetchAllBoards} from "./actions/index"
import { createStore, applyMiddleware  } from 'redux';
import reducer from "./reducers/index"
import { ThemeProvider, CSSReset } from '@chakra-ui/core'


const store = createStore(
  reducer,
  applyMiddleware(
    thunkMiddleware,
  )
  )

store.dispatch(fetchAllBoards());

class App extends Component {
  state = {};
  render() {
    // console.log("object");
    return (
      <ThemeProvider >
      <CSSReset />
      <Provider store={store}>
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
      </Provider>
      </ThemeProvider>
    );
  }
}

export default App;
