import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import {BrowserRouter, Link, Router} from 'react-router-dom';
import Routes from "../routes";
import menuLists from "./menuList";
import {getUserRole} from "../utils/config";



const drawerWidth = 240;

const useStyles = (theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        backgroundColor: "#B32121"
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,

    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

class MainDrawer extends React.Component{
    constructor(props){
        super(props);
        console.log(props);
        this.state={
            currentRoute:this.props.location,
            role:getUserRole()
        };
    }

    componentWillMount() {
        let self=this;
       /* this.unlisten = this.props.history.listen((location, action) => {
            self.setState({currentRoute:location.pathname});
        });*/
    }

    changeRoute=(path)=>{
        this.setState({currentRoute:path})

    };
    logout(){
        //clear session and redirect to login page
        sessionStorage.removeItem("user");
        window.location.reload();
        window.location.href = "/login";
    }
    render() {
        const {classes} = this.props;
        return (
                <div className={classes.root}>
                    <CssBaseline/>
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar>
                            <Typography variant="h6" noWrap>
                                Auto Wash Booking
                            </Typography>
                            {this.state.role=="END_USER"?<div style={{marginLeft:950}}>
                                <Link style={{textDecoration:"none",color:"white"}} onClick={this.logout}>Logout</Link>
                            </div>:null}
                            {this.state.role=="GUEST"?<div style={{marginLeft:900}}>
                                <Link style={{textDecoration:"none",color:"white"}} to={"/login"}>Login</Link>
                            </div>:null}
                            {this.state.role=="GUEST"?<div style={{marginLeft:50}}>
                                <Link style={{textDecoration:"none",color:"white"}} to={"/register"}>Sign Up</Link>
                            </div>:null}
                        </Toolbar>

                    </AppBar>
                    <Drawer
                        className={classes.drawer}
                        variant="permanent"
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        anchor="left"
                    >
                        <div className={classes.toolbar}/>

                        <List>
                            {menuLists(this.state.role).headerMenu.map(
                                (menu) =>
                                    //<Link style={{textDecoration:"none",color:"black"}} to={menu.path} onClick={() => this.changeRoute(menu.path)}>
                                        <ListItem button component={Link} to={menu.path}>
                                            <ListItemIcon><InboxIcon/></ListItemIcon>
                                            <ListItemText primary={menu.name}/>
                                        </ListItem>
                                    //</Link>
                            )}
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <div>
                            {/*<BrowserRouter>
                            <Routes isUser={this.state.isUser}/>
                        </BrowserRouter>*/}
                            <Routes role={this.state.role}/>
                        </div>
                    </main>
                </div>
        );
    }
}
export default withStyles(useStyles)(MainDrawer);