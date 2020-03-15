import React, { Component } from 'react';
import {Modal, ModalHeader,ModalFooter, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';



class FormUpdateMicroclimate extends Component {
    constructor(props){
        super(props);
        this.nameInput = React.createRef(); 
        this.lightTypeInput = React.createRef(); 
        this.state = {
            id : props.id_microclimate,
            lightType : props.lightType,
            name : props.name,
            updateMicroclimate : props.updateMicroclimate,

            touched: {
				name: false,
				lightType: false,
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

	validate(name,lightType){
		const errors = {
			name: '',
			lightType: '',
		};

		if (this.state.touched.name && name.length <= 3 ) {
			errors.name = 'No has escrito un nombre valido';
		}
		if (this.state.touched.lightType && lightType.length <= 3 ) {
			errors.lightType = 'No has escrito una ubicación valida';
		}
		return errors;
    }
    
    
 
    render(){
        const errors = this.validate(this.state.name,this.state.lightType)
        console.log("AQUI ESTA UPDATE: " + this.state.name)
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
                            <Label htmlFor="lightType" md={2} > Ubicación </Label>
                            <Col md={10} >
                                <Input type="text" id="lightType" name="lightType" placeholder="Ingrese la ubicación" value={this.state.lightType} defaultValue={this.state.lightType} valid={errors.lightType === ''} invalid={errors.lightType !== ''} onBlur={this.handleBlur('lightType')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.lightType}</FormFeedback>
                            </Col>
                        </FormGroup>
                        
                        <Button type="submit" color="primary" 
                        onClick={  (errors.name !== '' || errors.lightType !== '' || this.state.name.length == 0 || this.state.name.length == 0) ?
                        () =>  alert("no has completado el Formulario") 
                        : () => this.state.updateRiel(this.state.id,this.state.name,this.state.lightType) } >
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


export default FormUpdateMicroclimate ;

