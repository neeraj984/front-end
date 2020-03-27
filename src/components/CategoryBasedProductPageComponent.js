import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import ProductPageComponent from "./ProductPageComponent";

export default class CategoryBasedProductPageComponent extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }
    render() {
        return(
            <div>
                <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Express">
                        <ProductPageComponent nameOnSelect={"Express Car Wash"}/>
                    </Tab>
                    <Tab eventKey="profile" title="Deluxe">
                        <ProductPageComponent nameOnSelect={"Deluxe Car Wash"} />
                    </Tab>
                    <Tab eventKey="contact" title="Basic">
                        <ProductPageComponent nameOnSelect={"Basic Car Wash"}/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}