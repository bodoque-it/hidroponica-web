import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class FormRail extends Component {
    constructor(props){
        super(props);
        this.nameInput = React.createRef(); 
        this.locationInput = React.createRef(); 
        this.state = {
            addRiel : props.addRiel,
        };

    }
    render(){
        return(
            <Form>
				<Form.Group controlId="formBasicName">
					<Form.Label> Nombre </Form.Label>
					<Form.Control type="name" placeholder="Que miras....escribe ya tu nombre maldita sea!!" ref={this.nameInput} />
					<Form.Text className="text-muted">
					Escribe rápido Animal!!!
					</Form.Text>
				</Form.Group>

				<Form.Group controlId="formBasicLocation">
					<Form.Label> Ubicación </Form.Label>
					<Form.Control type="location" placeholder="Donde vives estúpido?" ref={this.locationInput} />
				</Form.Group>
				
				<Button variant="primary" type="submit" onClick={ () => this.state.addRiel(this.nameInput.current.value,this.locationInput.current.value) }>
					
					Agregar
				</Button>
			</Form>
        )
    }
}


export default FormRail ;