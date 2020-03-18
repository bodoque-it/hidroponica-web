
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
import FormAddContainer from './FormAddContainer';
import FormUpdateContainer from './FormUpdateContainer';
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
		deleteContainer,
		addContainer,
		updateContainer,
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
        	<Containers
				suggestions={suggestions}
				deleteContainer={deleteContainer}
				addContainer={addContainer}
				updateContainer={updateContainer}
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

export function Container(props) {
	const {
		name,
		volume,
		id,
		deleteContainer,
		updateContainer,
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
			  <Typography className={classes.heading}>{name}</Typography>
			  <Typography className={classes.secondaryHeading}> Volume: {volume} </Typography>
			</ExpansionPanelSummary>
			<ExpansionPanelDetails style={{display:'block'}}>
				<div>
					<div className="row">
						<div className="col" >
								<Fab aria-label="delete" className={classes.fab, classes.add}>
									<DeleteIcon style={{float:"right",background:'#e53935',color:'#fff'}} onClick={ () => deleteContainer(id)} />
								</Fab>
								<Fab aria-label="edit" className={classes.fab, classes.add} >
									<EditIcon color="primary" onClick={openModal} />
								</Fab>
								<Popup  open={open}
										closeOnDocumentClick
										onClose={closeModal} >
									<FormUpdateContainer
											id={id}
											name={name}
											volume={volume}
											updateContainer={updateContainer} 
											closeModal={closeModal}
											/>
								</Popup>
						</div>
					</div>
				</div>
			</ExpansionPanelDetails>
		  </ExpansionPanel>
		 </div>
	)
}
export function ContainerDesactivado(props) {
	const {
		name,
		volume,
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
			<Typography className={classes.secondaryHeading}> {volume} </Typography>
			</ExpansionPanelSummary>
		</ExpansionPanel>
  	)
}
export function Containers(props){
	const {
		suggestions,
		deleteContainer,
		addContainer,
		updateContainer,
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
						 > Agregar Container
						</Button>
							<FormAddContainer
								addContainer={addContainer}
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
						No se encontraron Containers
					</Typography>
					:
					suggestions.map( suggestion =>
						<Container
							containers={suggestion.containers}
							name={suggestion.name}
							volume={suggestion.volume}
							id={suggestion.id}
							deleteContainer={deleteContainer}
							updateContainer={updateContainer}
							openModal={openModal}
							closeModal={closeModal}
							open={open}
						/>
					)}
				</div>
			</div>
		</div>	
	)
};



//function MediaCard() {
//    const classes = useStyles();
//    return (
//        <Card style={{ width: '30%' }}>
//            <Card.Img variant="top" src={Contenedor} />
//            <Card.Body>
//                <Card.Title>Name Container</Card.Title>
//                
//            </Card.Body>
//            <ListGroup className="list-group-flush">
//                <ListGroupItem> Volume:       123</ListGroupItem>
//                <ListGroupItem> Active:       1 </ListGroupItem>
//            </ListGroup>
//            
//        </Card>
//    );
//}
//
//return (
//    <div className="root">
//        {MediaCard()}
//    </div>
//);
