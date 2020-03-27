import React from "react";
import Table from "react-bootstrap/Table";
import {getProduct} from "../api/product";
import ProductTable from "./ProductTable";

export default class ProductTablePage extends React.Component{
    constructor(props){
        super(props);
        this.state={
            productDetail:[]
        };
        this.callProductDetails = this.callProductDetails.bind(this);
    }

    componentDidMount() {
        this.callProductDetails();
    }

    callProductDetails() {
        let self = this;
        getProduct().then(function (data) {
            self.setState({productDetail: data})
        }).catch(function (err) {
            console.log(err);
        })
    }

    render() {
        return(
            <div>
                <div style={{fontFamily: "cursive", textDecoration:"underline",color:"#B82F2F"}}>
                    <h4>Packages List:</h4>
                </div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>Package Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Create Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.productDetail.length ?
                        this.state.productDetail.map(
                            (product) =>
                                <ProductTable
                                    name={product.name}
                                    description={product.description}
                                    price={product.price}
                                    create_date={product.create_date}
                                />
                        ) : <span>No Data.</span>
                    }

                    </tbody>
                </Table>
            </div>
        )
    }
}