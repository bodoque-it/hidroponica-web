import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import GridList from 'material-ui/GridList';
import Container from '@material-ui/core/Container';
import { palette } from '@material-ui/system';
import { Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    avatar: {
        margin: 10,
        width: 600,
        height: 600,
    },
});



class Login extends Component {

    constructor(props) {
        super(props);
        this.state={
            username: "",
            password: "",
        };
    }
    
    validateForm() {
        return this.state.username==="Admin" && this.state.password==="Admin";
    }

    handleChange = input => e => {
        this.setState ({[input]: e.target.value})
    }

    handleSubmit = event=> {
        event.preventDefault();     
    }

    render () {

        const { values, handleChange } = this.props;
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <center>
                        <AppBar title="Hidropónica">by Gaia Software</AppBar>
                        <br/>
                        <Box
                            bgcolor="lightblue"
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
                            onChange={this.handleChange('username')}
                            />
                            </Box>
                            <br/>
                            <Box 
                                bgcolor="white"
                                width={280}
                            >
                            <TextField 
                                hintText="Password"
                                value={this.state.password}
                                onChange={this.handleChange('password')}
                            />
                            </Box>
                            <br/>
                            <RaisedButton
                                primary={true}
                                label="Adelante"
                                disabled={!this.validateForm()}
                            />
                            <br/>
                        </Box>
                    </center>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}

export default Login;