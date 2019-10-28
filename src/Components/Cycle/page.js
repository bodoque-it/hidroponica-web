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
	return(null)
}
