import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosCycleDelete from '../../redux/rootReducer/axiosCycleDelete';
import axiosCycleUpdate from '../../redux/rootReducer/axiosCycleUpdate';
import fetchCycleCreate from '../../redux/rootReducer/fetchCycleCreate';
import fetchCyclesSuggestions from '../../redux/rootReducer/fetchCyclesSuggestions';


class Cycles extends Component {
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false,
            open: false,
            cycleSelect : {
                idCycle: null,
                container_idCycle: null,
                microclimate_idCycle: null,
                estimatedDateCycle: null,
                finishDateCycle: null
            }
        };

        this.deleteCycle = this.deleteCycle.bind(this);
        this.addCycle = this.addCycle.bind(this);
        this.updateCycle = this.updateCycle.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
        this.addModalOpen = this.addModalOpen.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deleteCycle(id_cycle){
        this.props.axiosCycleDelete(id_cycle);
        setTimeout(function() { 
            this.props.fetchCyclesSuggestions('')
        }.bind(this), 15)
    }

    addCycle(begin_date, estimated_date, finish_date){
        this.props.fetchCycleCreate(begin_date, estimated_date, finish_date);
        setTimeout(function() { 
            this.props.fetchCyclesSuggestions('')
            this.setState({ addModalShow : false })
        }.bind(this), 5)
    }

    updateCycle(id_cycle,fk_container,fk_microclimate, estimated_date, isFinish){
        console.log( "id_ciclo: "+id_cycle+ "container: "+fk_container+ "microclima: "+fk_microclimate+"estimated_date: "+estimated_date+"isFinisH: "+isFinish )
        this.props.axiosCycleUpdate(id_cycle,fk_container,fk_microclimate, estimated_date, isFinish);
        setTimeout(function() { 
            this.props.fetchCyclesSuggestions('')
            this.setState({ open: false });
        }.bind(this), 15)
    }

    addModalClose(){
        this.setState({ addModalShow : false })
    }
    addModalOpen(){
        this.setState({ addModalShow : true })
    }

    openModal(id_cycle, container_id, microclimate_id, estimated_date, finish_date ) {
        this.setState({ open: true });
        this.setState({ cycleSelect : {
                            idCycle: id_cycle,
                            container_idCycle: container_id,
                            microclimate_idCycle: microclimate_id,
                            estimatedDateCycle: estimated_date,
                            finishDateCycle: finish_date
                        } 
        })
    }

    closeModal() {
        this.setState({ open: false });
    }

    render() {
        return(
            <div >
        	    <Page
                    suggestions={this.props.suggestions}
                    available={this.props.available}
                    deleteCycle={this.deleteCycle}
                    addCycle={this.addCycle}
                    updateCycle={this.updateCycle}
                    addModalShow={this.state.addModalShow}
                    addModalClose={this.addModalClose}
                    addModalOpen={this.addModalOpen}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    open={this.state.open}
                    cycleSelect={this.state.cycleSelect}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("ciclos: "+state.cycles)
    return {
        suggestions: state.cycles,
        available: state.suggestions,
    };
};

const mapDispatchToProps = {
    axiosCycleDelete,
    axiosCycleUpdate,
    fetchCycleCreate,
    fetchCyclesSuggestions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cycles) ) ;
