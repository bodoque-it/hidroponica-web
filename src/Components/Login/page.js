import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/RaisedButton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import './styles.css';

function Page(props) {
    const {
        authError,
        handleChange,
        handleSubmit,
    } = props;
    
    return(
       
                <center>
                    <AppBar style={{background: '#43a047'}}>
                        <Toolbar>
                            <Typography variant="h3">Hidropónica</Typography>
                            <Typography variant="h8" align="justify">By Gaia Software</Typography>
                        </Toolbar>
                    </AppBar>
                    <br/>
                    <Box
                        bgcolor="#8bc34a"
                        marginTop={20}
                        marginLeft={0}
                        height={300}
                        width={300}
                        style={{borderRadius:'5%'}}
                    >
                        <div className="container">
                            <form onSubmit={handleSubmit} className="white" >
                                <br/> <Avatar style={{backgroundColor:"#007bff"}}></Avatar> <br/>
                                <div className="input-field" >
                                    <label htmlFor="username" > Nombre de Usuario </label>
                                    <input type="username" id="username" onChange={handleChange} />
                                </div>
                                <div className="input-field" >
                                    <label htmlFor="password" > Contraseña </label>
                                    <input type="password" id="password" onChange={handleChange} />
                                </div>
                                <div className="input-field" >
                                    <br/> <button className="btn btn-outline-primary" > Iniciar sesión </button>
                                    <div className="red-text center"  >
                                        { authError ? <p> {authError} </p> : null }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </Box>
                </center>
           
    );
}

export default Page;
