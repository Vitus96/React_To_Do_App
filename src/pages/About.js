import React from "react";

// GRID:
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function About() {
    return (
        <div className="about-container">

            <Container>
                <Row>
                    <Col>
                        <div className="about-countainer-title">
                            <h1>About project</h1>
                        </div>
                    </Col>
                </Row>
                {/*}
                <Row>
                    <Col>
                        <div className="about-countainer-text">

                            <div className="welcome">
                                <p>Welcome to my To Do List project built with React.</p>
                            </div>
                            
                            <div className="possibilities">
                                <p>This project allows you to:</p>
                                <ul>
                                    <li>add tasks with a title, details, responsible person, and a deadline,</li>
                                    <li>display tasks clearly in a list,</li>
                                    <li>delete individual tasks,</li>
                                    <li>easily work with a form that manages state using React hooks.</li>
                                </ul>
                            </div>
                            
                            <div className="technologies">
                                <p>Technologies used:</p>
                                <ul>
                                    <li>React (functional components + hooks)</li>
                                    <li>React Bootstrap (for form styling)</li>
                                    <li>useState and props for state management and component communication</li>
                                </ul>
                            </div>
                            
                            <div className="features">
                                <p>Project features:</p>
                                <ul>
                                    <li>Form validation – you can’t add an empty task</li>
                                    <li>Dynamically generated task list</li>
                                    <li>Ability to remove tasks from the list</li>
                                    <li>Reactive data flow between the form and the list</li>
                                </ul>
                            </div>

                        </div>
                    </Col>

                    <Col>
                        <div className="">
                            <img src="logo192.png" alt="react" className="rotating-react"></img>
                        </div>
                    </Col>
                </Row>
                */}

                <Row>
                    <Col>
                        <div className="welcome-container">
                            <div className="welcome">
                                <p>Welcome to my To Do List project built with React.</p>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="possibilities-container">
                            <div className="possibilities">
                                <p>This project allows you to:</p>
                                <ul>
                                    <li>add tasks with a title, details, responsible person, and a deadline,</li>
                                    <li>display tasks clearly in a list,</li>
                                    <li>delete individual tasks,</li>
                                    <li>easily work with a form that manages state using React hooks.</li>
                                </ul>
                            </div>

                            <div className="react-container">
                                <img src="logo192.png" alt="react" className="rotating-react"></img>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="technologies-container">

                            <div className="react-container">
                                <img src="logo192.png" alt="react" className="rotating-react"></img>
                            </div>

                            <div className="technologies">
                                <p>Technologies used:</p>
                                <ul>
                                    <li>React (functional components + hooks)</li>
                                    <li>React Bootstrap (for form styling)</li>
                                    <li>useState and props for state management and component communication</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="features-container">
                            <div className="features">
                                <p>Project features:</p>
                                <ul>
                                    <li>Form validation – you can’t add an empty task</li>
                                    <li>Dynamically generated task list</li>
                                    <li>Ability to remove tasks from the list</li>
                                    <li>Reactive data flow between the form and the list</li>
                                </ul>
                            </div>

                            <div className="react-container">
                                <img src="logo192.png" alt="react" className="rotating-react"></img>
                            </div>
                        </div>
                    </Col>
                </Row>


            </Container>

        </div>
    );
};


export default About;