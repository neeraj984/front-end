import axios from 'axios';
import {BASE_URL} from "../utils/config";

export function register(name,gender,email,phone,password){
    return new Promise((resolve,reject)=>
        {
            axios.post(BASE_URL+"users",register_user(name,gender,email,phone,password)).then(
                function (data) {
                    if(data.data.status === true){
                        resolve(data.data.message);
                    }else{
                        reject(data.data.message);
                    }
                }
            ).catch(function (error) {
                reject(error);
            });
        }
    )
}

function register_user(name,gender,email,phone,password) {
    return{
        name:name,
        gender:gender,
        email:email,
        phone:phone,
        role:"END_USER",
        password:password
    }
}

export function changePassword(){

}