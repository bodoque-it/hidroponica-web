import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosCycleDelete from '../../redux/rootReducer/axiosCycleDelete';
import axiosCycleUpdate from '../../redux/rootReducer/axiosCycleUpdate';
import fetchCycleCreate from '../../redux/rootReducer/fetchCycleCreate';


class Cycles extends Component {
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false,
            open: false
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
        window.location.reload();
    }

    addCycle(begin_date, estimated_date, finish_date){
        this.props.fetchCycleCreate(begin_date, estimated_date, finish_date);
        window.location.reload();
    }

    updateCycle(id_cycle,fk_container,fk_microclimate, estimated_date, isFinish){
        console.log( "id_ciclo: "+id_cycle+ "container: "+fk_container+ "microclima: "+fk_microclimate+"estimated_date: "+estimated_date+"isFinisH: "+isFinish )
        this.props.axiosCycleUpdate(id_cycle,fk_container,fk_microclimate, estimated_date, isFinish);
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
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cycles) ) ;
