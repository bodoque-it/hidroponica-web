//IMPORTS PARA ESTILO Y COLORES, Y REACT EN SÍ
import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageGradient } from 'material-ui/svg-icons';

//IMPORTS NECESARIOS PARA LOS MENUS EXPANSIVOS
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';

//IMPORTS NECESARIOS PARA LAS TARJETAS
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

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
  }),
);

function Page(props) {

	const {
		suggestions,
	} = props;
	const classes = useStyles();
    return (
        <div >
        	<Ciclos
				//suggestions={suggestions}
			/>
        </div>
    );
}

export default Page;
export function Ciclos(props){

	/*const {
		suggestions,
	} = props;*/
	
	//const isEmpty = suggestions.length === 0;
	const classes = useStyles();
	return(
		<div className={classes.root} >
			<br></br>
			<div className="row">
				<div className="col">
						<CicloPanel/>
						<CicloPanel/>
				</div>
			</div>
			
		</div>	
	)
}
export function CicloPanel(props) {
	/*const {
		containers,
		atr_1,
		atr_2,
	} = props;*/

	const classes = useStyles();
	return(
		<div>
		  <ExpansionPanel className="card-color-gradient">
			<ExpansionPanelSummary
			  expandIcon={<ExpandMoreIcon />}
			  aria-controls="panel1a-content"
			  id="panel1a-header"
			>
			  <Typography className={classes.heading}>19/10/2019 -> 31/10/2019</Typography>
			  <Typography className={classes.secondaryHeading}>nombre_contenedor: nombre_microclima </Typography>
			  <Typography className={classes.secondaryHeading}>nombre_riel</Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<div className="row">
						<div className="col">
							<Ciclo/>
						</div>
					</div>
				</div>
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
export function Ciclo(props) {
	/*const {
		id,
		name,
		volume
	} = props;*/

  	const classes = useStyles();
  	return (
		<Card className="card">
		<CardContent>
			<div className="row">
				<div className="col">
				<Typography className={classes.cardHeader} float="center" color="textSecondary">
					Información detallada
				</Typography>
				</div>
				<div style={{float:'right',paddingRight:'10px'}}> botón gráfico y terminar ciclo</div>
			</div>
			<div>
				<Table className="table-borderless" aria-label="spanning table">
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%"> IMAGEN_TIPO_DE_LUZ </TableCell>
						<TableCell align="center" width="33%">nombre_planta</TableCell>
						<TableCell align="center" width="33%">temperatura [°C]</TableCell>
					</TableRow>
					<TableRow>
						<TableCell rowSpan={2} align="center" width="33%">IMAGEN_TIPO_DE_PLANTA</TableCell>
						<TableCell align="center" width="33%">humedad [H%]</TableCell>
					</TableRow>
					<TableRow>
						<TableCell align="center" width="33%">INTENSIDAD_DE_LUZ</TableCell>
						<TableCell align="center" width="33%">duración [días]</TableCell>
					</TableRow>
				</Table>
			</div>
		</CardContent>
		</Card>
  	);
}
