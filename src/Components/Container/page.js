
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

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//IMPORTS NECESARIOS PARA BOTONES
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

//IMPORTS NECESARIOS PARA LA TABLA DENTRO DE LAS TARJETAS
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { ButtonToolbar } from 'react-bootstrap';

    const useStyles = makeStyles({
        root: {
            maxWidth: 245,
        },
        card: {
            align: 'center',
        },
        media: {
            height: 120,
        },
    });

    function MediaCard() {
        const classes = useStyles();
        return (
            <ListGroup horizontal>
                <ListGroupItem>
                    <Card style={{ width: '20%' }}>
                        <Card.Img variant="top" src={Contenedor} />
                        <Card.Body>
                            <Card.Title>Name Container</Card.Title>
                            
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem> Riel: Riel1</ListGroupItem>
                            <ListGroupItem> Volume:       123</ListGroupItem>
                            <ListGroupItem variant="success"> Activo</ListGroupItem>
                        </ListGroup>
                        
                    </Card>
                </ListGroupItem>
                <ListGroupItem>
                    <Card style={{ width: '20%' }}>
                        <Card.Img variant="top" src={Contenedor} />
                        <Card.Body>
                            <Card.Title>Name Container</Card.Title>
                            
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem> Riel: Riel1</ListGroupItem>
                            <ListGroupItem> Volume:       123</ListGroupItem>
                            <ListGroupItem variant="success"> Activo</ListGroupItem>
                        </ListGroup>
                        
                    </Card>
                </ListGroupItem>
            </ListGroup>
        );
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
        },
    });

        <div className="root">
            
            {Containers()}
        </div>
    );
}
function Containers() {
    var tabla = [];
    return(
        <div className="col-md-4 " style={ { margin: '0.4rem' }} >
            <Card className={"card"}>
                <CardMedia className={"other-card-color-gradient"}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={9}>
                            <Typography variant="h5">Nombre: nombre</Typography>
                        </Grid>

                        <Grid item xs={3}>
                            <Fab aria-label="delete" color="secondary" size="small">
                                <DeleteIcon style={{float:"right",color:'#fff'}}/>
                            </Fab>
                                <Fab aria-label="edit"  size="small">
                                    <EditIcon color="primary" style={{ float:"right"}}/>
                                </Fab>
                        </Grid>

                        <Grid item xs={4}>
                            <Paper className={"paper"}>Tipo de luz:
                                <br/> 
                                asd
                                <br/> 
                                20
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Intensidad de luz:
                                <br/> 
                                20
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>PH del Agua:
                                <br/> 
                                20
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Hora comienzo de luz:
                                <br/> 
                                20
                            </Paper>
                        </Grid>
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Duración:
                                <br/>
                                20 [Horas]
                            </Paper>
                        </Grid>
                    </Grid>
                </CardContent>
                </CardMedia>
            </Card>
        </div>
    )
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