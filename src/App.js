import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import store from './redux/store';
import Login from './Components/Login';
import PrivateRoute  from './Components/PrivateRoute';
import Plantilla from './Components/Plantilla';
import authentication from './redux/rootReducer/authentication'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class App extends Component {
  constructor(props){
    if (localStorage.token) {
      authentication(localStorage.getItem("token"));
    }
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
                    <Route path='/login' component={  Login} /> 
                    <PrivateRoute exact path='/dashboard' component={Plantilla} titulo="dashboard" />
                    <PrivateRoute exact path='/microclimes' component={Plantilla} titulo="Microclimas" />
                    <PrivateRoute exact path='/cycles' component={Plantilla} titulo="Ciclos" />
                    <PrivateRoute exact path='/rails' component={Plantilla} titulo="Rieles" />
                    <PrivateRoute exact path='/containers' component={Plantilla} titulo="Contenedores" />
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




