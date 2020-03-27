import axios from "axios";
import {BASE_URL} from "../utils/config";

export function getProduct(){
    return new Promise((resolve,reject)=>
        {
            axios.get(BASE_URL+"product").then(
                function (data) {
                    if(data.data.status === true){
                        resolve(data.data.data);
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