import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchRailsSuggestions from '../../redux/rootReducer/fetchRailsSuggestions';
import fetchCyclesSuggestions from '../../redux/rootReducer/fetchCyclesSuggestions';
import fetchMicroclimatesSuggestions from '../../redux/rootReducer/fetchMicroclimatesSuggestions';
import fetchContainersSuggestions from '../../redux/rootReducer/fetchContainersSuggestions';
import fetchAvailableSuggestions from '../../redux/rootReducer/fetchAvailableSuggestions';
import logOut from '../../redux/rootReducer/logOut';

class AppBar extends Component{
	componentWillMount(){
        if ( this.state.title === "Rieles" ) {
            this.props.fetchRailsSuggestions("");
        }
        else if( this.state.title === "Ciclos"  ){
            this.props.fetchCyclesSuggestions("");
            this.props.fetchAvailableSuggestions("");
        }
        else if( this.state.title === "Microclimas"  ){
            this.props.fetchMicroclimatesSuggestions("");
        }
        else if( this.state.title === "Contenedores"  ){
            this.props.fetchContainersSuggestions("");
        }
	}
    constructor(props){
        super(props);
        this.state={
            title:props.title,
            text:'',
        };

        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }

    LogOut(){
		this.props.logOut( null );
		console.log("salte de aqui wn")
		this.props.history.push("/");
	}

    onChangeText(text){
        this.setState({ text });

        if (this.state.title === "Rieles" ) {
            this.props.fetchRailsSuggestions(text);    
        }
        else if( this.state.title === "Ciclos"  ){
            this.props.fetchCyclesSuggestions(text);
        }
        else if( this.state.title === "Microclimas"  ){
            this.props.fetchMicroclimatesSuggestions(text);
        }
        else if( this.state.title === "Contenedores"  ){
            this.props.fetchContainersSuggestions(text);
        }
    }

    onChangeSelection(text){
        this.setState({ text });
        
        if (this.state.title === "Rieles" ) {
            this.props.fetchRailsSuggestions(text);    
        }
        else if( this.state.title === "Ciclos"  ){
            this.props.fetchCyclesSuggestions(text);
        }
        else if( this.state.title === "Microclimas"  ){
            this.props.fetchMicroclimatesSuggestions(text);
        }
        else if( this.state.title === "Contenedores"  ){
            this.props.fetchContainersSuggestions(text);
        }
    }

    render(){
        
        return(
            <Page
                title={this.state.title}
                text={this.state.text}
                suggestions={this.props.suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
                LogOut={this.LogOut}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

const mapDispatchToProps = {
    fetchRailsSuggestions,
    fetchCyclesSuggestions,
    fetchMicroclimatesSuggestions,
    fetchContainersSuggestions,
    fetchAvailableSuggestions,
    logOut
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(AppBar));
