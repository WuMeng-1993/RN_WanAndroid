import axios from 'axios';
import AuthUtil from '../utils/AuthUtil';

const headers = {
    Accept: 'application/json;charset=utf-8',
    'Content-Type': 'multipart/form-data;charset=utf-8',
};
const Base_Url = 'https://www.wanandroid.com/';

export function setAxios() {
    axios.defaults.headers = headers;
    axios.defaults.baseURL = Base_Url;
    axios.defaults.timeout = 6000;

    // 添加请求拦截器
    axios.interceptors.request.use(
        async function (config) {
            // 在发送请求之前做些什么
            const Cookie = await AuthUtil.getCookie();
            if (config.method === 'post') {
                let data = new FormData();
                for (const i in config.data) {
                    data.append(i, config.data[i]);
                }
                config.data = data;
            }

            if (config.url !== 'user/login' && Cookie) {
                config.headers = {Cookie};
            }

            return config;
        },
        function (error) {
            // 对请求错误做些什么
            return Promise.reject(error);
        },
    );
}

