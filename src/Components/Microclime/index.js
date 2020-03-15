import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import axiosMicroclimateCreate from '../../redux/rootReducer/axiosMicroclimateCreate';
import axiosMicroclimateUpdate from '../../redux/rootReducer/axiosMicroclimateUpdate';
import axiosMicroclimateDelete from '../../redux/rootReducer/axiosMicroclimateDelete';

class Microclimate extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
        this.addMicroclimate = this.addMicroclimate.bind(this);
        this.deleteMicroclimate = this.deleteMicroclimate.bind(this);
        this.updateMicroclimate = this.updateMicroclimate.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
        this.addModalOpen = this.addModalOpen.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addMicroclimate( name, intensity, lightType, waterPH, dailyHours, lightStartTime ){
        this.props.axiosMicroclimateCreate( name, intensity, lightType, waterPH, dailyHours, lightStartTime );
        window.location.reload();
    }

    deleteMicroclimate(id_microclimate){
        this.props.axiosMicroclimateDelete(id_microclimate);
        window.location.reload();
    }

    updateMicroclimate(id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime ){
        this.props.axiosMicroclimateUpdate( id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime );
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
        return (
	        <Page
                suggestions={this.props.suggestions}
                addMicroclimate={this.addMicroclimate}
                updateMicroclimate={this.updateMicroclimate}
                deleteMicroclimate={this.deleteMicroclimate}
                addModalShow={this.state.addModalShow}
                addModalClose={this.addModalClose}
                addModalOpen={this.addModalOpen}
                openModal={this.openModal}
                closeModal={this.closeModal}
                open={this.state.open}
            />
        );
    }
}


const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

const mapDispatchToProps = {
    axiosMicroclimateCreate,
    axiosMicroclimateUpdate,
    axiosMicroclimateDelete,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Microclimate) ) ;
