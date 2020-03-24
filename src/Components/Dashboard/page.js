import React from 'react';
import styles from './styles.css';
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
//imports para gráfico
import { render } from "react-dom";
import { Chart } from "react-google-charts";

const useStyles = makeStyles((theme) => {
    createStyles({
    })
});

export default function Page(props) {
    const data = props.suggestions;
    console.log("activos_container = ", data.active_container);
    return (
        <div className={"root"} align="center">
            <h3>Contadores y gráficos</h3>
            <br/>
            <div style={{border:' #5cb85c 0.1em solid'}}>
                <GraficoDona
                    activos = {data.active_container}
                    inactivos = {data.inactivate_container}
                />
            </div>
            <br/>
            <div style={{border:' #5cb85c 0.1em solid'}}>
                <GraficoColumna
                    rieles = {data.rails_quantity}
                    ciclos = {data.cycle_not_finish}
                    microclimas = {data.microclimate_quantity}
                />
            </div>
            <br/>
        </div>
      
    );
}


function RailCard(riel,contenedor,plantacion,temperatura,humedad,presion,foto){


    return(
        <Card className={"card"}>
            <CardMedia
            	className={"media"}
                alt="Lechugas"
                title="Riel - Contenedor"
            />
            <img src={foto} className={"image"}/>
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

function GraficoDona(props) {
    const data = [
        ["contenedores", "contador"],
        ["Activos", props.activos],
        ["Inactivos", props.inactivos],
    ];
    const options = {
        title: "Contenedores",
        pieHole: 0.4,
        is3D: false,
        pieSliceText: 'label',
    };
    return (
        <div>
            <Chart
                chartType="PieChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

function GraficoColumna(props){
    const data = [
        ["Element", "Cantidad", { role: "style" }],
        ["Rieles", props.rieles, "#5555ff"],
        ["Ciclos activos", props.ciclos, "#28a745"], // RGB value
        ["Microclimas", props.microclimas, "#99ffff"], // English color name
    ];
    const options = {
        title: "Contenedores, microclmas y rieles",
        legend: { position: 'none' },
    };
    return (
        <div>
            <Chart
                chartType="ColumnChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
}

function FormRow() {

    const classes = useStyles();

    return (
      <React.Fragment>
        <Grid item xs={4} sm={20}>
          <Paper className={"paper"} >{RailCard("Vertedero", "Basural-1","Lechugas",17,44,1.014,lechugas)}</Paper>
        </Grid>
        <Grid item xs={4} sm={20}>
          <Paper className={"paper"} >{RailCard("Vertedero", "Basural-2","Zanahorias",18,45,1.013,zanahorias)}</Paper>
        </Grid>
        <Grid item xs={4} sm={20}>
          <Paper className={"paper"}>{RailCard("Vertedero", "Basural-3","Tomates",18.5,45,1.0003,tomates)}</Paper>
        </Grid>
      </React.Fragment>
    );
  }

