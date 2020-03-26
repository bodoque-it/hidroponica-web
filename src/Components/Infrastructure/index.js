import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap';

import "./styles.css";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axiosInfrastructuresSuggestions from '../../redux/rootReducer/axiosInfrastructuresSuggestions';
import axiosInfrastructureCreate from '../../redux/rootReducer/axiosInfrastructureCreate';
import axiosInfrastructureDelete from '../../redux/rootReducer/axiosInfrastructureDelete';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


class Infrastructure extends Component{
    componentWillMount(){
        this.props.axiosInfrastructuresSuggestions("");
	}
    constructor(props){
        super(props);
        this.state = {
            open: false,
            address: "",

            touched: {
				address: false,
			}
        };
        
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    addUbicacion( infrastructure_address ){
        this.props.axiosInfrastructureCreate( infrastructure_address );
        setTimeout(function() { 
            this.props.axiosInfrastructuresSuggestions("");
        }.bind(this), 25)
    }

    deleteUbicacion( address ){
        this.props.axiosInfrastructureDelete( address );
        setTimeout(function() { 
            this.props.axiosInfrastructuresSuggestions("");
        }.bind(this), 25)
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

	validate( address ){
		const errors = {
			address: ''
		};
        const regAddress = /^[a-zA-Z]{1,10}?([a-zA-Z0-9 #_-]{0,15})$/;
		if (this.state.touched.address && !regAddress.test(address) ) {
            errors.address = 'No has escrito una ubicación valida';
        }
		
		return errors;
	}
    
    openModal() {
        this.setState({ open: true });
    }
    closeModal() {
        this.setState({ open: false });
        this.setState({ 
            address: '', 
			touched:  {
				address: false
			}
	 	});
    }
    
    render(){
        const errors = this.validate( this.state.address )
        const isEmpty = this.props.infrastructures.length === 0;
        return(
            <div  >
                <button  class="nav-link" onClick= {()=>this.openModal()} style={{ background: '#28a745', border:0}} >
					<span> Infraestuctura </span>
                </button>
                
                    <Modal className="custom-modal-style" isOpen={this.state.open}  size="xl"  >
                        <ModalHeader > Ubicaciones </ModalHeader  >
                            <ModalBody className="panel" style={{borderBottom:"1% solid"}} align="center">
                                <Table style={{background:"#5cb85c", width:"90%"}}>
                                    <TableBody>
                                        { isEmpty ?
                                            <Typography > No hay Ubicaciones Disponibles </Typography>
                                            : this.props.infrastructures.map( infrastructure =>
                                                <TableRow>
                                                    <TableCell>{infrastructure.address}</TableCell>
                                                    <TableCell>
                                                        <Fab aria-label="delete" color="secondary" size="small" className="fab">
                                                            <DeleteIcon style={{float:"right",color:'#fff'}} onClick= { ()=> this.deleteUbicacion( infrastructure.address )} />
                                                        </Fab>
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        }
                                    </TableBody>
                                </Table>
                            </ModalBody>
                        <ModalHeader > Formulario para añadir una Ubicación </ModalHeader  >

                            <ModalBody>
                                <Form onSubmit={this.handleSubmit} >
                                    <FormGroup row >
                                    <Label htmlFor="address" md={2} > Ubicación </Label>
                                    <Col md={5} >
                                        <Input type="text" id="address" name="address" placeholder="Ingrese la Nueva ubicación" value={this.state.address} valid={errors.address === ''} invalid={errors.address !== ''} onBlur={this.handleBlur('address')} onChange={this.handleInputChange} />
                                        <FormFeedback>{errors.address}</FormFeedback>
                                    </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>

                        <ModalFooter>
                        <Button type="submit" color="primary" 
							 onClick={  (errors.address !== '' || this.state.address.length === 0  ) ?
							  () =>  alert("no has completado el Formulario") 
							  : () => this.addUbicacion( this.state.address ) } >
					 			Agregar Ubicación
					 		</Button>
                        <Button color="danger" onClick={ this.closeModal } > Cancelar </Button>
                        </ModalFooter>
                    </Modal>
                
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
    axiosInfrastructureCreate,
    axiosInfrastructureDelete,
};

export default withRouter(connect( mapStateToProps, mapDispatchToProps)(Infrastructure));