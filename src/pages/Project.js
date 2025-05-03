import React, { useState } from "react";

// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components: 
import Formtext from "../components/FormText"
//import ButtonForm from "../components/ButtonForm";
import ListForm from "../components/ListForm";




function Project() {
    const [projects, setProjects] = useState([{
        task: "Úkol",
        taskdetail: "Popis",
        person: "Jméno odsoby",
        done: false,
        deadline: new Date(),
    }]);


    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <div className="todolist-title">
                            <h1>To Do List</h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col><Formtext /></Col>
                </Row>

                <Row>
                    <Col><ListForm /></Col>
                </Row>
            </Container>

        </div>
    );
};


export default Project;