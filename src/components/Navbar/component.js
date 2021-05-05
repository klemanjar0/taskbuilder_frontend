import React, {useEffect} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {clearToken} from "../../actions/auth.actions";
import {clearUser} from "../../actions/user.actions";
import {Link} from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';
import {clearStorage} from "../../store/local.store";


function NavbarComponent(){
    const isAuth = useSelector((state) => !!state.user.user);
    const currentUser = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const handleOut = () => {
        dispatch(clearToken());
        dispatch(clearUser());
        clearStorage();
    }

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/" style={{ textDecoration: 'none', color: '#CB636B'}}><b>Naughtify</b></Link></Navbar.Brand>
                <Nav className="float-right">
                    {
                        isAuth ?
                            <>
                                <Nav.Link onClick={handleOut}><Link to="/" style={{ textDecoration: 'none', color: '#D2767D'}}>Sign out</Link></Nav.Link>
                                <Nav.Link><Link to="/profile" style={{ textDecoration: 'none', color: 'white'}}>{currentUser.name}</Link></Nav.Link>
                            </>
                            :
                            <>
                                <Nav.Link><Link to="/signin" style={{ color: 'white'}}>Sign in</Link></Nav.Link>
                                <Nav.Link><Link to="/signup" style={{ color: 'white'}}>Sign up</Link></Nav.Link>
                            </>
                    }
                </Nav>
            </Container>
        </Navbar>
    );
}
export default NavbarComponent;
