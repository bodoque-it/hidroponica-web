import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

class FormAddCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            addCycle : props.addCycle,
			container_id: '',
			container_name: 'raimundo',
			microclimate_id: '',
			microclimate_name: 'raimunduty',
			startDate: '',
            estimatedDate: '',
			finishDate: '',

			touched: {
                container_id: false,
                microclimate_id: false,
                startDate: false,
                estimatedDate: false,
                finishDate: false,
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
		console.log(this.state)
	}
	handleSubmit(event){
		
		// alert("current State is: " + JSON.stringify(this.state))
		event.preventDefault();
	}

	handleBlur = (field) => (event) => {
		console.log("field = " +field);
		this.setState({
			touched: {...this.state.touched, [field]: true }
		});
	}

	validate(container_id,microclimate_id,estimatedDate){
		const errors = {
            container_id: '',
            microclimate_id: '',
            estimatedDate: '',
		};
		if (this.state.touched.container_name && container_id.length <0 ) {
			errors.container_id = 'No has escrito una id valida';
		}
		if (this.state.touched.microclimate_name && microclimate_id.length <0 ) {
			errors.microclimate_id = 'No has escrito una id valida';
        }
        if (this.state.touched.estimatedDate && estimatedDate.length < 8 ) {
			errors.estimatedDate = 'No has escrito una fecha valida';
        }
        console.log(errors)
		return errors;
	}

	closeAndClear(){
		this.props.onHide();
		this.setState({ container_id: '', microclimate_id: '', startDate: '', estimatedDate: '', finishDate: '', 
			touched:  {
				container_id: false,
                microclimate_id: false,
                startDate: false,
                estimatedDate: false,
                finishDate: false,
			}
	 	});
	}

    render(){
		const errors = this.validate(this.state.container_name,this.state.microclimate_name,this.state.estimatedDate)

		// console.log(this.props.available.microclimates_available)
		// console.log(this.props.available.container_available)
		const isEmpty = this.props.available.length === 0;
        return(
			<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			>
				<Modal.Header >
					<Modal.Title id="contained-modal-title-vcenter">
					Agregar Ciclo
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div className="container" >
					 	<Form onSubmit={this.handleSubmit} >
					 		<FormGroup row >
					 			<Label htmlFor="container_id" md={2} > Nombre contenedor </Label>
					 			<Col md={10} >
								 <Input type="select" name="container_name" id="container_name" value={this.state.container_name} onBlur={this.handleBlur('container_name')} onChange={this.handleInputChange} >
								 	<option>""</option>
									{ isEmpty ?
										<option>""</option>
										:
											this.props.available.container_available.map( ava =>
													<option name="container_id" value={ava[0]} onChange={this.handleInputChange}> { ava[1] } </option> 
													)
									}
									</Input>
									<FormFeedback>{errors.container_id}</FormFeedback>
								</Col>
					 		</FormGroup>

					 		<FormGroup row >
					 			<Label htmlFor="microclimate_id" md={2} > Nombre microclima </Label>
					 			<Col md={10} >
								 <Input type="select" name="microclimate_name" id="microclimate_name" value={this.state.microclimate_name} onBlur={this.handleBlur('microclimate_name')} onChange={this.handleInputChange} >
								 	<option>""</option>
									{ isEmpty ?
										<option>""</option>
										:
											this.props.available.microclimates_available.map( ava =>
											<option name="microclimate_id" value={ava.id} onChange={this.handleInputChange}> { ava.name } </option>
												 )
									}
									</Input>
									<FormFeedback>{errors.microclimate_id}</FormFeedback>
								</Col>
					 		</FormGroup>

                             <FormGroup row >
					 			<Label htmlFor="estimatedDate" md={2} > Fecha estimada </Label>
					 			<Col md={10} >
									<Input type="text" id="estimatedDate" name="estimatedDate" placeholder="Formato AAAA-MM-DD hh:mm:ss, p.ej 2020-06-06 12:30:15" value={this.state.estimatedDate} valid={errors.estimatedDate === ''} invalid={errors.estimatedDate !== ''} onBlur={this.handleBlur('estimatedDate')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.estimatedDate}</FormFeedback>
								</Col>
					 		</FormGroup>
							
							 <Button type="submit" color="primary" 
                             onClick={
                             	(errors.container_id !== ''
                             || errors.microclimate_id !== ''
                             || errors.estimatedDate !== ''
                             || this.state.container_name.length == 0 
                             || this.state.microclimate_name.length == 0) ?
							  () =>
							    alert("no has completado el Formulario") 
                              : () => this.state.addCycle(this.state.container_id,
                                                        this.state.microclimate_id,

														this.state.estimatedDate)
													} >
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


export default FormAddCycle ;