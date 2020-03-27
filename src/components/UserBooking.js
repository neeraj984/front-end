import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import UserBookingRecent from "./UserBookingRecent";
import UserBookingHistory from "./UserBookingHistory";

export default class UserBooking extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <div>
                <Tabs defaultActiveKey="Recent" id="uncontrolled-tab-example" style={{borderColor:"#B82F2F"}}>
                    <Tab eventKey="Recent" title="Recent Booking">
                        <UserBookingRecent/>
                    </Tab>
                    <Tab eventKey="History" title="Booking History">
                        <UserBookingHistory/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}