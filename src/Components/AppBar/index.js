import React, { Component } from 'react';
import Page from './page';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import findSuggestions from '../../redux/actions/findSuggestions';

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

        this.props.findSuggestions(text);
    }

    onChangeSelection(text){
        this.setState({ text });

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
    findSuggestions,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(AppBar));