import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import axiosMicroclimateCreate from '../../redux/rootReducer/axiosMicroclimateCreate';
import axiosMicroclimateUpdate from '../../redux/rootReducer/axiosMicroclimateUpdate';
import axiosMicroclimateDelete from '../../redux/rootReducer/axiosMicroclimateDelete';

class Microclimate extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            microclimateSelect : {
                idMicroclimate: null,
                nameMicroclimate: null,
                intensityMicroclimate: null,
                lightTypeMicroclimate: null,
                waterPHMicroclimate: null,
                dailyHoursMicroclimate: null,
                lightStartTimeMicroclimate: null,
                temperatureMicroclimate: null,
                humidityMicroclimate: null
            }
        };
        
        this.elegirMicroclima = this.elegirMicroclima.bind(this);
        
        
        this.addMicroclimate = this.addMicroclimate.bind(this);
        this.deleteMicroclimate = this.deleteMicroclimate.bind(this);
        this.updateMicroclimate = this.updateMicroclimate.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
        this.addModalOpen = this.addModalOpen.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    elegirMicroclima( id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity ) {
        this.setState({     microclimateSelect:{
                                idMicroclimate: id_microclimate,
                                nameMicroclimate: name,
                                intensityMicroclimate: intensity,
                                lightTypeMicroclimate: lightType,
                                waterPHMicroclimate: waterPH,
                                dailyHoursMicroclimate: dailyHours,
                                lightStartTimeMicroclimate: lightStartTime,
                                temperatureMicroclimate: temperature,
                                humidityMicroclimate: humidity,
                            }
                        })
    }

    addMicroclimate( name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity ){
        this.props.axiosMicroclimateCreate( name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity );
        window.location.reload();
    }

    deleteMicroclimate(id_microclimate){
        this.props.axiosMicroclimateDelete(id_microclimate);
        window.location.reload();
    }

    updateMicroclimate(id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity ){
        this.props.axiosMicroclimateUpdate( id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity );
        window.location.reload();
    }

    addModalClose(){
        this.setState({ addModalShow : false })
    }
    addModalOpen(){
        this.setState({ addModalShow : true })
    }

    openModal( id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity ) {
        this.setState({ open: true });
        this.elegirMicroclima( id_microclimate,name, intensity, lightType, waterPH, dailyHours, lightStartTime, temperature, humidity )
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
                microclimateSelect={this.state.microclimateSelect}
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
