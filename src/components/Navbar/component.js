import React, {useEffect} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";

function NavbarComponent(){
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Slither</Navbar.Brand>
                <Nav className="float-right">
                    <Nav.Link href="/signin">Sign In</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;
