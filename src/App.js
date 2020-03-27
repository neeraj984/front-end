/*
import React from 'react';
import {Redirect} from "react-router";

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isUserLogIn: false
        }
    }
    render() {
        return(
            <div>
                {this.state.isUserLogIn ? <Redirect to={"product"}/> : <Redirect to={"login"}/>}
                {this.props.children}
            </div>
        )
    }
    componentDidMount() {
         let data = JSON.parse(sessionStorage.getItem("user"));
         if (data != undefined && data != null && data.username && data.username != null){
            this.state.isUserLogIn = true
         } else{
             this.state.isUserLogIn = false
         }
    }
}
*/

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainDrawer from "./common/MainDrawer";
import {getUserRole} from "./utils/config";
import Header from "./common/header";
import Routes from "./routes";
import NavigationBar from "./NavigationBar";

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            //role:""
        }
    }
    componentDidMount() {
       //this.state.role = getUserRole();
     }

    render() {
        return (
            <BrowserRouter>
                <div>
                    {/*<NavigationBar/>*/}
                    {/*<Header isUser={this.state.role}/>*/}
                    {/*<Routes isUser={this.state.role}/>*/}
                    <MainDrawer />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;

// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import {BrowserRouter, Link} from 'react-router-dom';
// import Routes from './routes';
// import menuLists from "./common/menuList";
//
// const drawerWidth = 240;
//
// const useStyles = (theme => ({
//     root: {
//         display: 'flex',
//     },
//     appBar: {
//         width: `calc(100% - ${drawerWidth}px)`,
//         marginLeft: drawerWidth,
//         backgroundColor: "#B32121"
//     },
//     drawer: {
//         width: drawerWidth,
//         flexShrink: 0,
//
//     },
//     drawerPaper: {
//         width: drawerWidth,
//     },
//     toolbar: theme.mixins.toolbar,
//     content: {
//         flexGrow: 1,
//         backgroundColor: theme.palette.background.default,
//         padding: theme.spacing(3),
//     },
// }));
//
// class App extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             currentRoute:"",
//         };
//     }
//
//     /*componentWillMount() {
//         let self=this;
//         this.unlisten = this.props.history.listen((location, action) => {
//             self.setState({currentRoute:location.pathname});
//         });
//     }*/
//
//     changeRoute=(path)=>{
//         this.setState({currentRoute:path})
//
//     };
//     render() {
//         const {classes} = this.props;
//         return (
//             <BrowserRouter>
//             <div className={classes.root}>
//                 <CssBaseline/>
//                 <AppBar position="fixed" className={classes.appBar}>
//                     <Toolbar>
//                         <Typography variant="h6" noWrap>
//                             Auto Wash Booking
//                         </Typography>
//                     </Toolbar>
//                 </AppBar>
//                 <Drawer
//                     className={classes.drawer}
//                     variant="permanent"
//                     classes={{
//                         paper: classes.drawerPaper,
//                     }}
//                     anchor="left"
//                 >
//                     <div className={classes.toolbar}/>
//
//                     <List>
//                         {menuLists(false).headerMenu.map(
//                             (menu) =>
//                                 <Link style={{textDecoration:"none",color:"black"}} to={menu.path} onClick={() => this.changeRoute(menu.path)}>
//                                 <ListItem>
//                                     <ListItemIcon><InboxIcon/></ListItemIcon>
//                                     <ListItemText primary={menu.name}/>
//                                 </ListItem>
//                                 </Link>
//                         )}
//                     </List>
//                 </Drawer>
//                 <main className={classes.content}>
//                     <div className={classes.toolbar}/>
//                     <div>
//                         {/*<BrowserRouter>
//                             <Routes isUser={this.state.isUser}/>
//                         </BrowserRouter>*/}
//                         <Routes isUser={this.state.isUser}/>
//                     </div>
//                 </main>
//             </div>
//             </BrowserRouter>
//         );
//     }
// }
// export default withStyles(useStyles)(App);

