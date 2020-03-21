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
import FormAddCycle from './FormAddCycle';
import FormUpdateCycle from './FormUpdateCycle';
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

const useStyles = makeStyles((theme) =>
  createStyles({
  //Para los menus expansivos de los ciclos
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
		deleteCycle,
		addCycle,
		updateCycle,
		addModalShow,
		addModalClose,
		addModalOpen,
		openModal,
		closeModal,
		open
	} = props;
	const classes = useStyles();
    return (
        <div >
        	<Ciclos
				suggestions={suggestions}
				deleteCycle={deleteCycle}
				addCycle={addCycle}
				updateCycle={updateCycle}
				addModalShow={addModalShow}
				addModalClose={addModalClose}
				addModalOpen={addModalOpen}
				openModal={openModal}
				closeModal={closeModal}
				open={open}
			/>
        </div>
    );
}
export default Page;

export function Cycle(props) {
	const {
		id,
		container_id,
		microclimate_id,
		startDate,
		estimatedDate,
		finishDate,
		deleteCycle,
		updateCycle,
		openModal,
		closeModal,
		open
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
			  <Typography className={classes.heading}>ID: {id}</Typography>
			  <Typography className={classes.secondaryHeading}> 
			  	ID Contenedor: {container_id}
			  	ID Microclima: {microclimate_id}<p/>
				Fecha inicio: {startDate}<p/>
				Fecha estimada: {estimatedDate}<p/>
				Fecha fin: {finishDate}<p/>
			  </Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<div className="row">
						<div className="col" >
								<Fab aria-label="delete" className={classes.fab, classes.add}>
									<DeleteIcon style={{float:"right",background:'#e53935',color:'#fff'}} onClick={ () => deleteCycle(id)} />
								</Fab>
								<Fab aria-label="edit" className={classes.fab, classes.add} >
									<EditIcon color="primary" onClick={openModal} />
								</Fab>
								<Popup  open={open}
										closeOnDocumentClick
										onClose={closeModal} >
									<FormUpdateCycle
											container_id={container_id}
											microclimate_id={microclimate_id}
											startDate={startDate}
											estimatedDate={estimatedDate}
											finishDate={finishDate}
											updateCycle={updateCycle} 
											closeModal={closeModal}
											/>
								</Popup>
						</div>
					</div>
					{/*<div className="row">
						<div className="col">
							{ <Contenedores
								containers={containers}
							/> }
						</div>
							</div>*/}
				</div>
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
/*export function RielDesactivado(props) {
	const {
		name,
		location,
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
			<Typography className={classes.secondaryHeading}> {location} </Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
  	)
}*/
export function Ciclos(props){
	const {
		suggestions,
		deleteCycle,
		addCycle,
		updateCycle,
		addModalShow,
		addModalClose,
		addModalOpen,
		openModal,
		closeModal,
		open
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
						 > Agregar Ciclo
						</Button>
							<FormAddCycle
								addCycle={addCycle}
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
						No se encontraron Ciclos
					</Typography>
					:
					suggestions.map( suggestion =>
						<Cycle
							id={suggestion.id}
							containers={suggestion.containers}
							container_id={suggestion.container_id}
							microclimate_id={suggestion.microclimate_id}
							startDate={suggestion.startDate}
							estimatedDate={suggestion.estimatedDate}
							finishDate={suggestion.finishDate}
							deleteCycle={deleteCycle}
							updateCycle={updateCycle}
							openModal={openModal}
							closeModal={closeModal}
							open={open}
						/>
					)}
				</div>
			</div>
		</div>	
	)
}
/*export function Contenedores(props){
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
							id={containers[i].id_container}
							name={containers[i].name}
							active={containers[i].active}
							volume={containers[i].volume}
						/> }
					</TableCell>
					<TableCell align="center">
						{ <Contenedor
							id={containers[i+1].id_container}
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
							id={containers[i].id_container}
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
					Nombre Contenedor: { name }
				</Typography>
				</div>
				<div className="col-2" >
					<Fab color="secondary" size="small" aria-label="delete" className={classes.fab}>
						<DeleteIcon type="submit" />
					</Fab>
				</div>
			</div>
			<div>
				<Table className={classes.table} aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> <h6>ID</h6> { id } </TableCell>
						<TableCell align="center" width="33%"><h6>ESTADO</h6> ACTIVO </TableCell>
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
					Nombre Contenedor: { name }
				</Typography>
				</div>
				<div className="col-2" >
					<Fab color="secondary" size="small" aria-label="delete" className={classes.fab}>
						<DeleteIcon type="submit"/>
					</Fab>
				</div>
			</div>
			<div>
				<Table className={classes.table} aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> <h6>ID</h6> { id } </TableCell>
						<TableCell align="center" width="33%"><h6>ESTADO</h6> zZzZ </TableCell>
						<TableCell align="center" width="33%"><h6>VOLUMEN</h6> { volume } [m3] </TableCell>
					</TableRow>
					
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}*/
