import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import './styles.css';

//  <Nav.Link href="/login">Login</Nav.Link> // 

function Page(props) {
    const {
        title,
    } = props;
    
    return(
        <Navbar expand="lg" bg="success" id="AppBar-general">
            <Navbar.Brand  >{title}</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Form inline className="mr-auto" >
                    <FormControl type="text" placeholder="Escribe Aquí "  />
                    <Button variant="primary"  >Buscar</Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Page;
