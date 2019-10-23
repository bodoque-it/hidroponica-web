import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './Components/Login';
import Plantilla from './Components/Plantilla';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
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
                    <Route path="/dashboard" render={() => (<Plantilla title="Dashboard" />) } />
                    <Route path="/microclimes" render={() => (<Plantilla title="Microclimas" />) } />
                    <Route path="/cycles" render={() => (<Plantilla title="Ciclos" />) } />
                    <Route path="/rails" render={() => (<Plantilla title="Rieles" />) } />
                    <Route path="/containers" render={() => (<Plantilla title="Contenedores" />) } />
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


