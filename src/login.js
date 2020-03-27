import React from "react";
import {login} from "./api/user";
import Button from "react-bootstrap/Button";
import {Col, Container, Form, Row} from "react-bootstrap";
import "./css/login.css";
//import {routing} from "./index";
import UserDash from "./UserDash";
import App from "./App";


export default class Login extends React.Component{
    constructor(props){
        super(props);
        /*
        * role: admin, enduser
        * */
        this.state={
            username:'',
            password:'',
            role:"",
            repassword:'',
            gender:'',
            phoneNo:'',
            loginSuccessful: false,
            errorMessage:""
        };
        // this.callProductDetails = this.callProductDetails.bind(this)

        this.login = this.login.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    login(username,password){
        let self=this;
        if (username && username != null && username !== "" && password && password != null && password !== ""){
            login(username,password).then(function (data) {
                // console.log(data._id);
                console.log(data);
                if (data != null && (data._id != null)) {

                    let encryptedPassword = btoa(password);
                    sessionStorage.setItem("user", JSON.stringify({
                        userId: data._id,
                        username: username,
                        password: encryptedPassword,
                        /*
                        * todo fetch role from props.....
                        * */
                        role: data.role
                    }));
                    //Todo store username and password in session
                    //While storing password encode password in base64
                    //self.setState({loginSuccessful: true})
                    //self.setState({role:data.role});
                    self.props.history.push("/");
                    window.location.reload();
                }
            }).catch(function (error) {
                console.log(error);
                self.setState({errorMessage:error});
                //self.setState({loginSuccessful:false, errorMessage:error})
            })
        }
    }

    //This method should be replaced when implementing logout
    logout(){
        //clear session and redirect to login page
        sessionStorage.removeItem("user");
        window.location.reload();
        window.location.href = "/login";
    }

    handleOnChange(event){
        const name = event.target.name;
        this.setState({[name]:event.target.value});
    }

    // handleOnPasswordChange(event){
    //     this.setState({password:event.target.value})
    // }

    onSubmit(){
        this.login(this.state.username,this.state.password,this.state.role);
    }

    render() {
        if(this.state.loginSuccessful === true){
            return(
                <span>Login Successful</span>
            )
        }else{
            return(
                <div>
                    <Container>
                        <Row className={"header2"}>
                            Login
                        </Row>
                        <Row className={"justify-content-md-center"}>
                            <Form className={"onlyForm"}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className={"formLabel"}>Username</Form.Label>
                                    <Form.Control type="email" value={this.state.username} name={"username"} onChange={(event) => this.handleOnChange(event)}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className={"formLabel"}>Password</Form.Label>
                                    <Form.Control type="password" value={this.state.password} name={"password"} onChange={(event) => this.handleOnChange(event)}/>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row className={"buttonLogin"}>
                            <Button variant="secondary" value="Login" onClick={this.onSubmit}>Login</Button>
                        </Row>
                        <br/>
                        <Row>
                            <Col>
                                Not Registered yet?
                                <a href={"/register"}>Register</a>
                            </Col>
                        </Row>
                        {
                            this.state.errorMessage !== ""?
                                <div style={{color:"red"}}>{this.state.errorMessage}</div>:null
                        }
                    </Container>
                </div>
            )
        }
    }
}