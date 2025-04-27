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
                            <h1>About me and project</h1>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className="about-countainer-text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquid ex ea commodi consequat. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};


export default About;