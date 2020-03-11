import React, { Component } from 'react';
// import Form from 'react-bootstrap/Form';
//import Button from 'react-bootstrap/Button';
import {Input,Col} from 'reactstrap';
import {Modal,Button,Row,Form} from 'react-bootstrap';

class FormAddRail extends Component {
    constructor(props){
        super(props);
        this.nameInput = React.createRef(); 
        this.locationInput = React.createRef(); 
        this.state = {
			addRiel : props.addRiel,
			name: '',
			location: '',

			message: '',
        };

	}

    render(){
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
					 	<Form>
					 		<Form.Group row controlId="formBasicName">
					 			<Form.Label htmlFor="firstname" md={2} > Nombre </Form.Label>
					 			<Col md={10} >
									<Input type="text" id="firstname" name="firstname" placeholder="First Name" Value={this.state.name} ></Input>
								</Col>
					 			<Form.Text className="text-muted">
					 			Escribe rápido Animal!!!
					 			</Form.Text>
					 		</Form.Group>

					 		<Form.Group row controlId="formBasicLocation">
					 			<Form.Label htmlFor="location" md={2} > Ubicación </Form.Label>
					 			<Col md={10} >
									<Input type="text" id="location" name="location" placeholder="Location" Value={this.state.location} ></Input>
								</Col>
					 		</Form.Group>
							
					 		<Button variant="primary" type="submit" onClick={ () => this.state.addRiel("name","location") }>
							 {/* this.nameInput.current.value,this.locationInput.current.value */}
					 			Agregar
					 		</Button>
					 	</Form>

					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger " onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal> 
        )
    }
}


export default FormAddRail ;