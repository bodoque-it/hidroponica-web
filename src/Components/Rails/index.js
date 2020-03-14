import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosRailDelete from '../../redux/rootReducer/axiosRailDelete';
import axiosRailUpdate from '../../redux/rootReducer/axiosRailUpdate';
import fetchRailCreate from '../../redux/rootReducer/fetchRailCreate';


class Rails extends Component {
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false,
            open: false
        };

        this.deleteRail = this.deleteRail.bind(this);
        this.addRiel = this.addRiel.bind(this);
        this.updateRiel = this.updateRiel.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
        this.addModalOpen = this.addModalOpen.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deleteRail(id_rail){
        this.props.axiosRailDelete(id_rail);
        window.location.reload();
    }

    addRiel(name,location){
        this.props.fetchRailCreate(name,location);
        window.location.reload();
    }

    updateRiel(id_rail,name,location){
        this.props.axiosRailUpdate(id_rail,name,location);
        window.location.reload();
    }

    addModalClose(){
        this.setState({ addModalShow : false })
    }
    addModalOpen(){
        this.setState({ addModalShow : true })
    }

    openModal() {
        this.setState({ open: true });
    }

    closeModal() {
        this.setState({ open: false });
    }

    render() {
        return(
            <div >
        	    <Page
                    suggestions={this.props.suggestions}
                    deleteRail={this.deleteRail}
                    addRiel={this.addRiel}
                    updateRiel={this.updateRiel}
                    addModalShow={this.state.addModalShow}
                    addModalClose={this.addModalClose}
                    addModalOpen={this.addModalOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    open={this.state.open}
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
    axiosRailUpdate,
    fetchRailCreate,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rails) ) ;
