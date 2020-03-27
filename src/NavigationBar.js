import React from "react";
import {Button} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";

class NavigationBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/product">Wash Packages</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="primary" href="/login" className="mr-sm-2">Login</Button>
                        <Button variant="primary" href="/register">Sign Up</Button>
                    </Form>
                </Navbar>
            </div>
        )
    }
}

export default NavigationBar;