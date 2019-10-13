import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ImageGradient } from 'material-ui/svg-icons';

const useStyles = makeStyles((theme) =>
  createStyles({
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

function SimpleExpansionPanel(name, location, content) {
  const classes = useStyles();
	return(
		<div>
		  <ExpansionPanel>
		    <ExpansionPanelSummary
		      expandIcon={<ExpandMoreIcon />}
		      aria-controls="panel1a-content"
		      id="panel1a-header"
		    >
		      <Typography className={classes.heading}>{name}</Typography>
		      <Typography className={classes.secondaryHeading}>{location}</Typography>
		    </ExpansionPanelSummary>
		    <ExpansionPanelDetails>
		      <Typography>
		        {content}
		      </Typography>
		    </ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
function SimpleExpansionPanelDisabled(name, location) {
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
			{SimpleExpansionPanel("Cultivo - Tomate Cherry",
									"Campus Miraflores Edificio 10.000",
									"A este muchacho le pondría unos cuantos rieles")}
			{SimpleExpansionPanel("Cultivo de Lechugas",
									"Camino a Guacamayo 910, Valdivia",
									"A este otro muchacho le pondría un botón ''AGREGAR NUEVO CONTENEDOR''")}
			{SimpleExpansionPanel("Buenas frutillitas",
									"Donde tu mami",
									"yo le pondría más color si, no sabría que color ponerle a esto, pero creo que si debe ser un color neutral, el padding se le vé bastante bien eeeh?, modifícalo a tu anotojo")}
			{SimpleExpansionPanelDisabled("El abrazo M-O-R-T-A-L",
											"Casa de la O-Vega")}
		</div>	
	)
}

