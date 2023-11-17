import RestApi from "../../services/RestAPI";

export const login = (data) => (dispatch) => {
    try {
        return RestApi.getInstance().post('users/auth/login', data)
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};
export const signUp = (data) => (dispatch) => {
    try {
        return RestApi.getInstance().post('users/auth/login', data)
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};
export const socialLogin = (data) => (dispatch) => {
    try {
        return RestApi.getInstance().post('/auth/google-login/', data)
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};
export const getTextFromImage = (data) => (dispatch) => {
    try {
        return RestApi.getInstance().post('/auth/google-login/', data)
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                console.log(err);
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};
export const uploadImage = (accessToken,data) => (dispatch) => {
    try {

        let formData = new FormData()
        formData.append('file',data)

    
        return RestApi.getInstanceFormData().post('/imports/image_to_text/', formData , {
            headers: {
               Authorization:'Bearer '+accessToken
           } 
        })
            .then((json) => {
                return json.data;
            })
            .catch((err) => {
                console.log(err);
                return undefined;
            });
    } catch (error) {
        return undefined;
    }
};
