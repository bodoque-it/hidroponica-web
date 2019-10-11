import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './Components/Login';
import Microclime from './Components/Microclime';
import Dashboard from './Components/Dashboard';
import Cycle from './Components/Cycle';
import Rails from './Components/Rails';
import Plantilla from './Components/Plantilla';
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
                    <Route path="/dashboard" component={Plantilla} />
                    <Route path="/microclimes" component={Plantilla} />
                    <Route path="/cycles" component={Plantilla} />
                    <Route path="/rails" component={Plantilla} />
                    <Route path="/containers" component={Plantilla} />
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


