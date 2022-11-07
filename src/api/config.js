import axios from "axios";

const Http = axios.create({
    baseURL: 'http://121.4.57.111:8086',
    headers:{
        'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 10000,
})

Http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    const token = localStorage.getItem('token')
    config.headers={
        "Content-Type": 'application/json; charset=utf-8',
        'Token' : token
    }
    console.log(config.headers)
    // 一定要return config
    return config
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default Http