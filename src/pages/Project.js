import React, { Component } from "react";

//style:
import "../App.css"

// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components: 
import Formtext from "../components/Formtext"
import ButtonForm from "../components/ButtonForm";
import ListForm from "../components/ListForm";


function Project() {
    return (
        <div>
            <Container>
                <Row>
                    <Col><h1>To Do List</h1></Col>
                </Row>

                <Row>
                    <Col><Formtext /></Col>
                </Row>

                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col></Col>
                    <Col><ButtonForm /></Col>
                </Row>

                <Row>
                    <Col><ListForm /></Col>
                </Row>
            </Container>

        </div>
    );
};


export default Project;