import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import signIn  from '../../redux/rootReducer/signIn'
import setAuthToken from '../../redux/rootReducer/authentication'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
        };

        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    validateForm() {
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn( this.state.username, this.state.password )
        console.log(localStorage.getItem("token"))
        this.props.history.push("/dashboard");
    }

    render(){
        return(
            <Page
                authError={this.props.authError}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.authError
    };
};

const mapDispatchToProps = {
    signIn,
    setAuthToken
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Login));
