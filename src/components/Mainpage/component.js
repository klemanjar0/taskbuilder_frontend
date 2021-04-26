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

    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();


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
            <>
                <Row>
                    <Col>
                            <Card bg="dark" style={{margin: '2rem'}}>
                                <Card.Body>
                                    <Tabs variant="light" defaultActiveKey="folders" id="uncontrolled-tab-example">
                                        <Tab eventKey="folders" title="Folders">
                                            {!isLoading && <div>
                                                {folders.data.map((f)=> <FolderComponent key={f.id} folder={f}/>)}
                                            </div>}
                                        </Tab>
                                        <Tab eventKey="tags" title="Tags">

                                        </Tab>
                                        <Tab eventKey="custom" title="Custom">

                                        </Tab>
                                    </Tabs>
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" style={{margin: '2rem'}}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card bg="dark" style={{margin: '2rem'}}>
                            <Card.Body>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>
    );
}
export default MainPageComponent;
