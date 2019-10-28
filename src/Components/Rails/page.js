//IMPORTS PARA ESTILO Y COLORES, Y REACT EN SI
import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageGradient } from 'material-ui/svg-icons';

//IMPORTS NECESARIOS PARA LOS MENUS EXPANSIVOS
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


//IMPORTS NECESARIOS PARA LAS TARJETAS
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

//IMPORTS NECESARIOS PARA BOTONES
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

//IMPORTS NECESARIOS PARA LA TABLA DENTRO DE LAS TARJETAS
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
    	backgroundColor: '#28a745',
    	float:'right',
    	'&:hover': {
		   background: "#28C745",
		},
    }
  }),
);

  
function Page(props) {
	const {
		suggestions,
	} = props;
	const classes = useStyles();
    return (
        <div >
        	<Rieles
				suggestions={suggestions}
			/>
        </div>
    );
}
export default Page;

export function Riel(props) {
	const {
		containers,
		atr_1,
		atr_2,
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
			  <Typography className={classes.heading}>{atr_1}</Typography>
			  <Typography className={classes.secondaryHeading}> Ubicación: {atr_2} </Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<div className="row">
						<div className="col">
							<Fab aria-label="add" className={classes.fab, classes.add}>
								<AddIcon />
							</Fab>
						</div>
					</div>
					<div className="row">
						<div className="col">
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
		atr_1,
		atr_2,
	} = props;
		
	const classes = useStyles();
	return(
		<ExpansionPanel disabled>
			<ExpansionPanelSummary
			expandIcon={<ExpandMoreIcon />}
			aria-controls="panel3a-content"
			id="panel3a-header"
			>
			<Typography className={classes.heading}> {atr_1} </Typography>
			<Typography className={classes.secondaryHeading}> {atr_2} </Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
  	)
}
export function Rieles(props){
	const {
		suggestions,
	} = props;
	
	const isEmpty = suggestions.length === 0;
	const classes = useStyles();
	
	return(
		<div className={classes.root} >
			<div className="row">
				<div className="col">
					<Fab aria-label="add" className={classes.fab, classes.add}>
						<AddIcon />
					</Fab>
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
							atr_1={suggestion.name}
							atr_2={suggestion.location}
						/>
					)}
				</div>
			</div>
		</div>	
	)
}
export function Contenedores(props){
	const {
		containers
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
		volume
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
		volume
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
				<div className="col-2">
					<Fab color="secondary" size="small" aria-label="delete" className={classes.fab}>
						<DeleteIcon />
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
		volume
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
				<div className="col-2">
					<Fab color="secondary" size="small" aria-label="delete" className={classes.fab}>
						<DeleteIcon />
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
}
