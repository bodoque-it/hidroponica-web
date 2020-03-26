import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosContainerDelete from '../../redux/rootReducer/axiosContainerDelete';
import axiosContainerUpdate from '../../redux/rootReducer/axiosContainerUpdate';
import fetchContainerCreate from '../../redux/rootReducer/fetchContainerCreate';
import fetchContainersSuggestions from '../../redux/rootReducer/fetchContainersSuggestions';


class Containers extends Component {
    constructor(props){
        super(props);
        this.state = {
            open: false,
            containerSelect : {
                idContainer: null,
                nameContainer: null,
                volumeContainer: null,
            }
        };

        this.deleteContainer = this.deleteContainer.bind(this);
        this.updateContainer = this.updateContainer.bind(this);
        
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    deleteContainer(id_container){
        this.props.axiosContainerDelete(id_container);
        setTimeout(function() { 
            this.props.fetchContainersSuggestions("");
        }.bind(this), 25)
    }

    updateContainer(id_container,name,volume){
        this.props.axiosContainerUpdate(id_container,name,volume);
        setTimeout(function() { 
            this.props.fetchContainersSuggestions("");
            this.setState({ open: false });
        }.bind(this), 25)
    }

    

    openModal( id_container, name, volume ) {
        this.setState({ open: true });
        this.setState({ containerSelect:{
            idContainer: id_container,
            nameContainer: name,
            volumeContainer: volume

        } })
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
                    updateContainer={this.updateContainer}
                    addModalShow={this.state.addModalShow}
                    openModal={this.openModal}
                    closeModal={this.closeModal}
                    open={this.state.open}
                    containerSelect={this.state.containerSelect}
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
    fetchContainersSuggestions
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Containers) ) ;
