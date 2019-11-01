import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import './styles.css';

class AppBarAutocomplete extends Component{
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
            title,
        } = this.props;
        const {
            isOpen,
        } = this.state;
        if(title=='Rieles' || title=='Ciclos' || title=='Microclimas'){
        	return (
		        <div className="main-container" style={{
		            position: 'absolute', 
		            left: '50%', 
		            top: '50%',
		            transform: 'translate(-50%, -50%)'
		        }} >
		            <div className="container-icon">
		                <SearchIcon />
		            </div>
		            <InputBase
		                placeholder="Search…"
		                value={text}
		                style={{ width: '100%' }}
		                onChange={(event) => {
		                    const newText = event.target.value;

		                    onChangeText(newText);

		                    if (!isOpen && newText) {
		                        this.setState({ isOpen: true });
		                    } else if (isOpen && !newText) {
		                        this.setState({ isOpen: false });
		                    }
		                }}
		                onBlur={() => {
		                    setTimeout(() => this.setState({ isOpen: false }), 100);
		                }}
		                onFocus={() => {
		                    if (text) {
		                        this.setState({ isOpen: true });
		                    }
		                }}
		                onKeyPress={(event) => {
		                    if (event.key === 'Enter' && text) {
		                        onChangeSelection(text);
		                    }
		                }}
		            />
		            {isOpen &&
		            <Paper className="container-results" square>
		                {suggestions.map(suggestion =>
		                <MenuItem
		                    key={suggestion.locate}
		                    component="div"
		                    onClick={() => {
		                        onChangeSelection(suggestion.name);
		                        this.setState({ isOpen: false });
		                    }}
		                >
		                    {suggestion.name}
		                </MenuItem>)}
		            </Paper>}
		        </div>
		    );
        } else{
        	return(null);
        }
        
    }
}

export default AppBarAutocomplete;
