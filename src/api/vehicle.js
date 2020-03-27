import axios from 'axios';
import {BASE_URL} from "../utils/config";




export function vehicle (vehicleObj) {
    return new Promise((resolve, reject) => {
        axios.post(BASE_URL + "vechile", vehicleObj).then(
            function (data) {
                console.log(data.data)
                if (data.data.status == true) {
                    resolve(data.data.message)
                } else {
                    reject(data.data.message)
                }
            }
        ).catch(function (error) {
            console.log(error)
            reject(error)


        });
    })
}

export function register_vehicle(name,companyName,description,registrationNumber) {
    return {
        name: name,
        companyName:companyName,
        description:description,
        registrationNumber:registrationNumber

    }
}
