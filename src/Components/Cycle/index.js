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
        this.props.axiosRailDelete(id_cycle);
        window.location.reload();
    }

    addCycle(begin_date, estimated_date, finish_date){
        this.props.fetchRailCreate(begin_date, estimated_date, finish_date);
        window.location.reload();
    }

    updateCycle(id_cycle,begin_date, estimated_date, finish_date){
        this.props.axiosRailUpdate(id_cycle,begin_date, estimated_date, finish_date);
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
    return {
        suggestions: state.suggestions,
    };
};

const mapDispatchToProps = {
    axiosCycleDelete,
    axiosCycleUpdate,
    fetchCycleCreate,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cycles) ) ;
