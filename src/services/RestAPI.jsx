import axios from 'axios';
import api from '../config/api';

class RestApi {

    instance = null
    instanceFormData = null

    constructor() {
        this.instance = axios.create({
            baseURL: api.base_url,
            timeout: 50000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.instanceFormData = axios.create({
            baseURL:api.base_url,
            timeout: 50000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }
        });
    }


    static getInstance() {
        if (this.instance == null) {
            this.instance = axios.create({
                baseURL: api.base_url,
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            });
        }
        return this.instance
    }

    static getInstanceFormData() {
        if (this.instanceFormData == null) {
            this.instanceFormData = axios.create({
                baseURL: api.base_url,
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                }
            });
        }
        return this.instanceFormData
    }

}


export default RestApi
