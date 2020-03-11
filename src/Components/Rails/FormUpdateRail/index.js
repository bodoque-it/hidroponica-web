import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




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
        };
    }
 
    render(){
        return(
            
            <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label> Nombre </Form.Label>
                    <Form.Control type="name" placeholder="Que miras....escribe ya tu nombre maldita sea!!" ref={this.nameInput} defaultValue={this.state.name} />
                    <Form.Text className="text-muted">
                    Escribe rápido Animal!!!
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicLocation">
                    <Form.Label> Ubicación </Form.Label>
                    <Form.Control type="location" placeholder="Donde vives estúpido?" ref={this.locationInput} defaultValue={this.state.location} />
                </Form.Group>
                
                <Form.Row>
                    <Button variant="primary" type="submit" onClick={ () => this.state.updateRiel(this.state.id,this.nameInput.current.value,this.locationInput.current.value) }>
                        Modificar
                    </Button>
                
                    <Button variant="danger">danger</Button>
                </Form.Row>
            </Form>

        )
    }
}


export default FormUpdateRail ;