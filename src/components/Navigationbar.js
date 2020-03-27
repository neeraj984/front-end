import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Col, Container, Row} from "react-bootstrap";
import "../css/app.css";

export default class Navigationbar extends React.Component{
    render() {
        return(
            <div className={"col-md-12"}>
                <Navbar className={"nav-bar"}>
                    <Nav>
                        <Container>
                            <Row>
                                <Col>
                                    <img src={require("../images/brandImage.png")} width={"60"} height={"40"} alt={"logo"}/>
                                </Col>
                                <Col>
                                    <Navbar.Brand className={"nav-brand"} href="/">
                                        <div className={"navBrandName"}>
                                            Auto Wash Booking
                                        </div>
                                    </Navbar.Brand>
                                </Col>
                                <Col className={"nav"}>
                                    <Nav.Link href="/">
                                        <div className={"nav-link-name"}>
                                            Home
                                        </div>
                                    </Nav.Link>
                                </Col>
                                <Col className={"nav"}>
                                    <Nav.Link href="/login">
                                        <div className={"nav-link-name"}>
                                            Login
                                        </div>
                                    </Nav.Link>
                                </Col>
                                <Col className={"nav"}>
                                    <Nav.Link href="/register">
                                        <div className={"nav-link-name"}>
                                            Register
                                        </div>
                                    </Nav.Link>
                                </Col>
                            </Row>
                        </Container>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}