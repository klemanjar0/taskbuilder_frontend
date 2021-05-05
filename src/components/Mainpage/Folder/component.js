import React, {useEffect} from "react";
import {Button, Tab, Card, Container, Form, FormControl, Nav, Navbar, Row, Col, ButtonGroup} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import {useDispatch} from "react-redux";
import {setActiveTab} from "../../../actions/tab.actions";


const FolderComponent = ({folder}) => {

    const dispatch = useDispatch();

    const handleClick = props => {
        dispatch(setActiveTab({currentTab: folder.id}))
    }
    const handleChangeOver = props => {
        const element = document.getElementById("folder"+folder.id)
        element.classList.add('bg-darker')
    }
    const handleChangeOut = props => {
        const element = document.getElementById("folder"+folder.id)
        element.classList.remove('bg-darker')
    }
    return(
        <div style={{margin: "2rem", color: "#EABFC6"}}>
            <div id={"folder"+folder.id} className="shadow p-3 mb-5 rounded overflow-hidden" onMouseOver={handleChangeOver} onMouseOut={handleChangeOut}>
                <Button variant="dark" className="btn-lg float-left w-50 m-1" onClick={handleClick}>
                    {folder.title}
                </Button>
                <div className="m-1 float-right">
                    <Button className="m-1" variant='dark'>Edit</Button>
                    <Button className="m-1" variant='outline-light'>Delete</Button>
                </div>
            </div>
        </div>
    );
}
export default FolderComponent;
