import axios from "axios";
import {BASE_URL} from "../utils/config";

export function getUserInformation() {
    return new Promise((resolve,reject)=>
        {
            let data = sessionStorage.getItem("user");
            if(data!=null) {
                let user = JSON.parse(data);
                axios.get(BASE_URL + "users/" + user.user_id).then(
                    function (data) {
                        console.log(data.data)
                        if (data.status === true) {
                            resolve(data.data);
                        } else {
                            reject(data.message);
                        }
                    }
                ).catch(function (error) {
                    reject(error);
                });
            }
        }
    )
}