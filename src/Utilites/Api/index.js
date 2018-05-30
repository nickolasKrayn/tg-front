import hostConfig from './../../Configs/host';

class Api {
    constructor() {
        this.host = `${hostConfig.apiProtocol}://${hostConfig.apiUrl}/${hostConfig.apiPrefix}`;
    }

    isAuthorized() {
        var token = window.localStorage.getItem('token');

        return token == undefined;
    }

    async get(method, params) {
        let reqUrl = `${this.host}/${method}`;
        if (params !== undefined) {
            reqUrl += `/${params}`;
        }

        let options = {
            method: 'GET'
        };

        console.log(reqUrl);
        return;
        if (this.isAuthorized()) {
            options.headers = {
                'Authorization': 'Bearer ' + this.token
            };
        }

        return await fetch(reqUrl, options);
    }

    async post(method, params) {
        let reqUrl = `${this.host}/${method}`;
        let data = JSON.stringify(params);

        let options = {
            method: 'POST',
            body: data
        };

        options.headers = {
            'Content-Type': 'application/json',
        };

        if (this.isAuthorized()) {
            options.headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + this.token,
            };
        }

        return await fetch(reqUrl, options);
    }
}

const api = new Api();

export default api;