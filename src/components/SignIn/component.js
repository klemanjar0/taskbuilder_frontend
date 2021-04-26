import React, {useEffect, useState} from "react";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchLogin} from "../../actions/auth.actions";
import {fetchUser} from "../../actions/user.actions";

function SignInComponent(){
    const isAuth = useSelector((state) => !!state.user.user);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    const loginUser = () => {
        dispatch(fetchLogin({login: user.email, password: user.password}));
    }
    const handleSubmit = (event) => {
        event.preventDefault()

    };
    if (isAuth) {
        return (<Redirect to="/"/>);
    }
    return(
        <div style={{paddingTop: "4rem"}}>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={(event) => {
                            setUser(
                                (prevState) => {
                                    return {...prevState, email: event.target.value}
                                }
                            )
                        }}/>
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={(event) => {
                            setUser(
                                (prevState) => {
                                    return {...prevState, password: event.target.value}
                                }
                            )
                        }}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" className="float-right mt-5" type="submit" onClick={loginUser}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
export default SignInComponent;
