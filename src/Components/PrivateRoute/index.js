import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component,logged,titulo, ...rest }) => {
    let ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token")
          ? console.log("Trying to render component") || (
              <ComponentToRender title={titulo} />
            )
          : console.log("Redirected") || (
              <Redirect
                to={{ pathname: "/login", state: { from: props.location } }}
              />
            )
      }
    />
  );
};

const mapStateToProps = (state) => ({ logged: state.logged });
export default withRouter(connect(mapStateToProps)(PrivateRoute));

    
        // <Route {...rest} render={props =>
        //     !this.props.logged ? <Redirect to='/' /> : <Component {...props} />
        //   }
        // />


