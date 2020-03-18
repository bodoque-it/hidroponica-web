import React, { Component } from 'react';
import {Modal, ModalHeader,ModalFooter, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
// import {} from 'react-bootstrap';



class FormUpdateRail extends Component {
    constructor(props){
        super(props);
        this.nameInput = React.createRef(); 
        this.locationInput = React.createRef(); 
        this.state = {
            id : props.id,
            location : props.location,
            name : props.name,
            updateRiel : props.updateRiel,

            touched: {
				name: false,
				location: false,
			}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        
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

	validate(name,location){
		const errors = {
			name: '',
			location: '',
		};

		if (this.state.touched.name && name.length <= 3 ) {
			errors.name = 'No has escrito un nombre valido';
		}
		if (this.state.touched.location && location.length <= 3 ) {
			errors.location = 'No has escrito una ubicación valida';
		}
		return errors;
    }
    
    
 
    render(){
        const errors = this.validate(this.state.name,this.state.location)
        return(
            <div>
            <ModalHeader > Actualizar Riel </ModalHeader>
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup row >
                        <Label htmlFor="name" md={2} > Nombre </Label>
                        <Col md={10} >
                            <Input type="text" id="name" name="name" placeholder="Ingrese el nombre" value={this.state.name} defaultValue={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange} />
                            <FormFeedback>{errors.name}</FormFeedback>
                        </Col>
                    </FormGroup>

                    <FormGroup row >
                        <Label htmlFor="volume" md={2} > Ubicación </Label>
                        <Col md={10} >
                            <Input type="text" id="volume" name="volume" placeholder="Ingrese la ubicación" value={this.state.volume} defaultValue={this.state.volume} valid={errors.volume === ''} invalid={errors.volume !== ''} onBlur={this.handleBlur('volume')} onChange={this.handleInputChange}/>
                            <FormFeedback>{errors.volume}</FormFeedback>
                        </Col>
                    </FormGroup>
                    
                    <Button type="submit" color="primary" 
                    onClick={  (errors.name !== '' || errors.volume !== '' || this.state.name.length == 0 || this.state.name.length == 0) ?
                                 () =>  alert("no has completado el Formulario") 
                                 : () => this.state.updateRiel(this.state.id,this.state.name,this.state.volume) } >
                        Modificar
                    </Button>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.props.closeModal() } > Cerrar </Button>
                    </ModalFooter>
                </Form>
                </div>

        )
    }
}


export default FormUpdateRail ;
