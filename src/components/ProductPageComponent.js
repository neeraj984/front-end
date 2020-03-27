import React from "react"
import {Card} from "@material-ui/core/Card";
import "../css/login.css";
import {getProduct} from "../api/product";
import ProductCardComponent from "./ProductCardComponent";
import MakeBooking from "./MakeBooking";
import { Redirect } from "react-router-dom";
import {Button} from "react-bootstrap";
import {getUserID, getUserRole} from "../utils/config";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {withRouter} from 'react-router-dom';

class ProductPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productDetailList: [],
            productId:"",
            productName:"",
            role:getUserRole(),
            login:false,
            nameOnSelect:this.props.nameOnSelect,
            categoryData:[],
            categoryData2:[]
        };
        this.callProductDetails = this.callProductDetails.bind(this);
        this.getProductId = this.getProductId.bind(this);
    }

    componentDidMount() {
        this.callProductDetails();
        if(getUserID()!=null){
            this.setState({login:true});
        }
    }

    callProductDetails() {
        let self = this;
        getProduct().then(function (data) {
            let category = data.filter(
                (product) =>(product.name == self.state.nameOnSelect)
            );
            self.setState({categoryData:category});
        }).catch(function (err) {
            console.log(err);
        })
    }

    getProductId(event) {
        //window.location.href="/login";
        this.state.productId = event._id;
        this.state.productName = event.name;
        //window.location.href="booking/"+this.state.productId;
        if (this.state.login){
            if (this.state.role === "END_USER"){
                this.props.history.push('/booking/'+this.state.productId+'/'+this.state.productName);
            }
            else {
                return null;
            }
        }else{
            this.props.history.push('/login');
        }
    }

    render(){
        // console.log("calling render");
        // console.log(this.state.productDetailList);
        return (
            <div>
            <div className="row">
                {this.state.categoryData.length ?
                    this.state.categoryData.map(
                        (product) =>
                            <div className="col-4">
                                <ProductCardComponent
                                    name={product.name}
                                    imageUrl={product.imageUrl}
                                    description={product.description}
                                    price={product.price}
                                    triggerProductPage={(event)=>this.getProductId(product)}
                                />
                            </div>
                    ) : <span/>}
            </div>
            </div>
        )
    }
}

export default withRouter(ProductPageComponent);