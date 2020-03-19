import React, { Component } from 'react';
import  { useState } from 'react';
import Popup from 'reactjs-popup';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Infrastructure extends Component{
    constructor(props){
        super(props);
        this.state = {
            open: false 
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
    }
    
    render(){
        return(
                <li class="nav-item active">
                    <a className="nav-link" onClick={this.openModal}>
                        Infraestuctura
                    </a>
                </li>
        )
    }
}

export default Infrastructure;