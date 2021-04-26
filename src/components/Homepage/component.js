import React, {useEffect} from "react";
import {Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserError} from "../../actions/user.actions";

function HomepageComponent(){
    const dispatch = useDispatch();

    const heading = {
        fontSize: "3rem",
        margin: '2rem'
    }
    const textMid = {
        fontSize: "2rem",
        margin: '2rem'
    }

    return(
        <Container style={{paddingTop:"3rem", textAlign: 'center'}}>
            <div style={heading}> <b> The simplest way to keep notes </b> </div>
            <div style={textMid}>All your notes, synced on all your devices.</div>

            <div style={{paddingTop: '2rem'}}><Button variant="outline-light">Sign Up Now</Button></div>
        </Container>
    );
}
export default HomepageComponent;
