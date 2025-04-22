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
                    <Col><h1>About me</h1></Col>
                </Row>

                <div className="about-contian">
                    <Row>
                        <Col>
                            <div>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div>
                        </Col>
                        <Col>2 of 3</Col>
                    </Row>
                    
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};


export default About;