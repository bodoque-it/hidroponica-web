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
            <Card style={{ width: '30%' }}>
                <Card.Img variant="top" src={Contenedor} />
                <Card.Body>
                    <Card.Title>Name Container</Card.Title>
                    
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem> Volume:       123</ListGroupItem>
                    <ListGroupItem> Active:       1 </ListGroupItem>
                </ListGroup>
                
            </Card>
        );
    }

    return (
        <div className="root">
            {MediaCard()}
        </div>
    );
}

export default Page;
