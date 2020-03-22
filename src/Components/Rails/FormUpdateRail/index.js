import React, { Component } from 'react';
import { ModalHeader,ModalFooter, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import { Modal } from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosInfrastructuresSuggestions from '../../../redux/rootReducer/axiosInfrastructuresSuggestions';

class FormUpdateRail extends Component {
    componentWillMount(){
		this.props.axiosInfrastructuresSuggestions("");
	}
    constructor(props){
        super(props);
        this.state = {
            id : props.id,
            name : props.name,
            infrastructure_address : props.infrastructure_address,
            updateRiel : props.updateRiel,

            touched: {
				name: false,
				infrastructure_address: false,
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

	validate(name,infrastructure_address){
		const errors = {
			name: '',
			infrastructure_address: '',
		};

		const regName = /^[a-zA-Z]{1,10}?([a-zA-Z0-9 _-]{0,15})$/;
		if (this.state.touched.name && !regName.test(name) ) {
			errors.name = 'No has escrito un nombre valido';
		}
		return errors;
    }
    
    
 
    render(){
        const errors = this.validate(this.state.name,this.state.infrastructure_address)
        const isEmpty = this.props.infrastructures.length === 0;
        return(
            <div >
                <ModalHeader > Actualizar Riel </ModalHeader>
                    <Form onSubmit={this.handleSubmit}  >
                        <FormGroup row >
                            <Label htmlFor="name" md={2} > Nombre </Label>
                            <Col md={10} >
                                <Input type="text" id="name" name="name" placeholder="Ingrese el nombre" value={this.state.name} defaultValue={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="infrastructure_address" md={2} > Ubicación </Label>
                            <Col md={10} >
                                <Input type="select" name="infrastructure_address" id="infrastructure_address" value={this.state.infrastructure_address}  onBlur={this.handleBlur('infrastructure_address')} onChange={this.handleInputChange} >
                                { isEmpty ?
                                    <option>""</option>
                                    :
                                        this.props.infrastructures.map( infrastructure =>
                                                <option> { infrastructure.address } </option>
                                                )
                                }
                                </Input>
                                <FormFeedback>{errors.infrastructure_address}</FormFeedback>
                            </Col>
                        </FormGroup>
                        
                        <Button type="submit" color="primary" 
                        onClick={  (errors.name !== '' || errors.infrastructure_address !== '' || this.state.name.length === 0 ) ?
                                    () =>  alert("no has completado el Formulario") 
                                    : () => this.state.updateRiel(this.state.id,this.state.name,this.state.infrastructure_address) } >
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

const mapStateToProps = (state) => {
    return {
        infrastructures: state.infrastructures,
    };
};

const mapDispatchToProps = {
    axiosInfrastructuresSuggestions,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)( FormUpdateRail ));


