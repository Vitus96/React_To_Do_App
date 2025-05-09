import React, { useState } from "react";
//import React from "react";
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
//import { AccordionHeader } from "react-bootstrap";


/*
function ListForm({ data, onToggle }) {
    return (
        <div>
            {data.map((item, index) => (
                <div className="listform-container">

                    <Accordion key={index} defaultActiveKey={['0']} alwaysOpen>

                        <Accordion.Item eventKey="0">

                            <Accordion.Header className="form-list-accordion-header">
                                <ListGroup.Item>

                                    <div className="form-list-container">
                                        <div className="form-list-checkbox">
                                            <Checkbox />
                                        </div>

                                        <div className="item item-task">
                                            <span>{item.task}</span>
                                        </div>

                                        <div className="item-button-delete">
                                            <ButtonFormDelete />
                                        </div>
                                    </div>

                                    <Container>
                                        <Row className="list-item">
                                            <Col className="item item-statelist"><StateList /></Col>
                                            <Col className="item"><span>{item.person}</span></Col>
                                            <Col className="item">
                                                <Badge bg="primary" pill>21</Badge>
                                            </Col>
                                            <Col className="item"><span>{item.deadline}</span></Col>
                                        </Row>
                                    </Container>

                                </ListGroup.Item>

                            </Accordion.Header>

                            <Accordion.Body>
                                {item.taskdetail}
                            </Accordion.Body>

                        </Accordion.Item>

                    </Accordion>
                </div>
            ))}
        </div>
    );
};
*/


function ListForm({ data, onToggle, onDelete }) {


    return (
        <div>

            {data.map((item, index) => (
                <div className="listform-container">

                    <Accordion key={index} defaultActiveKey={['0']} alwaysOpen>

                        <Accordion.Item eventKey="0">

                            <Accordion.Header className="form-list-accordion-header">
                                <ListGroup.Item>

                                    <div className="form-list-container">
                                        <div className="form-list-checkbox">
                                            <Checkbox onToggle={() => onToggle(index)} checked={item.done} />
                                        </div>

                                        <div className="item item-task">
                                             <span className={item.done && 'text-decoration-line-through'}>{item.task}</span>
                                        </div>

                                        <div className="item-button-delete">
                                            <ButtonFormDelete onClick={() => onDelete(index)} />
                                        </div>
                                    </div>

                                    <Container>
                                        <Row className="list-item">
                                            <Col className="item item-statelist"><StateList isDone={item.done} /></Col>
                                            <Col className="item"><span>{item.person}</span></Col>
                                            <Col className="item">
                                                <Badge bg="primary" pill>21</Badge>
                                            </Col>
                                            <Col className="item">
                                                <span>{item.deadline}</span>


                                            </Col>
                                        </Row>
                                    </Container>

                                </ListGroup.Item>

                            </Accordion.Header>

                            <Accordion.Body>
                                {item.taskdetail}
                            </Accordion.Body>

                        </Accordion.Item>

                    </Accordion>
                </div>
            ))}
        </div>
    );
};


export default ListForm;