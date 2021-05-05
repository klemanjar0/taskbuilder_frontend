import React, {useEffect, useState} from "react";
import {Button, Card, Col, Container, Form, FormControl, Nav, Navbar, Row, Tab, Tabs} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import * as Icon from 'react-bootstrap-icons';
import {Redirect} from "react-router-dom";
import {fetchLoadFolders} from "../../actions/folder.actions";
import FolderComponent from "./Folder/component";

function MainPageComponent(){

    const user = useSelector((state) => state.user);
    const folders = useSelector((state) => state.folders);
    const tabs = useSelector((state) => state.tabs);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=>{

    },[tabs.currentTab])

    useEffect(()=>{
        try {
            if(isLoading){
                dispatch(fetchLoadFolders(user.user.id));
                setLoading(false)
            }
        } catch (e) {
            setLoading(true)
        }
    }, [])


    return(
            <div style={{width: '94%'}} className='m-auto'>
                <Row>
                    <Col xs={4}>
                            <Card bg="dark" style={{margin: '2rem'}}>
                                <Card.Body>
                                    <h2 style={{marginLeft: '2rem',marginTop: '1rem'}}>Folders</h2>
                                        <div style={{height: '700px', overflowY: 'scroll'}}>
                                            {!isLoading && <div>
                                                {folders.data.map((f)=> <FolderComponent key={f.id} folder={f}/>)}
                                            </div>}
                                        </div>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col xs={8}>
                        <Card bg="dark" style={{margin: '2rem'}}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
    );
}
export default MainPageComponent;
