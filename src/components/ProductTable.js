import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

export default class ProductTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.description}</td>
                <td>{this.props.price}</td>
                <td>{this.props.create_date}</td>
                <td><Button variant="secondary">Delete Product</Button></td>
            </tr>
        );
    }
}