import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchRailsSuggestions from '../../redux/rootReducer/fetchRailsSuggestions';
import fetchCyclesSuggestions from '../../redux/rootReducer/fetchCyclesSuggestions';
import fetchMicroclimatesSuggestions from '../../redux/rootReducer/fetchMicroclimatesSuggestions';

class AppBar extends Component{
	componentWillMount(){
        if ( this.state.title === "Rieles" ) {
            this.props.fetchRailsSuggestions("");  
        }
        else if( this.state.title === "Ciclos"  ){
            this.props.fetchCyclesSuggestions("");
        }
        else if( this.state.title === "Microclimas"  ){
            this.props.fetchMicroclimatesSuggestions("");
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
    }

    render(){
        
        return(
            <Page
                title={this.state.title}
                text={this.state.text}
                suggestions={this.props.suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
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
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(AppBar));
