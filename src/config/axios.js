import axios from "axios";

// const ACCESS_TOKEN_KEY = 'accessToken'

axios.defaults.baseURL = 'http://localhost:3333'

export default () => {
    //REQUEST
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        const token = localStorage.getItem('token')
        if (token){
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

// Add a response interceptor
    axios.interceptors.response.use(function (response) {
        // Do something with response data
        return response;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });
}

