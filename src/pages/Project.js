import React, { useState } from "react";

// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Components: 
import Formtext from "../components/FormText"
//import ButtonForm from "../components/ButtonForm";
import ListForm from "../components/ListForm";


/*
function Project() {
    const [projects, setProjects] = useState([{
        task: "Úkol",
        taskdetail: "Popis",
        person: "Jméno odsoby",
        done: false,
        deadline: '2025-01-01',
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
                    <Col><ListForm data={projects} /></Col>
                </Row>
            </Container>

        </div>
    );
};
*/

function Project() {
    // Na zaciatku bude prazdne pole
    const [projects, setProjects] = useState([]);

    function addProject(project) {
        // Pridaj projekt do pola
        setProjects(prev => [...prev, project]);
    }

    /*
    function removeProject(index) {
        console.log("removeProject", index);
        // TODO: dokoncit funkciu vymazania, pouzit filter
        
    }
    */

    function removeProject(indexToRemove) {
        console.log("removeProject", indexToRemove);
        // TODO: dokoncit funkciu vymazania, pouzit filter
        setProjects(prevProjects => prevProjects.filter((_, idx) => idx !== indexToRemove)
        );
    }

    /*
    function toggleProject(index) {
        console.log("toggleProject", index);
      
    }
    */

    function toggleProject(index) {
        console.log("toggleProject", index);
        
        setProjects(prevProjects =>
            prevProjects.map((project, idx) =>
                idx === index
                    ? { ...project, done: !project.done }
                    : project
            )
        );
    }

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
                    <Col><Formtext onSubmit={addProject} /></Col>
                </Row>

                <Row>
                    <Col><ListForm
                        data={projects}
                        onToggle={toggleProject}
                        onDelete={removeProject}
                    /></Col>
                </Row>
            </Container>

        </div>
    );
};


export default Project;