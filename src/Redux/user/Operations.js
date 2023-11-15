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
