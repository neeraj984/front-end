import React from "react";
import "../css/login.css";
import {Accordion, Button, Card} from "react-bootstrap";
import {getUserID} from "../utils/config";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export default class ProductCardComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            features:["Pressurized water spray.","Exterior hand washing.","Interior cleaning.","Dry wipe."]
        };
    }
    componentDidMount() {
        if(getUserID()!=null){
            this.setState({login:true});
        }
    }

    render() {
        return (
            <div>
                <Card border={"success"} className={"p-2 mb-4"}>
                    <Card.Img variant="top" src={this.props.imageUrl}/>
                    <Card.Body>
                        <Card.Title style={{fontWeight:"bold"}}>{this.props.name}</Card.Title>
                        <Card.Text>{this.props.description}</Card.Text>
                    </Card.Body>
                    <Accordion>
                        <Accordion.Toggle style={{color:"#B32121",fontWeight:"bold"}} as={Card.Header} variant="" eventKey="0">Package includes...</Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                        <ListGroup className="list-group-flush">
                            {this.state.features.map(
                                (feature) =>
                                    <ListGroupItem>{feature}</ListGroupItem>
                            )}
                        </ListGroup>
                        </Accordion.Collapse>
                    </Accordion>
                    <Card.Body>
                        <Card.Subtitle>Price : {this.props.price}</Card.Subtitle>
                        <Button style={{color:"white",backgroundColor:"#B32121",borderColor:"#B32121", marginTop:10}} onClick={(event)=>this.props.triggerProductPage()}>Book</Button>
                    </Card.Body>
                </Card>
            </div>
            /*<div className="login-root-div">
                <Card className={"m-2 p-2"}>
                    <CardHeader
                        title={this.props.name}
                        subheader={this.props.description}
                    />
                    <CardMedia
                        image= {this.props.imageUrl}
                        height="200"
                        width="200"
                        component="img"
                    />
                    <CardMedia className={"d-flex justify-content-sm-center mt-2"}>
                        <Button style={{color:"white",backgroundColor:"#B32121",borderColor:"#B32121"}} onClick={(event)=>this.props.triggerProductPage()}>Book</Button>
                    </CardMedia>
                </Card>
            </div>*/
        )

    }
}