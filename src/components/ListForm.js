import React from "react";


// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';

// Componentns: 
import Checkbox from "./Checkbox";
import StateList from "./StateList";
import ButtonFormDelete from "./ButtonFormDelete";
import { AccordionHeader } from "react-bootstrap";


function ListForm() {
    return (
        <div className="listform-container">
            {/* 
    <div>
        <Container>
            <Row>
                <Col></Col>
                <Col>Task</Col>
                <Col>State</Col>
                <Col>Responsible<br />person</Col>
                <Col>Days</Col>
                <Col>Term</Col>
                <Col></Col>
            </Row>

            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Row>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header className="form-list-accordion-header">
                            <ListGroup.Item>

                                <Col className="form-list-container">
                                    <Checkbox />
                                </Col>

                                <Col>Přezout auto</Col>
                                <Col><StateList /></Col>
                                <Col>Vít Šimůnek</Col>
                                <Col>
                                    <Badge bg="primary" pill>21</Badge>
                                </Col>
                                <Col>18.05.2025</Col>
                                <Col><ButtonFormDelete /></Col>


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
                </Row>


            </Accordion>

        </Container>
    </div>
*/}


            {/*
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">

                    <Accordion.Header className="form-list-accordion-header">
                        <ListGroup.Item>

                            <Container>
                                <Row>
                                    <Col className="form-list-container">
                                        <Checkbox />
                                    </Col>

                                    <Col>
                                        <Row>
                                            <p>Task:</p>
                                        </Row>

                                        <Row>
                                            <p>Přezout auto</p>
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Row>
                                            <p>State:</p>
                                        </Row>

                                        <Row>
                                            <StateList />
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Row >
                                            Responsible person:
                                        </Row>

                                        <Row>
                                            <p>Vít Šimůnek</p>
                                        </Row>
                                    </Col>

                                    <Col>
                                        <Badge bg="primary" pill>21</Badge>
                                    </Col>

                                    <Col>18.05.2025</Col>
                                    
                                    <Col><ButtonFormDelete /></Col>
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

            </Accordion>
*/}


            {/*}
            <div className="list-bar">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>Task</Col>
                        <Col>State</Col>
                        <Col>Responsible<br />person</Col>
                        <Col>Days</Col>
                        <Col>Term</Col>
                    </Row>
                </Container>
            </div>
*/}




            <Accordion defaultActiveKey={['0']} alwaysOpen>
                {/*
                <Accordion.Item eventKey="0">

                    <Accordion.Header className="form-list-accordion-header">
                        <ListGroup.Item>

                            <Container>
                                <Row className="list-item">
                                    <Col className="form-list-container">
                                        <Checkbox />
                                    </Col>

                                    <Col className="item item-task">Přezout zimí pneumatiky na letní</Col>
                                    <Col className="item"><StateList /></Col>
                                    <Col className="item"><span>Vít Šimůnek</span></Col>
                                    <Col className="item">
                                        <Badge bg="primary" pill>21</Badge>
                                    </Col>
                                    <Col className="item"><span>18.05.2025</span></Col>
                                    <Col className="item"><ButtonFormDelete /></Col>
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
*/}





                <Accordion.Item eventKey="0">

                    <Accordion.Header className="form-list-accordion-header">
                        <ListGroup.Item>

                            <div className="form-list-container">
                                <div className="form-list-checkbox">
                                    <Checkbox />
                                </div>

                                <div className="item item-task">
                                    <span>Přezout zimí pneumatiky na letní </span>
                                </div>

                                <div className="item-button-delete">
                                    <ButtonFormDelete />
                                </div>
                            </div>

                            <Container>
                                <Row className="list-item">
                                    <Col className="item item-statelist"><StateList /></Col>
                                    <Col className="item"><span>Vít Šimůnek</span></Col>
                                    <Col className="item">
                                        <Badge bg="primary" pill>21</Badge>
                                    </Col>
                                    <Col className="item"><span>18.05.2025</span></Col>
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







                {/*
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
*/}
            </Accordion>
        </div>
    );
};


export default ListForm;