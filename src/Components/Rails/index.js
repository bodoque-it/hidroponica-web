import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosRailDelete from '../../redux/rootReducer/axiosRailDelete';
import fetchRailCreate from '../../redux/rootReducer/fetchRailCreate';


class Rails extends Component {
    constructor(props){
        super(props);
        this.state = {
            
        };

        this.deleteRail = this.deleteRail.bind(this);
        this.addRiel = this.addRiel.bind(this);
    }

    deleteRail(id_rail){
        this.props.axiosRailDelete(id_rail);
        window.location.reload();
    }

    addRiel(name,location){
        this.props.fetchRailCreate(name,location);
        window.location.reload();
    }

    render() {
        return(
            <div >
        	    <Page
                    suggestions={this.props.suggestions}
                    deleteRail={this.deleteRail}
                    addRiel={this.addRiel}
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
    axiosRailDelete,
    fetchRailCreate,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rails) ) ;
