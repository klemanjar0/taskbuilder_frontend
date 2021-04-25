import {configuredRequest} from "../api/http/configuredFetch";

export const fetchLoginPending = () => {
    return {
        type: 'FETCH_LOGIN_PENDING'
    };
};

export const fetchLoginSuccess = (user) => {
    return {
        type: 'FETCH_LOGIN_SUCCESS',
        payload: user
    };
};

export const fetchLoginError = () => {
    return {
        type: 'FETCH_LOGIN_ERROR'
    };
};

export const fetchLogin = ({ login, password }) => {
    return dispatch => {
        fetchLoginPending();
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
        }).catch(err => {
            dispatch(fetchLoginError(err));
        });
    };
};
