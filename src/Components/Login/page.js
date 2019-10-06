import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from '@material-ui/core/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import GridList from 'material-ui/GridList';
import Container from '@material-ui/core/Container';
import { palette } from '@material-ui/system';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import './styles.css';

function Page(props) {
    const {
        username,
        password,
        validateForm,
        handleChange,
        handleSubmit,
    } = props;
    
    return(
        <MuiThemeProvider>
            <React.Fragment>
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
                    >
                        <br/>
                        <Avatar>A</Avatar>
                        <br/>
                        <Box 
                            bgcolor="white"
                            width={280}
                        >
                        <TextField 
                        hintText="Username"
                        onChange={handleChange('username')}
                        />
                        </Box>
                        <br/>
                        <Box 
                            bgcolor="white"
                            width={280}
                        >
                        <TextField 
                            hintText="Password"
                            value={password}
                            onChange={handleChange('password')}
                            
                        />
                        </Box>
                        <br/>
                        <RaisedButton
                        onClick=""
                            primary={true}
                            label="Adelante"
                            disabled={!validateForm()}
                        />
                        <br/>
                    </Box>
                </center>
            </React.Fragment>
        </MuiThemeProvider>
    );
}

export default Page;
