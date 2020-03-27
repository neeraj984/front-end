// import {getUserID} from "../utils/config";

var menuLists=function getMenuList(role) {
    // let login;
    // if(getUserID()!=null){
    //     login = true;
    // }
    var menuList={};
    if(role=="ADMIN"){
        menuList = {
            "headerMenu": [
                {"name": "Product", "path": "/product"},
                {"name": "Login", "path":"/login"},
                {"name":"mb", "path":"/UserBooking"},


            ]
        };
    }else if (role=="END_USER") {
        menuList = {
            "headerMenu": [
                {"name": "Product", "path": "/product"},
                {"name": "Login", "path": "/login"},
                {"name": "Register", "path": "/register"},
                {"name":"mb", "path":"/UserBooking"},

            ]
        };
    // }else if (role=="END_USER" && login){
    //         menuList = {
    //             "headerMenu": [
    //                 {"name": "Product", "path": "/product"},
    //                 {"name": "Login", "path":"/login"},
    //                 {"name":"Register", "path":"/register"},
    //                 {"name":"Logout", "path":"/logout"}
    //             ]
    //         };
    }else {
        menuList = {
            "headerMenu": [
                {"name": "Home", "path": "/"},
                {"name": "About", "path": "/about"},
                {"name": "Services", "path":"/services"},
                {"name":"Contact", "path":"/contact"},
                {"name":"mb", "path":"/UserBooking"},


            ]
        };
    }

    return menuList

}

export default menuLists
