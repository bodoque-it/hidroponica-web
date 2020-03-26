import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import signIn  from '../../redux/rootReducer/signIn'
import setAuthToken from '../../redux/rootReducer/authentication'
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username: '',
            password: '',
        };

        this.validateForm = this.validateForm.bind(this);
        this.iniciaSesion = this.iniciaSesion.bind(this);
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

    iniciaSesion(){
        
        this.props.history.push("/dashboard");
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.signIn( this.state.username, this.state.password )
        setTimeout(function() { 
            console.log("token:" + localStorage.getItem("token"))
            if ( localStorage.getItem('token') && localStorage.getItem('token') != 'null' && localStorage.getItem('token') != 'undefined' ){
                    this.props.history.push("/dashboard");
            } 
        }.bind(this), 100)
        
    }

    render(){
        return(
            <div>
              <Page
                    authError={this.props.authError}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    iniciaSesion={this.iniciaSesion}
                />
            
            </div>
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
