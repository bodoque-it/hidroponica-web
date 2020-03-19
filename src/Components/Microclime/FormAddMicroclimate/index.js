import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
import {Modal} from 'react-bootstrap';

class FormAddMicroclimate extends Component {
    constructor(props){
        super(props);
        this.state = {
			addMicroclimate : props.addMicroclimate,

			name: '',
			intensity: '',
			lightType: '',
			waterPH: '',
			dailyHours: '',
			lightStartTime: '',

			touched: {
				name: false,
				intensity: false,
				lightType: false,
				waterPH: false,
				dailyHours: false,
				lightStartTime: false,
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

	validate( name, intensity, lightType, waterPH, dailyHours, lightStartTime ){
		const errors = {
			name: '',
			intensity: '',
			lightType: '',
			waterPH: '',
			dailyHours: '',
			lightStartTime: '',
		};

		if (this.state.touched.name && name.length < 1 ) {
			errors.name = 'No has escrito un nombre valido';
		}

		const regIntensity = /^\d*(\.\d{1})?\d{0,1}$/;
		if (this.state.touched.intensity && !regIntensity.test(intensity) ) {
			errors.intensity = 'Intensidad de luz no valida';
		}
		if (this.state.touched.lightType && lightType.length < 1 ) {
			errors.lightType = 'No has escrito un tipo de luz valida';
		}

		const regWaterPH = /^\d*(\.\d{1})?\d{0,1}$/;
		if (this.state.touched.waterPH && !regWaterPH.test(waterPH) ) {
			errors.waterPH = 'PH del agua no valida';
		}

		const regDailyHours = /^\d+$/;
		if (this.state.touched.dailyHours && !regDailyHours.test(dailyHours) ) {
			errors.dailyHours = 'Horas diarias mal ingresadas';
		}

		const regLightStartTime = /^(([01][0-9]|2[0-3]):([012345][0-9]):([012345][0-9]))$/i; 
		if (this.state.touched.lightStartTime && !regLightStartTime.test(lightStartTime) ) {
			errors.lightStartTime = 'Inicio de la luz erróneas, Debe ser así: hh:mm:ss';
		}
		return errors;
	}

	closeAndClear(){
		this.props.onHide();
		this.setState({ 
			name: '',
			intensity: '',
			lightType: '',
			waterPH: '',
			dailyHours: '',
			lightStartTime: '',

			touched: {
				name: false,
				intensity: false,
				lightType: false,
				waterPH: false,
				dailyHours: false,
				lightStartTime: false,
			}
	 	});
	}

    render(){
		const errors = this.validate( this.state.name, this.state.intensity, this.state.lightType, this.state.waterPH, this.state.dailyHours, this.state.lightStartTime )
		
        return(
			<Modal
			{...this.props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
			style={{paddingTop:'45px'}}
			>
				<Modal.Header >
					<Modal.Title id="contained-modal-title-vcenter">
					Agregar Microclima
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
					 			<Label htmlFor="intensity" md={2} > Intensidad de Luz </Label>
					 			<Col md={10} >
									<Input type="text" id="intensity" name="intensity" placeholder="Ingrese la intensidad de Luz" value={this.state.intensity} valid={errors.intensity === ''} invalid={errors.intensity !== ''} onBlur={this.handleBlur('intensity')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.intensity}</FormFeedback>
								</Col>
					 		</FormGroup>

							 <FormGroup row >
					 			<Label htmlFor="lightType" md={2} > Tipo de Luz </Label>
					 			<Col md={10} >
									<Input type="text" id="lightType" name="lightType" placeholder="Ingrese el Tipo de Luz" value={this.state.lightType} valid={errors.lightType === ''} invalid={errors.lightType !== ''} onBlur={this.handleBlur('lightType')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.lightType}</FormFeedback>
								</Col>
					 		</FormGroup>

							 <FormGroup row >
					 			<Label htmlFor="waterPH" md={2} > PH del Agua </Label>
					 			<Col md={10} >
									<Input type="text" id="waterPH" name="waterPH" placeholder="Ingrese el PH del agua" value={this.state.waterPH} valid={errors.waterPH === ''} invalid={errors.waterPH !== ''} onBlur={this.handleBlur('waterPH')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.waterPH}</FormFeedback>
								</Col>
					 		</FormGroup>

							 <FormGroup row >
					 			<Label htmlFor="dailyHours" md={2} > Horas Diarias </Label>
					 			<Col md={10} >
									<Input type="text" id="dailyHours" name="dailyHours" placeholder="Ingrese Horas Diarias" value={this.state.dailyHours} valid={errors.dailyHours === ''} invalid={errors.dailyHours !== ''} onBlur={this.handleBlur('dailyHours')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.dailyHours}</FormFeedback>
								</Col>
					 		</FormGroup>

							 <FormGroup row >
					 			<Label htmlFor="lightStartTime" md={2} > Hora de inicio(hh:mm:ss) </Label>
					 			<Col md={10} >
									<Input type="text" id="lightStartTime" name="lightStartTime" placeholder="Ingrese la Hora ( hh:mm:ss )" value={this.state.lightStartTime} valid={errors.lightStartTime === ''} invalid={errors.lightStartTime !== ''} onBlur={this.handleBlur('lightStartTime')} onChange={this.handleInputChange}/>
									<FormFeedback>{errors.lightStartTime}</FormFeedback>
								</Col>
					 		</FormGroup>
							
							 <Button type="submit" color="primary" 
							onClick={  (errors.name !== '' ||
										errors.intensity !== '' ||
										errors.lightType !== '' ||
										errors.waterPH !== '' ||
										errors.dailyHours !== '' ||
										errors.lightStartTime !== ''||
										this.state.name.length === 0 ||
										this.state.intensity.length === 0 ||
										this.state.lightType.length === 0 ||
										this.state.waterPH.length === 0 ||
										this.state.dailyHours.length === 0 ||
										this.state.lightStartTime.length === 0 
										) ? () =>  alert("no has completado el Formulario") 
										: () => this.state.addMicroclimate( this.state.name, this.state.intensity ,this.state.lightType, this.state.waterPH, this.state.dailyHours, this.state.lightStartTime ) 
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


export default FormAddMicroclimate ;