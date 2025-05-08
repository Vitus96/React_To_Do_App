import React from "react";

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

// components:
import DateForm from "./DateForm";
import ButtonForm from "../components/ButtonForm";


/*
function Formtext() {
    return (

        <Form>
            <div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task</Form.Label>
                    <Form.Control type="text" placeholder="write a task..." />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Task details</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="write down the task details..." />
                </Form.Group>

                <Row>
                    <Col>
                        <div className="formtext-container">
                            <div>
                                <Form.Label>Responsible person</Form.Label>
                                <Form.Control placeholder="person's name..." />
                            </div>

                            <div className="formtext-bottom">
                                <div>
                                    <Form.Label>Deadline</Form.Label>
                                    <DateForm />
                                </div>

                                <div className="form-text-button-add">
                                    <ButtonForm />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Form>
    );
};
*/

function Formtext({ onSubmit }) {
    const [task, setTask] = React.useState("");
    const [details, setDetails] = React.useState("");
    const [person, setPerson] = React.useState("");
    const [date, setDate] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit({
            task,
            taskdetail: details,
            person,
            done: false,
            deadline: date,
        });
        // Vyčištění formuláře
        setTask("");
        setDetails("");
        setPerson("");
        setDate("");
    }

    return (

        <Form onSubmit={handleSubmit}>
            <div>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Task</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="write a task..."
                        // Pridal som onChange a value
                        onChange={(event) => setTask(event.target.value)}
                        value={task}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Task details</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="write down the task details..."
                        // Pridal som onChange a value
                        onChange={(event) => setDetails(event.target.value)}
                        value={details}
                    />
                </Form.Group>

                {/*TODO: dokoncit onChange a value v ostatnych fieldoch */}

                <Row>
                    <Col>
                        <div className="formtext-container">
                            <div>
                                <Form.Label>Responsible person</Form.Label>
                                <Form.Control
                                    placeholder="person's name..."
                                    onChange={(event) => setPerson(event.target.value)}
                                    value={person}
                                />
                            </div>

                            <div className="formtext-bottom">
                                <div>
                                    <Form.Label>Deadline</Form.Label>
                                    <DateForm 
                                        type="date"
                                        onChange={(event) => setDate(event.target.value)}
                                        value={date}
                                    />
                                </div>

                                <div className="form-text-button-add">
                                    <ButtonForm />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>

        </Form>
    );
};




export default Formtext;