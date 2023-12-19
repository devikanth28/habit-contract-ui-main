import axios from "axios";

const API_URL = "http://localhost:8082";

export default axios.create({
        baseURL: API_URL,
        headers:{
            "Content-Type":" application/json"
        }
    })

export const REQUEST_METHOD = {
    GET: 'GET',
    POST: 'POST',
}