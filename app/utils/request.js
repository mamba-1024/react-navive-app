import axios from 'axios';
import lodash from 'lodash';

/**
 * 请求函数 request
 * @param mothod String 请求方式
 * @param data Object 请求参数
 * @param url String 请求的URL地址
 * @param headers Object 设置请求头
 * @return { Promise }
 */
export default function request({ method, data, url, headers }) {

    //调用下面封装的fetch函数
    return fetch({ method, data, url, headers }).then((response) => {
        const { statusText, status } = response;
        let data = response.data;

        if (Number(status) == 200) {
            return {
                success: true,
                message: statusText,
                statusCode: status,
                ...data
            }
        } else {
            message.error(statusText)
        }

    }).catch((error) => {

        const { response } = error;

        let msg;
        let statusCode;

        if (response && response instanceof Object) {
            const { data, statusText } = response;
            statusCode = response.status;
            msg = data.msg || statusText;

        } else {
            // 没有返回
            statusCode = 600;
            msg = error.msg || 'Network Error';
        }

        return { success: false, statusCode, message: msg }
    })
}


const fetch = ({ method, data, url, headers }) => {
    method = method || 'get';
    const cloneData = lodash.cloneDeep(data);

    axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    /***
     * 设置请求token 
     * ***/
    // const AUTH_TOKEN = localStorage.getItem('token');

    // axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
    if (headers) {
        if (JSON.stringify(headers) !== "{}") {
            for (let key in headers) {
                axios.defaults.headers.common[key] = headers[key];
            }
        }
    }

    switch (method.toLowerCase()) {
        case 'get':
            return axios.get(url, {
                params: cloneData
            })
        case 'delete':
            return axios.delete(url, {
                data: cloneData
            })
        case 'post':
            return axios.post(url, cloneData)
        case 'put':
            return axios.put(url, cloneData)
        case 'patch':
            return axios.patch(url, cloneData)
        default:
            return axios({ method, data, url })
    }
}
