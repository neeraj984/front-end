import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {CreateBooking} from "../api/CreateBooking";
import {parse} from "@babel/core";
import {getUserID} from "../utils/config";

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userId:getUserID(),
            packageId:this.props.match.params.packageID,
            package_name:this.props.match.params.productName,
            total_price:"",
            wash_station_id:"",
            wash_station_name:"",
            vehicleId:"",
            vehicle_name:"",
            status:"CONFIRMED",
            booking_from:"",
            booking_to:"",
            isHomePickup:false,
            doorstepWash:false,
            vehicleLocation:"",
            bookingSuccessful:false,
            errorMessage:""
        };
        this.doBooking = this.doBooking.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    doBooking(userId,packageId,bookingFrom,bookingTo,vehicleId,vehicleName,status,packageName,totalPrice,washStationId,washStationName,isHomePickup,doorstepWash,vehicleLocation){
        let self=this;
        if(userId && userId !== "" && packageId && packageId !== "" && bookingFrom && bookingFrom !== "" && bookingTo && bookingTo !== "" && vehicleId && vehicleId !== "" && vehicleName && vehicleName !== "" && status && status !== "" && packageName && packageName !== "" && totalPrice && totalPrice !== "" && washStationId && washStationId !== "" && washStationName && washStationName !== "" && isHomePickup && isHomePickup !== "" && doorstepWash && doorstepWash !== "" && vehicleLocation && vehicleLocation !== ""){
            CreateBooking(userId,packageId,bookingFrom,bookingTo,vehicleId,vehicleName,status,packageName,totalPrice,washStationId,washStationName,isHomePickup,doorstepWash,vehicleLocation).then(function (data) {
                self.setState({bookingSuccessful:true})
            }).catch(function (error) {
                self.setState({bookingSuccessful:false, errorMessage:error})
            })
        }
    }

    handleOnChange(event){
        const name = event.target.name;
        this.setState({[name]:event.target.value});
    }
    onSubmit(){
        this.doBooking(
            this.state.userId,
            this.state.packageId,
            this.state.booking_from,
            this.state.booking_to,
            this.state.vehicleId,
            this.state.vehicle_name,
            this.state.status,
            this.state.package_name,
            this.state.total_price,
            this.state.wash_station_id,
            this.state.wash_station_name,
            this.state.isHomePickup,
            this.state.doorstepWash,
            this.state.vehicleLocation
        );
    }

    componentDidMount() {
        document.body.style.backgroundColor = "whitesmoke";
        console.log(this.props.match.params.packageID);
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
                            Let's book a car wash
                        </Row>
                        <Row className={"header2"}>
                            Make a Booking
                        </Row>
                        <Row className={"justify-content-md-center"}>
                            <Form className={"onlyForm"}>
                                <Form.Group controlId="formUserId">
                                    <Form.Label className={"formLabel1"}>User ID</Form.Label>
                                    <Form.Control type="text" name={"userId"} value={this.state.userId} onChange={(event) => this.handleChange(event)}/>
                                </Form.Group>
                                <Form.Group controlId="formPackageId">
                                    <Form.Label className={"formLabel2"}>Package ID</Form.Label>
                                    <Form.Control type="text" name={"packageId"} value={this.state.packageId} onChange={(event) => this.handleChange(event)}/>
                                </Form.Group>
                                <Form.Group controlId="bookingFrom">
                                    <Form.Label className={"formLabel"}>Booking From</Form.Label>
                                    <Form.Control type="text" name={"booking_from"} value={this.state.booking_from} onChange={(event) => this.handleChange(event)}/>
                                </Form.Group>
                                <Form.Label className={"formLabel"}>Gender</Form.Label>
                                <fieldset>
                                    <Form.Group as={Row}>
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