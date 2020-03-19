import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageGradient } from 'material-ui/svg-icons';

//imagenes
import blanca from './images/luz-blanca.png';
import roja from './images/luz-infraroja.png';
import verde from './images/luz-verde.png';

import FormAddMicroclimate from './FormAddMicroclimate';
import FormUpdateMicroclimate from './FormUpdateMicroclimate';

import Popup from "reactjs-popup";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

//IMPORTS NECESARIOS PARA BOTONES
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => {
    createStyles({
        fab: {
		  margin: theme.spacing(1),
		  float:'right',
		}
    })
});


export default function Page(props) {

    const classes = useStyles();

    return (
		<div className="root">
		    <FormRow
                suggestions={props.suggestions}
                addMicroclimate={props.addMicroclimate}
                updateMicroclimate={props.updateMicroclimate}
                deleteMicroclimate={props.deleteMicroclimate}
                addModalShow={props.addModalShow}
                addModalClose={props.addModalClose}
                addModalOpen={props.addModalOpen}
                openModal={props.openModal}
                closeModal={props.closeModal}
                open={props.open}
                microclimateSelect={props.microclimateSelect}
            />
		</div>
    );
}

function RailCard( props ) {

    return(
        <div className="col-sm-5" style={ { margin: '0.4rem' }} >
            <Card className={"card"}>
                <CardMedia className={"other-card-color-gradient"}>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={8}>
                            <Typography variant="h6">Nombre: {props.name}</Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Fab aria-label="delete" color="secondary" size="small">
                                        <DeleteIcon style={{float:"right",color:'#fff'}} onClick={ () => props.deleteMicroclimate(props.id_microclimate)} />
                                    </Fab>
                                </Grid>
                                <Grid item xs={6}>
        							<Fab aria-label="edit" size="small">
                                        <EditIcon color="primary" style={{ float:"right" }} onClick={() => props.openModal(     props.id_microclimate,
                                                                                                                                props.name, 
                                                                                                                                props.intensity, 
                                                                                                                                props.lightType,
                                                                                                                                props.waterPH,
                                                                                                                                props.dailyHours,
                                                                                                                                props.lightStartTime)} />
        							</Fab>
        							<Popup  open={props.open}
        									closeOnDocumentClick
        									onClose={props.closeModal} >
        								<FormUpdateMicroclimate
        										id_microclimate={props.microclimateSelect.idMicroclimate}
                                                name={props.microclimateSelect.nameMicroclimate}
                                                intensity={props.microclimateSelect.intensityMicroclimate}
                                                lightType={props.microclimateSelect.lightTypeMicroclimate}
                                                waterPH={props.microclimateSelect.waterPHMicroclimate}
                                                dailyHours={props.microclimateSelect.dailyHoursMicroclimate}
                                                lightStartTime={props.microclimateSelect.lightStartTimeMicroclimate}
                                                
                                                updateMicroclimate={props.updateMicroclimate} 
        										closeModal={props.closeModal}
        										/>
        							</Popup>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={4}>
                            <Paper className={"paper"}>Tipo de luz:
                                <br/> 
                                <img src={blanca}/>
                                <br/> 
                                {props.lightType}
                            </Paper>
                        </Grid>
                        <Grid item xs={4} alignItems="center">
                            <Paper className={"paper"}>Intensidad de luz:
                                <br/>
                                <div className={"dato"}>
                                    {props.intensity}
                                </div>
                            </Paper>
                        </Grid>
                        <Grid container xs={4} spacing={1}>
                            <Grid item xs={12} >
                                <Paper className={"paper"} style={{padding:'0'}}>PH del Agua:
                                    <br/> 
                                    <div className={"dato"}>
                                        {props.waterPH}
                                    </div>
                                </Paper>
                            </Grid>
                            <Grid item xs={12}>
                                <Paper className={"paper"} style={{padding:'0'}}>Humedad:
                                    <br/> 
                                    <div className={"dato"}>
                                        50 [%]
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
                        <Grid item xs={4}>
                            <Paper className={"paper"}>Temperatura:
                                <br/>
                                <div className={"dato"}>
                                    24 [°C]
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

function FormRow(props) {
    const isEmpty = props.suggestions.length === 0;
    
    var tabla = [];
    if (!isEmpty){
        props.suggestions.map( (suggestion) =>
            tabla.push(
                
                    <RailCard   name={suggestion.name} 
                                intensity={suggestion.intensity}
                                lightType={suggestion.lightType}
                                waterPH={suggestion.waterPH}
                                dailyHours={suggestion.dailyHours}
                                lightStartTime={suggestion.lightStartTime.date}
                                id_microclimate={suggestion.id}

                                deleteMicroclimate={props.deleteMicroclimate}
                                updateMicroclimate={props.updateMicroclimate}
                                openModal={props.openModal}
                                closeModal={props.closeModal}
                                open={props.open}
                                microclimateSelect={props.microclimateSelect}
                                />
                
            )
        )
    }                    
    return (
        <Table className="table-borderless" aria-label="spanning table">
            <div>  
                <Button variant="contained" color="primary" style={{float:"left"}} onClick={ () => props.addModalOpen() } >
                    Agregar Microclima
                </Button>
                    <FormAddMicroclimate
                        addMicroclimate={props.addMicroclimate}
                        show={props.addModalShow}
                        onHide={props.addModalClose}
                    />
            </div>
            <div className="container-fluid d-flex justify-content-center " >
                <div className="row justify-content-md-center" >
                    {tabla}
                </div>
            </div>
        </Table>
    );
}

//SIN USO ----->> GUARDAR SOLO POR SI ACASO
function MicroclimeCol(){
    const classes = useStyles();

    return(
        <div className="col">
            <React.Fragment>
                <Grid>
                    <Paper className={"paper"} >{RailCard("Tomate Cherry","Natural","Alta","Acelga",10000000,600,60000)}</Paper>
                </Grid>
            </React.Fragment>
        </div>
    );
}
