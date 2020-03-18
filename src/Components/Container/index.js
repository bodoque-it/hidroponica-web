import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosContainerDelete from '../../redux/rootReducer/axiosContainerDelete';
import axiosContainerUpdate from '../../redux/rootReducer/axiosContainerUpdate';
import fetchContainerCreate from '../../redux/rootReducer/fetchContainerCreate';


class Rails extends Component {
    constructor(props){
        super(props);
        this.state = {
            addModalShow : false,
            open: false
        };

        this.deleteContainer = this.deleteContainer.bind(this);
        this.addContainer = this.addContainer.bind(this);
        this.updateContainer = this.updateContainer.bind(this);
        this.addModalClose = this.addModalClose.bind(this);
        this.addModalOpen = this.addModalOpen.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deleteContainer(id_container){
        this.props.axiosContainerDelete(id_container);
        window.location.reload();
    }

    addContainer(name,volume){
        this.props.fetchContainerCreate(name,volume);
        window.location.reload();
    }

    updateContainer(id_container,name,volume){
        this.props.axiosContainerUpdate(id_container,name,volume);
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
                    deleteContainer={this.deleteContainer}
                    addContainer={this.addContainer}
                    updateContainer={this.updateContainer}
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
    axiosContainerDelete,
    axiosContainerUpdate,
    fetchContainerCreate,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Rails) ) ;
