import React from "react";
import {register} from "./api/user1";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./css/register.css";

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:'',
            gender:'',
            email:'',
            phone:'',
            password:'',
            register_successful:false,
            errorMeessage:""
        };
        this.doRegister = this.doRegister.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    doRegister(name,gender,email,phone,password){
        let self=this;
        if(name && name !== "" && gender && gender !== "" && email && email !== "" && phone && phone !== "" && password && password !== ""){
            register(name,gender,email,phone,password).then(function (data) {
                self.setState({register_successful:true})
            }).catch(function (error) {
                self.setState({register_successful:false, errorMessage:error})
            })
        }
    }

    handleOnNameChange(event){
        this.setState({name:event.target.value})
    }
    handleOnGenderChange(event){
        this.setState({gender:event.target.value})
    }
    handleOnEmailChange(event){
        this.setState({email:event.target.value})
    }
    handleOnPhoneChange(event) {
        this.setState({phone:event.target.value})
    }
    handleOnPasswordChange(event){
        this.setState({password:event.target.value})
    }
    onSubmit(){
        this.doRegister(this.state.name,this.state.gender,this.state.email,this.state.phone,this.state.password);
    }

    componentDidMount() {
        document.body.style.backgroundColor="whitesmoke";
    }

    render() {
        if (this.state.register_successful === true){
            return(
                <div>{window.location.href="/login"}</div>
            )
        }else{
            return (
            <div>
                <Container>
                    <Row className={"header1"}>
                        Not registered yet?
                    </Row>
                    <Row className={"header2"}>
                        Sign Up
                    </Row>
                    <Row className={"justify-content-md-center"}>
                        <Form className={"onlyForm"}>
                            <Form.Group controlId="formName">
                                <Form.Label className={"formLabel"}>First Name</Form.Label>
                                <Form.Control type="text" value={this.state.name} onChange={(event) => this.handleOnNameChange(event)}/>
                            </Form.Group>
                            <Form.Label className={"formLabel"}>Gender</Form.Label>
                            <fieldset>
                            <Form.Group as={Row} controlId="formGender">
                                <Col>
                                    <Form.Check type="radio" label="Male" value="Male" checked={this.state.gender === "Male"} onChange={(event) => this.handleOnGenderChange(event)}/>

                                </Col>
                                <Col>
                                    <Form.Check type="radio" label="Female" value="Female" checked={this.state.gender === "Female"} onChange={(event) => this.handleOnGenderChange(event)}/>
                                </Col>
                            </Form.Group>
                            </fieldset>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label className={"formLabel"}>Email</Form.Label>
                                <Form.Control type="email" value={this.state.email} onChange={(event) => this.handleOnEmailChange(event)}/>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formPhone">
                                <Form.Label className={"formLabel"}>Phone</Form.Label>
                                <Form.Control type="text" value={this.state.phone} onChange={(event) => this.handleOnPhoneChange(event)}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className={"formLabel"}>Password</Form.Label>
                                <Form.Control type="password" value={this.state.password} onChange={(event) => this.handleOnPasswordChange(event)}/>
                            </Form.Group>
                        </Form>
                    </Row>
                    <Row className={"buttonRegister"}>
                        <Button variant={"secondary"} value="Register" onClick={this.onSubmit}>Register</Button>
                    </Row>
                        {
                            this.state.errorMessage !== ""?
                                <div>{this.state.errorMessage}</div>:null
                        }
                </Container>
            </div>
            )
        }
    }
}