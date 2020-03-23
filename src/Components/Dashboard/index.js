import React, { Component } from 'react';
import Page from './page';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchContainerCountSuggestions from '../../redux/rootReducer/fetchContainerCountSuggestions';

import Plantilla from '../Plantilla';

class Dashboard extends Component {
	componentWillMount(){
		this.props.fetchContainerCountSuggestions("");
	}
	constructor(props){
		super(props);
	}
    render() {
        return(
            <div>
                <Page
                	suggestions={this.props.suggestions}
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};
const mapDispatchToProps = {
	fetchContainerCountSuggestions,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard) ) ;