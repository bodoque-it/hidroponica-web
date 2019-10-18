import React, { Component } from 'react';
import Page from './page';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: "",
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        if(this.state.username==="Admin" && this.state.password==="Admin"){
        	this.props.history.push("/dashboard");
        }
    }

    handleChange = input => e => {
        this.setState ({[input]: e.target.value})
    }

    handleSubmit = event=> {
        event.preventDefault();     
    }

    render(){
        const { username } = this.state;
        const { password } = this.state;
        return(
            <Page
                username={username}
                password={password}
                validateForm={this.validateForm}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default Login;
