import axios from "axios";


export function registerUser (username: string, password: string) {
    return axios.post("/api/user", {username: username, password: password});
}