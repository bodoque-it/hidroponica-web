import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosAddContainerInRail from '../../../redux/rootReducer/axiosAddContainerInRail';


class FormAddContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            id_rail: props.id_rail,
            open: false,
            name: "",
            volume: "",

            touched: {
                name: false,
                volume: false,
			}
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addContainer( id_rail, name, volume ){
        this.props.axiosAddContainerInRail( id_rail, name, volume );
        window.location.reload();
    }


    handleInputChange(event){
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}
	handleSubmit(event){
		
		// alert("current State is: " + JSON.stringify(this.state))
		event.preventDefault();
	}

	handleBlur = (field) => (event) => {
		this.setState({
			touched: {...this.state.touched, [field]: true }
		});
	}

	validate( name, volume ){
		const errors = {
            name: '',
            volume: ''
        };
        
        const regName = /^[a-zA-Z]{1,10}?([a-zA-Z0-9 #_-]{0,15})$/;
		if (this.state.touched.name && !regName.test(name) ) {
            errors.name = 'No has escrito una ubicación valida';
        }
        const regVolume = /^\d*(\.\d{1})?\d{0,1}$/;
		if (this.state.touched.volume && !regVolume.test(volume) ) {
            errors.volume = 'Volumen no valido, máx 2 decimales de precisión';
        }
		
		return errors;
	}
    
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
        this.setState({ 
            name: '',
            volume: '',
			touched:  {
                name: false,
                volume: false
			}
	 	});
    }
    
    render(){
        const errors = this.validate( this.state.name, this.state.volume )
        console.log("ID_RAIL: "+ this.state.id_rail)
        return(
            <div >
                <AddIcon color="primary" onClick= {()=>this.openModal()}  />
                
                    <Modal className="custom-modal-style" isOpen={this.state.open}  size="xl"  >
                        <ModalHeader > Formulario para añadir un Contenedor a este riel </ModalHeader  >

                            <ModalBody>
                                <Form onSubmit={this.handleSubmit} >

                                    <FormGroup row >
                                    <Label htmlFor="name" md={2} > Nombre </Label>
                                    <Col md={5} >
                                        <Input type="text" id="name" name="name" placeholder="Ingrese el nombre" value={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.name}</FormFeedback>
                                    </Col>
                                    </FormGroup>

                                    <FormGroup row >
                                    <Label htmlFor="volume" md={2} > Volumen </Label>
                                    <Col md={5} >
                                        <Input type="text" id="volume" name="volume" placeholder="Ingrese el volumen" value={this.state.volume} valid={errors.volume === ''} invalid={errors.volume !== ''} onBlur={this.handleBlur('volume')} onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.volume}</FormFeedback>
                                    </Col>
                                    </FormGroup>

                                </Form>
                            </ModalBody>

                        <ModalFooter>
                        <Button type="submit" color="primary" 
                             onClick={  (   errors.name !== '' ||
                                            errors.volume !== '' ||
                                            this.state.name.length === 0 ||
                                            this.state.volume.length === 0
                                        ) ?
							  () =>  alert("no has completado el Formulario") 
							  : () => this.addContainer( this.state.id_rail, this.state.name, this.state.volume ) } >
					 			Agregar Contenedor
					 		</Button>
                        <Button color="danger" onClick={ this.closeModal } > Cancelar </Button>
                        </ModalFooter>
                    </Modal>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    };
};

const mapDispatchToProps = {
    axiosAddContainerInRail,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(FormAddContainer));