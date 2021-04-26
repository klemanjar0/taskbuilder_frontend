import React, {useEffect} from "react";
import {Button, Tab, Card, Container, Form, FormControl, Nav, Navbar, Row, Col} from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
function FolderComponent({folder}){
    return(
        <div style={{margin: "2rem", color: "#EABFC6"}}>
            <Card bg="dark">
                <Card.Header><Icon.ArchiveFill/></Card.Header>
                <div>
                    <h2 className="m-2 float-left">{folder.title}</h2>
                    <Button className="m-2 float-right" variant="outline-light"><Icon.Pencil/></Button>
                </div>
            </Card>
        </div>
    );
}
export default FolderComponent;
