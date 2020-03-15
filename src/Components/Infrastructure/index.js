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
            <div>
                <a className="nav-link" onClick={this.openModal}>
                    Infraestuctura
                </a>
                <Popup
                    open={this.state.open}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                >
                
                    <ModalHeader > Ubicaciones </ModalHeader>
                        <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </ModalBody>
                        <Button color="primary"  >Do Something</Button>{' '}
                        <ModalFooter>
                        <Button color="danger" onClick={ this.closeModal } >Cancel</Button>
                        </ModalFooter>
                
                </Popup>
            </div>
        )
    }
}

export default Infrastructure;