import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

class FormAddContainer extends Component {
    constructor(props){
        super(props);
		this.state = {
			addContainer : props.addContainer,
			name: '',
			volume: '',

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

	validate(name,volume){
		const errors = {
			name: '',
			volume: '',
		};

		if (this.state.touched.name && name.length <= 3 ) {
			errors.name = 'No has escrito un nombre valido';
		}
		if (this.state.touched.volume && volume.length <= 3 ) {
			errors.volume = 'No has escrito una ubicación valida';
		}
		return errors;
	}

	closeAndClear(){
		this.props.onHide();
		this.setState({ name: '', volume: '', 
			touched:  {
				name: false,
				volume: false,
			}
	 	});
	}

    render(){
		const errors = this.validate(this.state.name,this.state.volume)
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
					Agregar Container
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
					 			<Label htmlFor="volume" md={2} > Volumen </Label>
					 			<Col md={10} >
									<Input type="text" id="volume" name="volume" placeholder="Ingrese el volumen" value={this.state.volume} valid={errors.volume === ''} invalid={errors.volume !== ''} onBlur={this.handleBlur('volume')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.volume}</FormFeedback>
								</Col>
					 		</FormGroup>
							
							 <Button type="submit" color="primary" 
							 onClick={  (errors.name !== '' || errors.volume !== '' || this.state.name.length == 0 || this.state.name.length == 0 ) ?
							  () =>  alert("no has completado el Formulario") 
							  : () => this.state.addContainer(this.state.name,this.state.volume) } >
					 			Agregar
					 		</Button>
					 	</Form>

					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button color="danger" onClick={ this.closeAndClear } >Close </Button>
				</Modal.Footer>
			</Modal> 
        )
    }
}


export default FormAddContainer ;