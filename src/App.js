import React, { Component } from 'react';
import Login from './Components/Login';

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
          <Login/>
        </div>
      );
    }
    
  }
}

export default App;
