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
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

//IMPORTS NECESARIOS PARA LA TABLA DENTRO DE LAS TARJETAS
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) =>
  createStyles({
  //Para los menus expansivos de los rieles
    root: {
        height:'100%',
        width:'100%',
        padding:'170px',
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
  }),
);

  
function Page(props) {
	const {
		suggestions,
	} = props;
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
			<ExpansionPanelDetails>
				{ <Contenedores
					containers={containers}
				/> 
				}
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
	)
}
export function Contenedores(props){
	const {
		containers
	} = props;

	const classes = useStyles();
	return(
		<Table className="table-borderless" aria-label="spanning table">
			<TableRow>
				{ containers.map( container =>
					<TableCell align="center">
						{ <Contenedor
							id={container.id_container}
							name={container.name}
							active={container.active}
							volume={container.volume}
						/> }
					</TableCell>
				)}
			</TableRow>
		</Table>
	)
}
export function Contenedor(props) {
	const {
		id,
		name,
		active,
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
						<TableCell rowSpan={2} align="center" width="33%"> id: { id } </TableCell>
						<TableCell align="center" width="33%"> Esta activado?: { active } </TableCell>
						<TableCell align="center" width="33%"> Volumen: { volume } </TableCell>
					</TableRow>
					
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}


