import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App/>,document.getElementById('root'));
serviceWorker.unregister();


/*import Reactdom from 'react-dom';
import React from 'react';
import {Route,BrowserRouter as Router} from "react-router-dom";
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserDash from "./UserDash";
import SignUp from "./components/SignUp";
import ProductPage from "./components/ProductPage";
import MainTablePage from "./components/MainTablePage";
import UserProfile from "./components/UserProfile";
import signin from "./components/signin";
export const routing = (
    <Router>
        <Route path="/" component={App} >
            <Route path="/login" component={signin} />
            <Route path="/userdash" component={UserDash}/>
            <Route path="/register" component={SignUp}/>
            <Route path={"/product"} component={ProductPage}/>
            <Route path={"/table"} component={MainTablePage}/>

            {/!*<Route path={"/user/packages"} component={}/>*!/}
            <Route path={"/user"} component={UserProfile}/>
            {/!*<Route path={"/user/profile"} component={}/>*!/}
            {/!*<Route path={"/user/booking/history"} component={}/>*!/}
            {/!*<Route path={"/user/booking/recent"} component={}/>*!/}
        </Route>
    </Router>
);
Reactdom.render(routing,document.getElementById('root'));
serviceWorker.unregister();*/

// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
//import './index.css';
//import * as serviceWorker from './serviceWorker';
// import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
//
// const theme = createMuiTheme({
//     palette: {
//         primary: {
//             // light: "#b81d1d",
//             // main: "#b81d1d",
//             // dark: "b81d1d",
//         },
//         secondary: {
//             // light: "#b81d1d",
//             // main: "#b81d1d",
//             // dark: "#b81d1d",
//         }
//     },
//     typography: {
//         // color: "#ffffff",
//         // useNextVariants: true,
//     }
//
// });

// ReactDOM.render(
//     {/*<MuiThemeProvider theme={theme}><App/></MuiThemeProvider>,*/}
//     <App/>,document.getElementById('root');
// );
// ReactDOM.render(<App/>,document.getElementById('root'));
//serviceWorker.unregister();
