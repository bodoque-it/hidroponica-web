import React from 'react';
import './styles.css';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AppBar from '../AppBar';

function Page(props) {

    return (
        
        <div>
            <AppBar
                title="Rieles"
            />
            Hello from Rails!!!
        </div>
    );
}

export default Page;