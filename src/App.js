import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './Components/Login';
import Microclime from './Components/Microclime';
import Dashboard from './Components/Dashboard';
import Cycle from './Components/Cycle';
import Rails from './Components/Rails';
import Container from './Components/Container';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componenDidMount() {
    fetch('https://localhost:8080/users/')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded:true,
          items: json,
        })
      });
  }

  render() {
    
    var {isLoaded, items } = this.state;
    
    if(isLoaded){
      return <div>...</div>
    }
    else {
      return (
        <div className="App">
          <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/microclime" component={Microclime} />
                    <Route path="/cycle" component={Cycle} />
                    <Route path="/rails" component={Rails} />
                    <Route path="/container" component={Container} />
                    <Redirect from="/" to="/login" />
                </Switch>
            </BrowserRouter>
          </Provider>
        </div>
      );
    }
  }
  
};

export default App;


