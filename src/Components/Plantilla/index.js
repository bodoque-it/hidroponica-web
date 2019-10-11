import React, { Component } from 'react';
import Page from './page';
import AppBar from '../AppBar';

class Plantilla extends Component {
	constructor(props){
		super(props);
		this.state = {
			title: props.title
		}
	}
    render() {
        return(
		    <div>
		    	<AppBar
		    		title = "TITULO"
		    	/>
		        <Page/>
            </div>
        )
    }
}

export default Plantilla;
