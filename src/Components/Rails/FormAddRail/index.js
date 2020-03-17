import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

class FormAddRail extends Component {
    constructor(props){
        super(props);
        this.state = {
			addRiel : props.addRiel,
			name: '',
			location: '',

			touched: {
				name: false,
				location: false,
			}
		};
		
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
		this.closeAndClear = this.closeAndClear.bind(this);

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

	closeAndClear(){
		this.props.onHide();
		this.setState({ name: '', location: '', 
			touched:  {
				name: false,
				location: false,
			}
	 	});
	}

    render(){
		const errors = this.validate(this.state.name,this.state.location)
		console.log("sasdasdasdasassdasdadd")
        return(
			<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			>
				<Modal.Header >
					<Modal.Title id="contained-modal-title-vcenter">
					Agregar Riel
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container" >
					 	<Form onSubmit={this.handleSubmit} >
					 		<FormGroup row >
					 			<Label htmlFor="name" md={2} > Nombre </Label>
					 			<Col md={10} >
									<Input type="text" id="name" name="name" placeholder="Ingrese el nombre" value={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange} />
									<FormFeedback>{errors.name}</FormFeedback>
								</Col>
					 		</FormGroup>

					 		<FormGroup row >
					 			<Label htmlFor="location" md={2} > Ubicación </Label>
					 			<Col md={10} >
									<Input type="text" id="location" name="location" placeholder="Ingrese la ubicación" value={this.state.location} valid={errors.location === ''} invalid={errors.location !== ''} onBlur={this.handleBlur('location')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.location}</FormFeedback>
								</Col>
					 		</FormGroup>
							
							 <Button type="submit" color="primary" 
							 onClick={  (errors.name !== '' || errors.location !== '' || this.state.name.length == 0 || this.state.name.length == 0 ) ?
							  () =>  alert("no has completado el Formulario") 
							  : () => this.state.addRiel(this.state.name,this.state.location) } >
					 			Agregar
					 		</Button>
					 	</Form>

					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="danger" onClick={ this.closeAndClear } > Cerrar </Button>
				</Modal.Footer>
			</Modal> 
        )
    }
}


export default FormAddRail ;