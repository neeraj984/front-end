import axios from 'axios';
import {BASE_URL} from "../utils/config";

export function CreateBooking(userId,packageId,bookingFrom,bookingTo,vehicleId,vehicleName,status,packageName,totalPrice,washStationId,washStationName,isHomePickup,doorstepWash,vehicleLocation){
    return new Promise((resolve,reject)=>
        {
            axios.post(BASE_URL+"booking",create_booking(userId,packageId,bookingFrom,bookingTo,vehicleId,vehicleName,status,packageName,totalPrice,washStationId,washStationName,isHomePickup,doorstepWash,vehicleLocation)).then(
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

function create_booking(userId,packageId,bookingFrom,bookingTo,vehicleId,vehicleName,status,packageName,totalPrice,washStationId,washStationName,isHomePickup,doorstepWash,vehicleLocation) {
    return{
        userId:userId,
        packageId:packageId,
        booking_from:bookingFrom,
        booking_to:bookingTo,
        vehicleId:vehicleId,
        vehicle_name:vehicleName,
        status:status,
        package_name:packageName,
        total_price:totalPrice,
        wash_station_id:washStationId,
        isHomePickup:isHomePickup,
        doorstepWash:doorstepWash,
        vehicleLocation:vehicleLocation
    }
}

export function changePassword(){

}