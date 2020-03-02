import React from 'react';
import './styles.css';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import lechugas from './images/lechugas.jpg';
import zanahorias from './images/zanahorias.jpg';
import tomates from './images/tomates.jpg';

const useStyles = makeStyles((theme) => {
    createStyles({
        card: {
            width: 340,
        },
        media: {
            height: 145,
            width: 80,
        },
        root: {
            flexGrow: 1,
            height:'100%',
            width:'100%',
            padding: '10px',
        },
        paper: {
            textAlign: 'center',
        },
    })
});

export default function Page(props) {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <br/>
            <Grid container spacing={1}>
                <Grid container item xs={10} sm={12} spacing={4}>
                <FormRow />
                </Grid>
            </Grid>
            <br/>
        </div>
      
    );
}


function RailCard(riel,contenedor,plantacion,temperatura,humedad,presion,foto){
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                alt="Lechugas"
                title="Riel - Contenedor"
            />
            <img src={foto} height={225} width={240} sizes/>
            <CardContent>
                <div component="h2">
                    <Typography variant="h5">Riel: {riel}</Typography>
                    <Typography variant="h5">Contenedor: {contenedor}</Typography>
                </div>
                <div variant="body2" color="textSecondary" component="p">
                    <Typography>Plantación: {plantacion}</Typography>
                    <Typography>Ultima temperatura registrada: {temperatura}°C</Typography>
                    <Typography>Último nivel de humedad: {humedad}%</Typography>
                    <Typography>Ultima presión registrada: {presion} atm</Typography>
                </div>
            </CardContent>
            <CardActions>
            <div size="small" color="primary">
                <Button color="primary">Riel</Button>
                <Button color="primary">Contenedor</Button>
                <Button color="primary">Microclima</Button>
                <Button color="primary">Detalles</Button>
            </div>
            </CardActions>
        </Card>
    )
}

function FormRow() {

    const classes = useStyles();

    return (
      <React.Fragment>
        <Grid item xs={4} sm={20}>
          <Paper className={classes.paper} >{RailCard("Vertedero", "Basural-1","Lechugas",17,44,1.014,lechugas)}</Paper>
        </Grid>
        <Grid item xs={4} sm={20}>
          <Paper className={classes.paper} >{RailCard("Vertedero", "Basural-2","Zanahorias",18,45,1.013,zanahorias)}</Paper>
        </Grid>
        <Grid item xs={4} sm={20}>
          <Paper className={classes.paper}>{RailCard("Vertedero", "Basural-3","Tomates",18.5,45,1.0003,tomates)}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

