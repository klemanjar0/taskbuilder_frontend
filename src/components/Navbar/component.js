import React, {useEffect} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {useSelector} from "react-redux";

function NavbarComponent(){
    const isAuth = useSelector((state) => !!state.user.user);
    const currentUser = useSelector((state) => state.user.user);

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Slither</Navbar.Brand>
                <Nav className="float-right">
                    {
                        isAuth ?
                            <Nav.Link href="/profile">{currentUser.name}</Nav.Link> :
                            <>
                                <Nav.Link href="/signin">Sign In</Nav.Link>
                                <Nav.Link href="/signup">Sign Up</Nav.Link>
                            </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;
