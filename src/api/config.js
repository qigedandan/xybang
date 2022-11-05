import axios from "axios";

const Http = axios.create({
    baseURL: 'http://121.4.57.111:8086',
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 10000,
})

export default Http