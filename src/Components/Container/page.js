import React from 'react';
import './styles.css';
import AppBar from '../AppBar'


function Page(props) {

    return (
        <div>
            <AppBar
                title="Contenedores"
            />
            Hello from Containers!!!
        </div>
    );
}

export default Page;