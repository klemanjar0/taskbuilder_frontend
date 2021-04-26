import React, {useEffect} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../actions/auth.actions";
import {clearUser} from "../../actions/user.actions";

function NavbarComponent(){
    const isAuth = useSelector((state) => !!state.user.user);
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleOut = () => {
        dispatch(clearToken());
        dispatch(clearUser())
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Slither</Navbar.Brand>
                <Nav className="float-right">
                    {
                        isAuth ?
                            <>
                                <Nav.Link className="text-danger" onClick={handleOut}>Sign Out</Nav.Link>
                                <Nav.Link href="/profile">{currentUser.name}</Nav.Link>
                            </>
                            :
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
