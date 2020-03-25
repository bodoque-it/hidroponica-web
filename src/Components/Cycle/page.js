//IMPORTS PARA ESTILO Y COLORES, Y REACT EN SI
import React, { useState } from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

//imagenes
import blanca from './images/luz-blanca.png';
import roja from './images/luz-infraroja.png';
import verde from './images/luz-verde.png';

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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

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
		available,
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
				available={available}
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
		container,
		microclimate,
		startDate,
		estimatedDate,
		finishDate,
		available,
		deleteCycle,
		updateCycle,
		openModal,
		closeModal,
		open
	} = props;
	const classes = useStyles();
	const handleFullDatetime = datetime => {
        datetime = datetime.split(/[- :]/)
        datetime = datetime[2] + "/" + datetime[1] + "/" + datetime[0] +"  " +  datetime[3] + ":" + datetime[4] + ":" + datetime[5].split(/[.]/)[0]
        return datetime
    }
	const handleDatetime = datetime => {
        datetime = datetime.split(/[- :]/)
        datetime = datetime[3] + ":" + datetime[4] + ":" + datetime[5].split(/[.]/)[0]
        return datetime
    }
	return(
		<div>
		  <ExpansionPanel className="card-color-gradient">
			<ExpansionPanelSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="panel1a-content"
			  id="panel1a-header"
			>
			<div style={{width:"80%"}}>
		  		<Typography className={classes.heading}>Fecha inicio: {handleFullDatetime( startDate)} --> Fecha de terimno estimada: {handleFullDatetime( estimatedDate)}</Typography>
	  		</div>
		  	<div className="row" style={{width:"20%", foat:"right"}}>
		  		<Grid container spacing={0}>
			  		<Grid item xs={6}>
			  			<Fab aria-label="delete" className={classes.fab, classes.add}>
							<DeleteIcon style={{float:"right",background:'#e53935',color:'#fff'}} onClick={ () => deleteCycle(id)} />
						</Fab>
			  		</Grid>
			  		<Grid item xs={6}>
						<Fab aria-label="edit" className={classes.fab, classes.add} >
							<EditIcon color="primary" onClick={openModal} />
						</Fab>
						<Popup  open={open}
								closeOnDocumentClick
								onClose={closeModal} >
							<FormUpdateCycle
									container_id={container.id}
									microclimate_id={microclimate.id}
									startDate={startDate}
									estimatedDate={estimatedDate}
									available={available}
									finishDate={finishDate}
									updateCycle={updateCycle} 
									closeModal={closeModal}
									/>
						</Popup>
					</Grid>
				</Grid>
		  	</div>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<Grid container spacing={1}>
						<Grid item xs={6}>
							<Microclima 
								name={microclimate.name} 
                                intensity={microclimate.intensity}
                                lightType={microclimate.lightType}
                                waterPH={microclimate.waterPH}
                                dailyHours={microclimate.dailyHours}
                                lightStartTime={handleDatetime( microclimate.lightStartTime.date) }
                                temperature={microclimate.temperature}
                                humidity={microclimate.humidity}
							/>
						</Grid>
						<Grid item xs={6}>
							<div style={{margin:'0.4rem'}}>
								<Container
									id={container.id}
									name={container.name}
									volume={container.volume}
								/>
							</div>
						</Grid>
					</Grid>
				</div>
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
export function Container(props) {
	console.log("Container = ");
	console.log(props);
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
				<Typography float="center" color="textSecondary" variant="h5"> 
					Contenedor: { name }
				</Typography>
				</div>
			</div>
			<div>
				<Table className={classes.table} aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> <h6>ID de contenedor</h6> { id } </TableCell>
						<TableCell align="center" width="33%"><h6>ESTADO</h6>  <div className={"text-success"}>En ciclo</div> </TableCell>
						<TableCell align="center" width="33%"><h6>VOLUMEN</h6> { volume } [m3] </TableCell>
					</TableRow>
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}
function LightType(props){
    console.log(props.type);
    if(props.type == "blanca"){
        return (<img src={blanca}/>);
    }else if(props.type == "violeta"){
        return (<img src={roja}/>);
    }else{
        return (<img src={verde}/>);
    }
}
function Microclima( props ) {
	console.log("Microclima = ");
	console.log(props);
    
    return(
        <div style={ { margin: '0.4rem'}} >
            <Card className={"card"}>
                <CardMedia className={"other-card-color-gradient"}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant="h5">Microclima: {props.name}</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Paper className={"paper"}>Tipo de luz:
                                <br/> 
                                <LightType type={props.lightType}/>
                                <br/> 
                                {props.lightType}
                            </Paper>
                        </Grid>
                        <Grid item xs={4} alignItems="center">
                            <Paper className={"paper"}>Intensidad de luz:
                                <div className={"dato"}>
                                    {props.intensity}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container xs={4} spacing={1} style={{padding:"8px"}}>
                            <Grid item xs={12}>
                                <Paper className={"paper"} style={{padding:'0'}}>PH del Agua:
                                    <div className={"dato"}>
                                        {props.waterPH}
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={"paper"}>Humedad:
                                    <div className={"dato"}>
                                        {props.humidity} [%]
                                    </div>
                                </Paper>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Hora comienzo de luz:
                                <br/>
                                <div className={"dato"}>
                                    {props.lightStartTime}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Horas de luz:
                                <br/>
                                <div className={"dato"}>
                                    {props.dailyHours} [Horas]
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={4} style={{paddingRight:"8px !important"}}>
                            <Paper className={"paper"}>Temperatura:
                                <br/>
                                <div className={"dato"}>
                                    {props.temperature} [°C]
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
                </CardMedia>
            </Card>
        </div>
    )
}
export function Ciclos(props){
	const {
		suggestions,
		available,
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
								available={available}
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
							container={suggestion.container}
							microclimate={suggestion.microclimate}
							startDate={suggestion.start_date.date}
							estimatedDate={suggestion.estimated_date.date}
							finishDate={suggestion.finish_date}
							available={available}
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
