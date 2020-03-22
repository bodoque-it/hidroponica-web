import React, { Component } from 'react';
import {Modal, ModalHeader,ModalFooter, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';




class FormUpdateMicroclimate extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            updateMicroclimate : props.updateMicroclimate,
            
            id_microclimate : props.id_microclimate,
            name : props.name,
            intensity : props.intensity,
            lightType : props.lightType,
            waterPH : props.waterPH,
            dailyHours : props.dailyHours,
            lightStartTime : props.lightStartTime,
            temperature : props.temperature,
            humidity : props.humidity,

            touched: {
				name: false,
				intensity: false,
				lightType: false,
				waterPH: false,
				dailyHours: false,
                lightStartTime: false,
                temperature: false,
				humidity: false,
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

	validate( name, intensity, waterPH, dailyHours, lightStartTime, temperature, humidity ){
		const errors = {
			name: '',
			intensity: '',
			waterPH: '',
			dailyHours: '',
            lightStartTime: '',
            temperature: '',
			humidity: '',
		};

		const regName = /^[a-zA-Z]{1,10}?([a-zA-Z0-9 _-]{0,15})$/;
		if (this.state.touched.name && !regName.test(name) ) {
			errors.name = 'No has escrito un nombre valido';
		}

		const regIntensity = /^\d*(\.\d{1})?\d{0,1}$/;
		if (this.state.touched.intensity && !regIntensity.test(intensity) ) {
			errors.intensity = 'Intensidad de luz no valida';
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
			errors.lightStartTime = 'Inicio de la luz erróneas, ingresar de la siguiente manera: hh:mm:ss';
        }
        
        const regTemperature = /^\d*(\.\d{1})?\d{0,1}$/;
		if (this.state.touched.temperature && !regTemperature.test(temperature) ) {
			errors.temperature = 'Temperatura mal ingresada';
		}

		const regHumidity = /^\d+$/; 
		if (this.state.touched.humidity && !regHumidity.test(humidity) || humidity>100 || humidity<0 ) {
			errors.humidity = 'Es un porcentaje de humedad';
		}
		return errors;
    }
    
    
 
    render(){
        const errors = this.validate(   this.state.name,
                                        this.state.intensity,
                                        this.state.waterPH,
                                        this.state.dailyHours,
                                        this.state.lightStartTime,
                                        this.state.temperature,
                                        this.state.humidity )
        
        return(
            <div>
                <ModalHeader > Actualizar Microclima </ModalHeader>
                    <Form onSubmit={this.handleSubmit} >
                        <FormGroup row >
                            <Label htmlFor="name" md={3} > Nombre </Label>
                            <Col md={9} >
                                <Input type="text" id="name" name="name" placeholder="Ingrese el nombre" value={this.state.name} defaultValue={this.state.name} valid={errors.name === ''} invalid={errors.name !== ''} onBlur={this.handleBlur('name')} onChange={this.handleInputChange} />
                                <FormFeedback>{errors.name}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="intensity" md={3} > Intensidad de Luz </Label>
                            <Col md={9} >
                                <Input type="text" id="intensity" name="intensity" placeholder="Ingrese la intensidad de Luz" value={this.state.intensity} defaultValue={this.state.intensity} valid={errors.intensity === ''} invalid={errors.intensity !== ''} onBlur={this.handleBlur('intensity')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.intensity}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="lightType" md={3} > Tipo de Luz </Label>
                            <Col md={9} >
                                <Input type="select" name="lightType" id="lightType" value={this.state.lightType} onBlur={this.handleBlur('lightType')} onChange={this.handleInputChange} >
									
                                    <option> blanca </option>
                                    <option> verde </option>
                                    <option> violeta </option>
                                </Input>
                                <FormFeedback>{errors.lightType}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="waterPH" md={3} > PH del Agua </Label>
                            <Col md={9} >
                                <Input type="text" id="waterPH" name="waterPH" placeholder="Ingrese el PH del agua" value={this.state.waterPH} defaultValue={this.state.waterPH} valid={errors.waterPH === ''} invalid={errors.waterPH !== ''} onBlur={this.handleBlur('waterPH')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.waterPH}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="dailyHours" md={3} > Horas Diarias </Label>
                            <Col md={9} >
                                <Input type="text" id="dailyHours" name="dailyHours" placeholder="Ingrese Horas Diarias" value={this.state.dailyHours} defaultValue={this.state.dailyHours} valid={errors.dailyHours === ''} invalid={errors.dailyHours !== ''} onBlur={this.handleBlur('dailyHours')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.dailyHours}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="lightStartTime" md={3} > Hora de inicio(hh:mm:ss) </Label>
                            <Col md={9} >
                                <Input type="text" id="lightStartTime" name="lightStartTime" placeholder="Ingrese la Hora(hh:mm:ss)" value={this.state.lightStartTime} defaultValue={this.state.lightStartTime} valid={errors.lightStartTime === ''} invalid={errors.lightStartTime !== ''} onBlur={this.handleBlur('lightStartTime')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.lightStartTime}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="temperature" md={3} > Temperature </Label>
                            <Col md={9} >
                                <Input type="text" id="temperature" name="temperature" placeholder="Ingrese la temperatura" value={this.state.temperature} defaultValue={this.state.temperature} valid={errors.temperature === ''} invalid={errors.temperature !== ''} onBlur={this.handleBlur('temperature')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.temperature}</FormFeedback>
                            </Col>
                        </FormGroup>

                        <FormGroup row >
                            <Label htmlFor="humidity" md={3} > Humedad </Label>
                            <Col md={9} >
                                <Input type="text" id="humidity" name="humidity" placeholder="Ingrese la Humedad(%)" value={this.state.humidity} defaultValue={this.state.humidity} valid={errors.humidity === ''} invalid={errors.humidity !== ''} onBlur={this.handleBlur('humidity')} onChange={this.handleInputChange}/>
                                <FormFeedback>{errors.humidity}</FormFeedback>
                            </Col>
                        </FormGroup>
                        
                        
                        <Button type="submit" color="primary" 
                        onClick={  (errors.name !== '' ||
                                    errors.intensity !== '' ||
                                    errors.waterPH !== '' ||
                                    errors.dailyHours !== '' ||
                                    errors.lightStartTime !== ''||
                                    errors.temperature !== '' ||
                                    errors.humidity !== ''||
                                    this.state.name.length === 0 ||
                                    this.state.intensity.length === 0 ||
                                    this.state.waterPH.length === 0 ||
                                    this.state.dailyHours.length === 0 ||
                                    this.state.lightStartTime.length === 0 ||
                                    this.state.temperature.length === 0 ||
                                    this.state.humidity.length === 0 
                                    ) ? () =>  alert("no has completado el Formulario") 
                                    : () => this.state.updateMicroclimate(  this.state.id_microclimate,
                                                                            this.state.name,
                                                                            this.state.intensity,
                                                                            this.state.lightType,
                                                                            this.state.waterPH,
                                                                            this.state.dailyHours,
                                                                            this.state.lightStartTime,
                                                                            this.state.temperature,
                                                                            this.state.humidity ) 
                        } >
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

