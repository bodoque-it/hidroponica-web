import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component,titulo, ...rest }) => {
    let ComponentToRender = component;

  return (
    <Route
      {...rest}
      render={props =>
        localStorage.getItem("token") != 'null' && localStorage.getItem("token")
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

const mapStateToProps = (state) => ({
  
});
export default withRouter(connect(mapStateToProps)(PrivateRoute));


