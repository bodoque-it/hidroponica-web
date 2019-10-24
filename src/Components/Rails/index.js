import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


class Rails extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render() {
        console.log(this.props.suggestions)
        return(
            <div >
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

export default withRouter(connect(mapStateToProps)(Rails) ) ;
