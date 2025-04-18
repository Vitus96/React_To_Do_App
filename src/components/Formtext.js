import React from "react";

import Form from 'react-bootstrap/Form';


function Formtext() {
    return (
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Task</Form.Label>
                <Form.Control type="text" placeholder="write a task..." />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Task details</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="write down the task..."/>
            </Form.Group>
        </Form>
    );
};


export default Formtext;