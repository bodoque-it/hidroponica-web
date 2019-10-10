import React, { Component } from 'react';
import Page from './page';


class AppBar extends Component{
    constructor(props){
        super(props);
        this.state={
            title:props.title,
        };
    }
    render(){

        return(
            <Page
                title={this.state.title}
            />
        )
    }
}

export default AppBar;