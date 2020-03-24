import React, { Component } from 'react';
import {Modal, ModalHeader,ModalFooter, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';
// import {} from 'react-bootstrap';



class FormUpdateCycle extends Component {
    constructor(props){
        super(props);
        this.container_idInput = React.createRef(); 
        this.microclimate_idInput = React.createRef();
        this.estimatedDateInput = React.createRef();
        this.state = {
            container_id: props.container_id,
            microclimate_id: props.microclimate_id,
            estimatedDate: props.estimatedDate,
            updateCycle: props.updateCycle,

            touched: {
				container_id: false,
                microclimate_id: false,
                estimatedDate: false,
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

	validate(container_id,microclimate_id,startDate,estimatedDate,finishDate){
		const errors = {
            container_id: '',
            microclimate_id: '',
            estimatedDate: '',
		};

		if (this.state.touched.container_id && container_id.length <1 ) {
			errors.container_id = 'No has escrito una id valida';
		}
		if (this.state.touched.microclimate_id && microclimate_id.length <1 ) {
			errors.microclimate_id = 'No has escrito una id valida';
        }
        if (this.state.touched.estimatedDate && estimatedDate.length < 8 ) {
			errors.estimatedDate = 'No has escrito una fecha valida';
        }
		return errors;
	}
    
    
 
    render(){
        const errors = this.validate(this.state.container_id,this.state.microclimate_id,this.state.estimated_date)
        return(
            <div>
            <ModalHeader > Actualizar Ciclo </ModalHeader>
            <Form onSubmit={this.handleSubmit} >
					 		<FormGroup row >
					 			<Label htmlFor="container_id" md={2} > ID contenedor </Label>
					 			<Col md={10} >
									<Input type="text" id="container_id" name="container_id" placeholder="Ingrese la id del container asociado" value={this.state.container_id} valid={errors.container_id === ''} invalid={errors.container_id !== ''} onBlur={this.handleBlur('container_id')} onChange={this.handleInputChange} />
									<FormFeedback>{errors.container_id}</FormFeedback>
								</Col>
					 		</FormGroup>

					 		<FormGroup row >
					 			<Label htmlFor="microclimate_id" md={2} > ID microclima </Label>
					 			<Col md={10} >
									<Input type="text" id="microclimate_id" name="microclimate_id" placeholder="Ingrese la ID microclima" value={this.state.microclimate_id} valid={errors.microclimate_id === ''} invalid={errors.microclimate_id !== ''} onBlur={this.handleBlur('microclimate_id')} onChange={this.handleInputChange}/>
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
                             onClick={  (errors.container_id !== '' || errors.microclimate_id !== ''
                             || errors.estimatedDate !== ''  
                             || this.state.container_id.length == 0 
                             || this.state.microclimate_id.length == 0
							 || this.state.estimatedDate.length == 0
							 ) ?
							  () =>  alert("no has completado el Formulario") 
                                 : () => this.state.updateCycle(this.state.container_id,
                                                                this.state.microclimate_id,
                                                                this.state.estimatedDate
                                 ) } >
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


export default FormUpdateCycle ;


