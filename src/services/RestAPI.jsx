import axios from 'axios';

class RestApi {

    instance = null
    instanceFormData = null

    constructor() {
        this.instance = axios.create({
            baseURL: ``,
            timeout: 50000,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        this.instanceFormData = axios.create({
            baseURL: ``,
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
                baseURL: ``,
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
                baseURL: ``,
                timeout: 50000,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }
            });
        }
        return this.instanceFormData
    }

}


export default RestApi
