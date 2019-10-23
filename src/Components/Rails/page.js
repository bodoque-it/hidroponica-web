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
    return (
        <div >
        	{Rieles()}
        </div>
    );
}
export default Page;

function Riel(name, location, content) {
	const classes = useStyles();
	return(
		<div>
		  <ExpansionPanel className="card-color-gradient">
			<ExpansionPanelSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="panel1a-content"
			  id="panel1a-header"
			>
			  <Typography className={classes.heading}>{name}</Typography>
			  <Typography className={classes.secondaryHeading}>{location}</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails>
				{Contenedores()}
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
function RielDesactivado(name, location) {
  const classes = useStyles();
  return(
  	<ExpansionPanel disabled>
		<ExpansionPanelSummary
		  expandIcon={<ExpandMoreIcon />}
		  aria-controls="panel3a-content"
		  id="panel3a-header"
		>
		  <Typography className={classes.heading}>{name}</Typography>
		  <Typography className={classes.secondaryHeading}>{location}</Typography>
		</ExpansionPanelSummary>
	</ExpansionPanel>
  )
}
function Rieles(){
	const classes = useStyles();
	return(
		<div className={classes.root} >
			{Riel("Cultivo - Tomate Cherry",
									"Campus Miraflores Edificio 10.000",
									"A este muchacho le pondría unos cuantos rieles")}
			{Riel("Cultivo de Lechugas",
									"Camino a Guacamayo 910, Valdivia",
									"A este otro muchacho le pondría un botón ''AGREGAR NUEVO CONTENEDOR''")}
			{Riel("Buenas frutillitas",
									"Donde tu mami",
									"yo le pondría más color si, no sabría que color ponerle a esto, pero creo que si debe ser un color neutral, el padding se le vé bastante bien eeeh?, modifícalo a tu anotojo")}
			{RielDesactivado("El abrazo M-O-R-T-A-L",
											"Casa de la O-Vega")}
		</div>	
	)
}
function Contenedores(){
	const classes = useStyles();
	return(
		<Table className="table-borderless" aria-label="spanning table">
			<TableRow>
				<TableCell align="center">{Contenedor()}</TableCell>
				<TableCell align="center">{Contenedor()}</TableCell>
			</TableRow>
		</Table>
	)
}
function Contenedor() {
  const classes = useStyles();
  return (
    <Card className="card">
      <CardContent>
      	  <div className="row">
      	  	<div className="col">
		  	  <Typography className={classes.cardHeader} color="textSecondary">
		  	  	Contenedor-01: Frutilla y mermeladits
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
					<TableCell rowSpan={2} align="center" width="33%">Tipo de luz</TableCell>
					<TableCell align="center" width="33%">Frutilla</TableCell>
					<TableCell align="center" width="33%"> 20 [°C]</TableCell>
		  		</TableRow>
		  		<TableRow>
		      		<TableCell rowSpan={2} align="center"> </TableCell>
		  			<TableCell align="center"> 20 [H%]</TableCell>
		  		</TableRow>
		  		<TableRow>
		  			<TableCell align="center"> 200 </TableCell>     		
		  			<TableCell align="center"> restante: 30 días</TableCell>
		  		</TableRow>
			</Table>
		  </div>
      </CardContent>
    </Card>
  );
}


