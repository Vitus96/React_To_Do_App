import React from "react";

//style:
import "../App.css"

// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

// Componentns: 
import Checkbox from "./Checkbox";


function ListForm() {
    return (
        <>
            <div className="list-bar">
                <Container>
                    <Row>
                        <Col>ChB</Col>
                        <Col>Taks</Col>
                        <Col>State</Col>
                        <Col>Responsible person</Col>
                        <Col>Days</Col>
                        <Col>Term</Col>
                    </Row>
                </Container>
            </div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <ListGroup.Item
                            as="li"
                            className="list-item"
                        >
                            <Container>
                                <Row>
                                    <Col>
                                        <div className="form-list-checkbox">
                                            <Checkbox />
                                        </div>
                                    </Col>

                                    <Col>Přezout auto</Col>
                                    <Col>splněno/nesplněno</Col>
                                    <Col>Vít Šimůnek</Col>
                                    <Col>
                                        <Badge bg="primary" pill>21</Badge>
                                    </Col>
                                    <Col>18.05.2025</Col>
                                </Row>


                            </Container>

                        </ListGroup.Item>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>










                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <Badge bg="primary" pill>
                                14
                            </Badge>
                        </ListGroup.Item>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>
                        <ListGroup.Item
                            as="li"
                            className="d-flex justify-content-between align-items-start"
                        >
                            <div className="ms-2 me-auto">
                                <div className="fw-bold">Subheading</div>
                                Cras justo odio
                            </div>
                            <Badge bg="primary" pill>
                                14
                            </Badge>
                        </ListGroup.Item>
                    </Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

            </Accordion>
        </>
    );
};


export default ListForm;