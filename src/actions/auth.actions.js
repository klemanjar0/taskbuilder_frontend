import {configuredRequest} from "../api/http/configuredFetch";
import {fetchUser} from "./user.actions";
import {setToken} from "../store/local.store";

export const fetchLoginPending = () => {
    return {
        type: 'FETCH_LOGIN_PENDING'
    };
};

export const fetchLoginSuccess = (token) => {
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: token
    };
};

export const fetchLoginError = () => {
    return {
        type: 'FETCH_LOGIN_ERROR'
    };
};
export const clearToken = () => {
    return {
        type: 'CLEAR_TOKEN'
    };
};
export const fetchLogin = ({ login, password }) => {
    return dispatch => {
        dispatch(fetchLoginPending());
        const request = configuredRequest('/login',
            'POST',

            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            {
                email: login,
                password: password,
            },)
        fetch(request).then(res => {
            if(res.statusText === "Unauthorized") {
                window.location.href = './';
            }
            return res.json();
        }).then(res => {
            dispatch(fetchLoginSuccess(res));
            setToken(res.token);
        })
            .then(()=>{
            dispatch(fetchUser());
        })
            .catch(err => {
            dispatch(fetchLoginError(err));
        });
    };
};
