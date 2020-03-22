//IMPORTS PARA ESTILO Y COLORES, Y REACT EN SI
import React, { useState } from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

//IMPORTS NECESARIOS PARA LOS MENUS EXPANSIVOS
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// Formulario PopUp
import FormAddRail from './FormAddRail';
import FormUpdateRail from './FormUpdateRail';
import FormAddContainer from './FormAddContainer';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Popup from './Popup/index'
import Popup from "reactjs-popup";
import Button from 'react-bootstrap/Button';


//IMPORTS NECESARIOS PARA LAS TARJETAS
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

//IMPORTS NECESARIOS PARA BOTONES
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

//IMPORTS NECESARIOS PARA LA TABLA DENTRO DE LAS TARJETAS
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ButtonToolbar } from 'react-bootstrap';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
  //Para los menus expansivos de los rieles
    root: {
        width:'100%',
        padding:'50px',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    //Para las tarjetas de los contenedores
    cardHeader:{
	    verticalAlign: 'middle',
    	float:'left',
    	fontSize: 16
    },
    //Para la tabla dentro de las tarjetas
	table: {
		border: 0
	},
	//Para el ícono delete de cada tarjeta
	fab: {
      margin: theme.spacing(1),
	  float:'right',
    },
    //Para los botones agregar
    add:{
    	
    	float:'right',
    	'&:hover': {
		   background: "#28C745",
		},
		padding:'8px',
    }
  }),
);

  
function Page(props) {
	const {
		suggestions,
		deleteRail,
		addRiel,
		updateRiel,
		addModalShow,
		addModalClose,
		addModalOpen,
		openModal,
		closeModal,
		open,
		railSelect
	} = props;
	const classes = useStyles();
    return (
        <div >
        	<Rieles
				suggestions={suggestions}
				deleteRail={deleteRail}
				addRiel={addRiel}
				updateRiel={updateRiel}
				addModalShow={addModalShow}
				addModalClose={addModalClose}
				addModalOpen={addModalOpen}
				openModal={openModal}
				closeModal={closeModal}
				open={open}
				railSelect={railSelect}
			/>
        </div>
    );
}
export default Page;

export function Riel(props) {
	const {
		containers,
		name,
		infrastructure_address,
		id,
		deleteRail,
		updateRiel,
		openModal,
		closeModal,
		open,
		railSelect
	} = props;
	const classes = useStyles();
	return(
		<div>
		  <ExpansionPanel className="card-color-gradient">
			<ExpansionPanelSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="panel1a-content"
			  id="panel1a-header"
			>
			  	<Typography className={classes.heading}>Nombre: {name} </Typography>
			  	<div style={{width:"50%"}}>
			  		<Typography className={classes.secondaryHeading}> Ubicación: {infrastructure_address} </Typography>
		  		</div>
			  	<div className="row" style={{width:"60%", foat:"right"}}>
					<Grid container spacing={0}>
						<Grid item xs={6}>
							<Typography className={classes.heading}> Haga Click en el riel para ver sus contenedores </Typography>
						</Grid>
						<Grid item xs={2}>
							<Fab aria-label="edit" size="small" className={classes.fab} >
								<FormAddContainer
									id_rail={id}
								/>
							</Fab>
						</Grid>
						<Grid item xs={2}>
							<Fab aria-label="delete" color="secondary" size="small" className={classes.fab}>
								<DeleteIcon style={{float:"right"}} onClick={ () => deleteRail(id)} />
							</Fab>
						</Grid>
						<Grid item xs={2}>
							<Fab aria-label="edit" size="small" className={classes.fab} >
								<EditIcon color="primary" onClick={() => openModal(
																			id, name, infrastructure_address
								)} />
							</Fab>
							<Popup  open={open}
									closeOnDocumentClick
									onClose={closeModal} >
								<FormUpdateRail
										id={railSelect.idRail}
										name={railSelect.nameRail}
										infrastructure_address={railSelect.infrastructure_addressRail}
										updateRiel={updateRiel} 
										closeModal={closeModal}
										/>
							</Popup>
						</Grid>
					</Grid>
				</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<div className="row">
						<div className="col">
							<Typography variant="h5" component="h3" className="page-message">
								Contenedores
							</Typography>
							{ <Contenedores
								containers={containers}
							/> }
						</div>
					</div>
				</div>
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
export function RielDesactivado(props) {
	const {
		name,
		infrastructure_address,
	} = props;
		
	const classes = useStyles();
	return(
		<ExpansionPanel disabled>
			<ExpansionPanelSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel3a-content"
			id="panel3a-header"
			>
			<Typography className={classes.heading}> {name} </Typography>
			<Typography className={classes.secondaryHeading}> {infrastructure_address} </Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
  	)
}
export function Rieles(props){
	const {
		suggestions,
		deleteRail,
		addRiel,
		updateRiel,
		addModalShow,
		addModalClose,
		addModalOpen,
		openModal,
		closeModal,
		open,
		railSelect
	} = props;
	
	const isEmpty = suggestions.length === 0;
	const classes = useStyles();
	return(
		<div className={classes.root} >
			<div className="row">
				<div className="col" >
					<label>
					<ButtonToolbar>
						<Button variant="primary"
								onClick={() => addModalOpen() }
						 > Agregar Riel
						</Button>
							<FormAddRail
								addRiel={addRiel}
								show={addModalShow}
								onHide={addModalClose}
							/>
					</ButtonToolbar>
					</label>
				</div>
			</div>
			<br></br>
			<div className="row">
				<div className="col">
				{ isEmpty?
					<Typography variant="h5" component="h3" className="page-message">
						No se encontraron Rieles
					</Typography>
					:
					suggestions.map( suggestion =>
						<Riel
							containers={suggestion.containers}
							name={suggestion.name}
							infrastructure_address={suggestion.infrastructure.address}
							id={suggestion.id}
							deleteRail={deleteRail}
							updateRiel={updateRiel}
							openModal={openModal}
							closeModal={closeModal}
							open={open}
							railSelect={railSelect}
						/>
					)}
				</div>
			</div>
		</div>	
	)
}
export function Contenedores(props){
	const {
		containers,
	} = props;
	const classes = useStyles();
	var tabla = [];
	
	for (var i=0; i<containers.length; i+=2){
		if(containers[i+1] != null){
			tabla.push(
				<TableRow>
					<TableCell align="center" width="50%">
						{ <Contenedor
							id={containers[i].id}
							name={containers[i].name}
							active={containers[i].active}
							volume={containers[i].volume}
						/> }
					</TableCell>
					<TableCell align="center">
						{ <Contenedor
							id={containers[i+1].id}
							name={containers[i+1].name}
							active={containers[i+1].active}
							volume={containers[i+1].volume}
						/> }
					</TableCell>
				</TableRow>
			)
		} else{
			tabla.push(
				<TableRow>
					<TableCell align="center">
						{ <Contenedor
							id={containers[i].id}
							name={containers[i].name}
							active={containers[i].active}
							volume={containers[i].volume}
						/> }
					</TableCell>
					<TableCell align="center" width="50%">
					</TableCell>
				</TableRow>
			)
		}
	}
	return(
		<Table className="table-borderless" aria-label="spanning table">
			{tabla}
		</Table>
	)
}
//EN CONTENEDOR, SE DIFERENCIA EL CONTENEDOR ACTIVO DEL INACTIVO, Y SE LLAMA AL COMPONENTE CORRESPONDIENTE SEGÚN ESE CRITERIO
export function Contenedor(props) {
	const {
		id,
		name,
		active,
		volume,
	} = props;

  	const classes = useStyles();
  	if(active){
  		return (
  			<ContenedorActivo
				id={id}
				name={name}
				volume={volume}
			/>
  		)	
  	} else{
  		return (
  			<ContenedorInactivo
				id={id}
				name={name}
				volume={volume}
			/>
  		)	
  	}
  	
}
export function ContenedorActivo(props) {
	const {
		id,
		name,
		volume,
	} = props;

  	const classes = useStyles();
  	return (
		<Card className="card">
		<CardContent>
			<div className="row">
				<div className="col">
				<Typography className={classes.cardHeader} float="center" color="textSecondary">
					Nombre: { name }
				</Typography>
				</div>
			</div>
			<div>
				<Table className={classes.table} aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> <h6>ID</h6> { id } </TableCell>
						<TableCell align="center" width="33%"><h6>ESTADO</h6>  <div className={"text-success"}>En ciclo</div> </TableCell>
						<TableCell align="center" width="33%"><h6>VOLUMEN</h6> { volume } [m3] </TableCell>
					</TableRow>
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}
export function ContenedorInactivo(props) {
	const {
		id,
		name,
		volume,
	} = props;

  	const classes = useStyles();
  	return (
		<Card className="card">
		<CardContent>
			<div className="row">
				<div className="col">
				<Typography className={classes.cardHeader} float="center" color="textSecondary">
					Nombre: { name }
				</Typography>
				</div>
			</div>
			<div>
				<Table className={classes.table} aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> <h6>ID</h6> { id } </TableCell>
						<TableCell align="center" width="33%"><h6>ESTADO</h6><div className={"text-danger"}> Inactivo </div></TableCell>
						<TableCell align="center" width="33%"><h6>VOLUMEN</h6> { volume } [m3] </TableCell>
					</TableRow>
					
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}
