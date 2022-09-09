import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import img_sample from "./images/logo192.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript: Vincent Ferrera
                <h1> Basic HTML and CSS </h1>
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <Container>
                <Row>
                    <Col style={{ border: "1px solid black", padding: "4px" }}>
                        <p>
                            This image is just taken from the public directory
                            in tasks.
                        </p>
                        <img src={img_sample} alt="Public task logo #192" />
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col style={{ border: "1px solid black", padding: "4px" }}>
                        <p>There are three things you cannot avoid in life:</p>
                        <ol>
                            <li>Death</li>
                            <li>Taxes</li>
                            <li>Debugging code</li>
                        </ol>
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "50px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
