import axios from "axios";

export class RequestHandler {
    constructor() {
        let options = {
            baseURL: "http://localhost:3001",
            headers: {
                "Content-type": "application/json",
            },
        };
        this.axiosInstance = axios.create(options);
    }
}