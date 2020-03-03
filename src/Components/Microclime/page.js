import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageGradient } from 'material-ui/svg-icons';

//imagenes
import blanca from './luz-blanca.png';
import roja from './luz-infraroja.png';
import verde from './luz-verde.png';

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
import DeleteIcon from '@material-ui/icons/Delete';
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
		    {FormRow()}
		</div>
    );
}

function RailCard(Name,TypeOfLight,IntesityOfLight,TypeOfPlant,Temperature,Humidity,Duration) {
    const classes = useStyles();

    return(
        <Card className={"card"}>
            <CardMedia className={"other-card-color-gradient"}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Typography variant="h5">Nombre: {Name}</Typography>
                    </Grid>
                    <Grid item xs={3}>
                        <Button variant="contained" style={{float:"right",background:'#e53935',color:'#fff'}}>
                            Eliminar
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>Tipo de luz:
                            <br/> 
                            <img src={blanca}/>
                            <br/> 
                            {TypeOfLight}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>Plantación:
                            <br/>
                            {TypeOfPlant}
                         </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>T°:
                            <br/> 
                            {Temperature}°C
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>Intensidad de luz:
                            <br/> 
                            {IntesityOfLight}
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>Humedad:
                            <br/> 
                            {Humidity}%
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={"paper"}>Duración:
                            <br/>
                            {Duration} [Días]
                        </Paper>
                    </Grid>
                </Grid>
            </CardContent>
            </CardMedia>
        </Card>
    )
}

function FormRow() {
    const classes = useStyles();
    var tabla = [];
    const microclimas = [
        {
            "name":"Tomate Cherry",
            "typeOfLight":"Natural",
            "intesityOfLight":"Alta",
            "typeOfPlant":"Acelga",
            "temperature":10000000,
            "humidity":600,
            "duration":60000
        },
        {
            "name":"Leshugah",
            "typeOfLight":"verde",
            "intesityOfLight":"normal",
            "typeOfPlant":"Lechugas",
            "temperature":24,
            "humidity":70,
            "duration":30
        },
        {
            "name":"Leshugah",
            "typeOfLight":"verde",
            "intesityOfLight":"normal",
            "typeOfPlant":"Lechugas",
            "temperature":24,
            "humidity":70,
            "duration":30
        }
    ];
    for (var i=0; i<microclimas.length; i+=2){
        if(microclimas[i+1] != null){
            tabla.push(
                <TableRow>
                    <TableCell align="center" width="50%">
                        {RailCard(microclimas[i].Name,microclimas[i].typeOfLight,microclimas[i].intesityOfLight,microclimas[i].typeOfPlant,microclimas[i].temperature,microclimas[i].humidity,microclimas[i].duration)}
                    </TableCell>
                    <TableCell align="center">
                        {RailCard(microclimas[i+1].Name,microclimas[i+1].typeOfLight,microclimas[i+1].intesityOfLight,microclimas[i+1].typeOfPlant,microclimas[i+1].temperature,microclimas[i+1].humidity,microclimas[i+1].duration)}
                    </TableCell>
                </TableRow>
            )
        } else{
            tabla.push(
                <TableRow>
                    <TableCell align="center">
                        {RailCard(microclimas[i].Name,microclimas[i].typeOfLight,microclimas[i].intesityOfLight,microclimas[i].typeOfPlant,microclimas[i].temperature,microclimas[i].humidity,microclimas[i].duration)}
                    </TableCell>
                    <TableCell align="center" width="50%">
                    </TableCell>
                </TableRow>
            )
        }
    }

    return (
    	<Table className="table-borderless" aria-label="spanning table">
            {tabla}
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
