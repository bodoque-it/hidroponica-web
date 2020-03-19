import React from 'react';
import './styles.css';
import { makeStyles } from '@material-ui/core/styles';
//import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '../AppBar'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Contenedor from  './Contenedor_Hidropónico.jpeg';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Popup from "reactjs-popup";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';


function Page(props) {

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
    }

    return (
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
