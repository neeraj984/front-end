import React from "react";
import {Button, Table} from "react-bootstrap";
import {getUserInformation} from "./api/UserInformation";

export default class UserDash extends React.Component{
    constructor(props){
        super(props);
        this.state={
            userData:[]
        };
    }

    viewInfo(){
        let self=this;
        getUserInformation().then(function (data) {
            console.log(data);
            self.setState({userData:data})
        }).catch(function (err) {
            console.log(err);
        })
    }

    componentDidMount() {
        document.body.style.backgroundColor="whitesmoke";
        getUserInformation().then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        })
        //this.viewInfo();
    }

    render() {
        return(
            <div>
            <Table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                {this.state.userData.map(
                    (userDetail)=>
                        <tr>
                            <td>{userDetail.name}</td>
                            <td>{userDetail.email}</td>
                            <td>{userDetail.gender}</td>
                            <td>{userDetail.phone}</td>
                        </tr>
                )}
                </tbody>
            </Table>
            </div>
        )
    }
}