
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
import FormUpdateContainer from './FormUpdateContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Popup from './Popup/index'
import Popup from "reactjs-popup";


//IMPORTS NECESARIOS PARA LAS TARJETAS
import Typography from '@material-ui/core/Typography';

//IMPORTS NECESARIOS PARA BOTONES
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';

//IMPORTS NECESARIOS PARA LA TABLA DENTRO DE LAS TARJETAS
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) =>
  createStyles({
  //Para los menus expansivos de los containers
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
	//Para el ícono delete de cada tarjeta
	fab: {
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
		deleteContainer,
		updateContainer,
		addModalShow,
		addModalClose,
		addModalOpen,
		openModal,
		closeModal,
		open,
		containerSelect
	} = props;
	const classes = useStyles();
    return (
        <div >
        	<Containers
				suggestions={suggestions}
				deleteContainer={deleteContainer}
				updateContainer={updateContainer}
				addModalShow={addModalShow}
				addModalClose={addModalClose}
				addModalOpen={addModalOpen}
				openModal={openModal}
				closeModal={closeModal}
				open={open}
				containerSelect={containerSelect}
			/>
        </div>
    );
}
export default Page;

export function ContainerTable(props) {
	const {
		name,
		volume,
		id,
		active,
		deleteContainer,
		updateContainer,
		openModal,
		closeModal,
		open,
		containerSelect
	} = props;
	const classes = useStyles();
	return(
		<TableRow class="border-row-container">
			<TableCell>{name}</TableCell>
			<TableCell>{volume}</TableCell>
			<TableCell>{	active 
							? <div className={"text-success"}>En ciclo</div> 
							: <div className={"text-danger"}>Inactivo</div> 
						}</TableCell>
			<TableCell>
				<Grid container spacing={2}>
					<Grid item xs={2}>
						<Fab aria-label="delete" color="secondary" size="small" className={classes.fab}>
							<DeleteIcon style={{float:"right",color:'#fff'}} onClick={ () => deleteContainer(id)} />
						</Fab>
					</Grid>
					<Grid item xs={2}>
						<Fab aria-label="edit" size="small" className={classes.fab} >
							<EditIcon color="primary" onClick={() => openModal( id , name, volume) } />
						</Fab>
						<Popup  open={open}
								closeOnDocumentClick
								onClose={closeModal}>
							<FormUpdateContainer
									id={containerSelect.idContainer}
									name={containerSelect.nameContainer}
									volume={containerSelect.volumeContainer}
									active={active}
									updateContainer={updateContainer} 
									closeModal={closeModal}
									/>
						</Popup>
					</Grid>
					<Grid item xs={8}>
					</Grid>
				</Grid>
			</TableCell>
		</TableRow>
	)
}
export function ContainerDesactivado(props) {
	const {
		name,
		volume,
		active,
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
			<Typography className={classes.secondaryHeading}> {volume}</Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
  	)
}
export function Containers(props){
	const {
		suggestions,
		deleteContainer,
		updateContainer,
		openModal,
		closeModal,
		open,
		containerSelect
	} = props;
	
	const isEmpty = suggestions.length === 0;
	const classes = useStyles();
	console.log("ACTIVE ",suggestions.active)
	return(
		<div className={classes.root} >
			<Table>
				<TableHead>
					<TableRow>
						<TableCell><h5>Nombre</h5></TableCell>
						<TableCell><h5>Volumen</h5></TableCell>
						<TableCell><h5>Actividad</h5></TableCell>
						<TableCell><h5>Opciones</h5></TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{ isEmpty?
						<Typography variant="h5" component="h3" className="page-message">
							No se encontraron Containers
						</Typography>
						:
						suggestions.map( suggestion =>
							<ContainerTable
								containers={suggestion.containers}
								name={suggestion.name}
								volume={suggestion.volume}
								id={suggestion.id}
								active={suggestion.active}
								deleteContainer={deleteContainer}
								updateContainer={updateContainer}
								openModal={openModal}
								closeModal={closeModal}
								open={open}
								containerSelect={containerSelect}
							/>
						)}
				</TableBody>
			</Table>
		</div>	
	)
};