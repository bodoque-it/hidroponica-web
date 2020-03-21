import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosInfrastructuresSuggestions from '../../../redux/rootReducer/axiosInfrastructuresSuggestions';

class FormAddRail extends Component {
	componentWillMount(){
		this.props.axiosInfrastructuresSuggestions("");
	}
    constructor(props){
        super(props);
        this.state = {
			addRiel : props.addRiel,
			name: '',
			infrastructure_address: 'Gabriel_Street',

			touched: {
				name: false,
				infrastructure_address: false,
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

	closeAndClear(){
		this.props.onHide();
		this.setState({ name: '',
			touched:  {
				name: false,
				infrastructure_address: false,
			}
	 	});
	}

    render(){
		const errors = this.validate(this.state.name,this.state.infrastructure_address)
		const isEmpty = this.props.infrastructures.length === 0;
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
					 			<Label htmlFor="infrastructure_address" md={2} > Ubicación </Label>
					 			<Col md={10} >
									<Input type="select" name="infrastructure_address" id="infrastructure_address" value={this.state.infrastructure_address} onBlur={this.handleBlur('infrastructure_address')} onChange={this.handleInputChange} >
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
							 onClick={  (errors.name !== '' || this.state.name.length === 0  || errors.infrastructure_address !== '' ) ?
							  () =>  alert("no has completado el Formulario") 
							  : () => this.state.addRiel(this.state.name,this.state.infrastructure_address) } >
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

const mapStateToProps = (state) => {
    return {
        infrastructures: state.infrastructures,
    };
};

const mapDispatchToProps = {
    axiosInfrastructuresSuggestions,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(FormAddRail));

