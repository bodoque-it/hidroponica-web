import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

class FormAddCycle extends Component {
    constructor(props){
        super(props);
        this.state = {
            addCycle : props.addCycle,
            container_id: '',
            microclimate_id: '',
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

	validate(container_id,microclimate_id,startDate,estimatedDate,finishDate){
		const errors = {
            container_id: '',
            microclimate_id: '',
			startDate: '',
            estimatedDate: '',
            finishDate: '',
		};

		if (this.state.touched.container_id && container_id.length <1 ) {
			errors.container_id = 'No has escrito una id valida';
		}
		if (this.state.touched.microclimate_id && microclimate_id.length <1 ) {
			errors.microclimate_id = 'No has escrito una id valida';
        }
        if (this.state.touched.startDate && startDate.length < 8 ) {
			errors.startDate = 'No has escrito una fecha valida';
        }
        if (this.state.touched.estimatedDate && estimatedDate.length < 8 ) {
			errors.estimatedDate = 'No has escrito una fecha valida';
        }
        if (this.state.touched.finishDate && finishDate.length <= 3 ) {
			errors.finishDate = 'No has escrito una fecha valida';
		}
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
		const errors = this.validate(this.state.container_id,this.state.microclimate_id,this.state.startdate,this.state.estimatedDate,this.state.finishDate)
		const isEmpty = this.props.avalaible.container_avalaible.length === 0;
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
					 			<Label htmlFor="container_id" md={2} > ID contenedor </Label>
					 			<Col md={10} >
								 <Input type="select" name="container_id" id="container_id" value={this.state.container_id} onBlur={this.handleBlur('container_id')} onChange={this.handleInputChange} >
									</Input>
									<FormFeedback>{errors.container_id}</FormFeedback>
								</Col>
					 		</FormGroup>

					 		<FormGroup row >
					 			<Label htmlFor="microclimate_id" md={2} > ID microclima </Label>
					 			<Col md={10} >
								 <Input type="select" name="microclimate_id" id="microclimate_id" value={this.state.microclimate_id} onBlur={this.handleBlur('microclimate_id')} onChange={this.handleInputChange} >
									{ isEmpty ?
										<option>""</option>
										:
											this.props.microclimate_id.map( microclimate_id =>
													<option> { microclimate_id } </option>
												 )
									}
									</Input>
									<FormFeedback>{errors.microclimate_id}</FormFeedback>
								</Col>
					 		</FormGroup>

                             {/*<FormGroup row >
					 			<Label htmlFor="startDate" md={2} > Fecha inicio </Label>
					 			<Col md={10} >
									<Input type="text" id="startDate" name="startDate" placeholder="Ingrese la Fecha inicio" value={this.state.startDate} valid={errors.startDate === ''} invalid={errors.startDate !== ''} onBlur={this.handleBlur('startDate')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.startDate}</FormFeedback>
								</Col>
							 </FormGroup>*/}

                             <FormGroup row >
					 			<Label htmlFor="estimatedDate" md={2} > Fecha estimada </Label>
					 			<Col md={10} >
									<Input type="text" id="estimatedDate" name="estimatedDate" placeholder="Ingrese la Fecha estimada" value={this.state.estimatedDate} valid={errors.estimatedDate === ''} invalid={errors.estimatedDate !== ''} onBlur={this.handleBlur('estimatedDate')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.estimatedDate}</FormFeedback>
								</Col>
					 		</FormGroup>

                             {/*<FormGroup row >
					 			<Label htmlFor="finishDate" md={2} > Fecha fin </Label>
					 			<Col md={10} >
									<Input type="text" id="finishDate" name="finishDate" placeholder="Ingrese la Fecha fin" value={this.state.finishDate} valid={errors.finishDate === ''} invalid={errors.finishDate !== ''} onBlur={this.handleBlur('finishDate')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.finishDate}</FormFeedback>
								</Col>
							 </FormGroup>*/}
							
							 <Button type="submit" color="primary" 
                             onClick={  (errors.container_id !== '' || errors.microclimate_id !== '' || errors.startDate !== '' 
                             || errors.estimatedDate !== '' || errors.finishDate !== '' 
                             || this.state.container_id.length == 0 
                             || this.state.microclimate_id.length == 0
                             || this.state.startDate.length == 0
                             || this.state.estimatedDate.length == 0
                             || this.state.finishDate.length == 0 ) ?
							  () =>  alert("no has completado el Formulario") 
                              : () => this.state.addRiel(this.state.container_id,
                                                        this.state.microclimate_id,
                                                        this.state.startdate,
                                                        this.state.estimatedDate,
                                                        this.state.finishDate) } >
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