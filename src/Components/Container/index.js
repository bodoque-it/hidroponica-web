import React, { Component } from 'react';
import Page from './page';
import Plantilla from '../Plantilla';

class Container extends Component {
    render() {
        return(
	        <div>
		    	<Plantilla/>
		        <Page/>
            </div>
        )
    }
}

export default Container;
