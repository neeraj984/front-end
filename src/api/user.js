import axios from 'axios';
import {BASE_URL} from "../utils/config";

export function login(username,password) {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "login", create_user(username, password)).then(
            function (data) {
                //console.log(data.data);
                if (data.data.status === true) {
                    resolve(data.data.data);
                } else {
                    reject(data.data.message);
                }
            }
        ).catch(function (error) {
            console.log(error);
            reject(error);
        });
    })
}


function create_user(username,password) {
    return{
        email:username,
        password: password
    }
}

