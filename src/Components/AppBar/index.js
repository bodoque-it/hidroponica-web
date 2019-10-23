import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import fetchSuggestions from '../../redux/rootReducer/fetchSuggestions';

class AppBar extends Component{
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

        this.props.fetchSuggestions(text);
    }

    onChangeSelection(text){
        this.setState({ text });
        this.props.fetchSuggestions(text)

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
    fetchSuggestions,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(AppBar));