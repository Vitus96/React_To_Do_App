import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// components:
import DateForm from "./DateForm";


function Formtext() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="write a task..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Task details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="write down the task..." />
            </Form.Group>

            <Row>
                <Col>
                    <Form.Label>Responsible person</Form.Label>
                    <Form.Control placeholder="person's name..." />
                </Col>

                <Col>
                    <Form.Label>Date</Form.Label>
                    <DateForm />
                </Col>
            </Row>
        </Form>
    );
};


export default Formtext;