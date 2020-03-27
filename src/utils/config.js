export const BASE_URL="http://localhost:3000/api/";

export function getUserRole() {
    let user = sessionStorage.getItem("user");
    if(user != null){
        return  JSON.parse(user).role;
    }else{
        return "GUEST"
    }
}

export function getUserID() {
    let user = sessionStorage.getItem("user");
    if(user != null){
        return  JSON.parse(user).userId
    }else{
        return null
    }
}