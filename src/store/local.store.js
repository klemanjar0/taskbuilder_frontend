import {setFetchToken} from "../api/http/configuredFetch";

export const setLocalUser = (user) => {
    if(user.name){
        sessionStorage.setItem("user", user);
    }
}
export const setToken = (token) => {
    if(token){
        sessionStorage.setItem("token", token);
        setFetchToken(token);
    }
}
export const clearStorage = () =>{
    sessionStorage.clear();
}
