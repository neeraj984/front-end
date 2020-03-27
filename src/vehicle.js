import React from "react";
import axios from 'axios';
import {vehicle,register_vehicle} from "./api/vehicle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import  "./utils/css/login.css";
import Avatar from "@material-ui/core/Avatar";



export default class Vehicle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            companyName:"",
            description:"",
            registrationNumber:"",
            isRegisterSuccessfull: false,
            errorMsg: ""
        };
        this.handleChange = this.handleChange.bind(this)
        this.onsubmit = this.onsubmit.bind(this);


    }


    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    onsubmit(){
        let vehicle = register_vehicle(this.state.name,this.state.companyName,this.state.description,this.state.registrationNumber);
        register_vehicle(vehicle).then(function (da) {

        }).catch(function (err) {

        });
    }


    /*render() {
        console.log("calling render");
        console.log(this.state.productDetailList);
        return(
            this.state.productDetailList.length?
                this.state.productDetailList.map(
                    (product)=>
                        <div>
                            <h1>{product.name}</h1>
                            <p>{product.Description}</p>


                        </div>


                ):<span>no data</span>)
    }*/
    render() {
        if(this.state.isRegisterSuccessfull === true){
            return (<div></div>)
        }else {
            return (
                <div className={"login-root-div"}>
                    <Card className={"login-card"}>
                        < form className={"row"}>
                            <Avatar sizes={"50"}>
                                NS
                            </Avatar>
                            <TextField type="text" label="Name" name="name" value={this.state.name}
                                       onChange={(event) => this.handleChange(event)}/>
                            <div>
                                <TextField type="text" label="companyName" name="companyName" value={this.state.description}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>

                            <div>
                                <TextField type="text" label="description" name="description" value={this.state.companyName}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>
                            <div>
                                <TextField type="text" label="registrationNumber" name="registrationNumber" value={this.state.registrationNumber}
                                           onChange={(evnet) => this.handleChange(evnet)}/>
                            </div>



                            <div style={{marginTop: 20}}>
                                <Button style={{backgroundColor: "#00ff00"}} color="primary" value="regsiter"
                                        onClick={this.onsubmit}>Register</Button>
                            </div>

                        </form>
                    </Card>
                </div>
            )
        }
    }



}
