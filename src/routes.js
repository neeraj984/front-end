/*
import React from "react";
import {BrowserRouter as Router,Link,Switch,Route} from "react-router-dom";
import drawer from "./root/drawer";

export default (
    <Router>
        <div>
            {/!*<Link to="/">Home</Link>{' '}
            <Link to={{pathname: '/about'}}>About</Link>{' '}
            <Link to="/contact">Contact</Link>*!/}

            <Switch>
                <Route path="/" component={drawer} />
                {/!*<Route path="/about" component={About} />*!/}
                <Route
                    path="/contact"
                    render={() => <h1>Contact Us</h1>} />
                <Route path="/blog" children={({match}) => (
                    <li className={match ? 'active' : ''}>
                        <Link to="/blog">Blog</Link>
                    </li>)} />
                <Route render={() => <h1>Page not found</h1>} />
            </Switch>
        </div>
    </Router>
);*/

import React, {Component} from 'react';
import {Route, Router, Switch} from "react-router-dom";
import Login from "./login";
import ProductPageComponent from "./components/ProductPageComponent";
import {getUserID} from "./utils/config";
import register from "./register";
import MakeBooking from "./components/MakeBooking";
import CategoryBasedProductPageComponent from "./components/CategoryBasedProductPageComponent";


/*
*
* this.props.history.push(path, {'key': value)})
*
* */


class Routes extends Component {
    constructor(props) {
        super(props);
        this.state={
            login:false,
            role:""
        }
    }
    componentDidMount() {
        this.setState({role:this.props.role});
        let self=this;
        if(getUserID()!=null){
            self.setState({login:true});
        }
    }


    render() {
        return (
            <div>
                {this.state.login ?
                    this.state.role=="END_USER"?
                        <Switch>
                            <Route path="/" component={CategoryBasedProductPageComponent} exact/>
                            <Route path="/login" component={Login} exact/>
                            <Route path="/product" component={CategoryBasedProductPageComponent} exact/>
                            <Route path="/register" component={register} exact/>
                            <Route path="/booking/:packageID?/:productName?" component={MakeBooking} exact/>
                            {/*role: endUser*/}
                        </Switch>
                        :<Switch>
                            <Route path="/" component={ProductPageComponent} exact/>
                            <Route path="/login" component={Login} exact/> {/*role: admin*/}
                        </Switch>

                    :<Switch>
                        <Route path="/" component={CategoryBasedProductPageComponent} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/register" component={register} exact/>
                    </Switch>
                }
            </div>
        );
    }
}

export default Routes;