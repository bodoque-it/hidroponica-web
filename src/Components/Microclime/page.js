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

const useStyles = makeStyles((theme) => {
    createStyles({
        card: {
            width: 340,
            float: 'right',
        },
        media: {
            height: 145,
            width: 80,
        },
        root: {
            flexGrow: 1,
            height:'100%',
            width:'100%',
        },
        paper: {
            textAlign: 'center',
        },
    })
});


export default function Page(props) {

    const classes = useStyles();

    return (
        <div>
            <br/>
            {FormRow()}
            <br/>
        </div>
    );
}

function RailCard(Name,TypeOfLight,IntesityOfLight,TypeOfPlant,Temperature,Humidity,Duration) {
    const classes = useStyles();

    return(
        <Card className={classes.card}>
            <CardMedia className={"other-card-color-gradient"}>
            <CardContent>
                <Grid container spacing={6}>
                    <Grid item xs={6}>
                        <Typography variant="h4">Nombre: {Name}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" style={{float:"right",background:'#e53935',color:'#fff'}}>
                            DELETE THIS
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Tipo de luz: {TypeOfLight}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Intensidad de la luz: {IntesityOfLight}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Plantación: {TypeOfPlant}</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Temperatura: {Temperature}°C</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Humedad: {Humidity}%</Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper>Duración: {Duration}</Paper>
                    </Grid>
                </Grid>
            </CardContent>
            </CardMedia>
        </Card>
    )
}

function FormRow() {
    const classes = useStyles();

    return (
      <React.Fragment>
        <Grid item xs={6} sm={6}>
          <Paper className={classes.paper} >{RailCard("Test-1","Natural","Alta","Acelga",10000000,600,60000)}</Paper>
        </Grid>
        <br/>
        <Grid item xs={6} sm={20}>
          <Paper className={classes.paper} >{RailCard("Test-2","Natural","Alta","Acelga",10000000,600,60000)}</Paper>
        </Grid>
        <br/>
        <Grid item xs={6}  sm={20}>
          <Paper className={classes.paper}>{RailCard("Test-3","Natural","Alta","Acelga",10000000,600,60000)}</Paper>
        </Grid>
      </React.Fragment>
    );
}