import {DOMAIN} from '../api/http/fetchConfig'
import {configuredRequest} from "../api/http/configuredFetch";

export const fetchUserPending = () => {
    return {
        type: 'FETCH_USER_PENDING'
    };
};

export const fetchUserSuccess = (user) => {
    return {
        type: 'FETCH_USER_SUCCESS',
        payload: user
    };
};

export const fetchUserError = () => {
    return {
        type: 'FETCH_USER_ERROR'
    };
};

export const fetchUser = () => {
    return dispatch => {
        dispatch(fetchUserPending());
        const request = configuredRequest('/me',
            'GET',

            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            });
        fetch(request).then(res => {
            if(res.statusText === "Unauthorized") {
                window.location.href = './';
            }
            return res.json();
        }).then(res => {
            dispatch(fetchUserSuccess(res));
        }).catch(err => {
            dispatch(fetchUserError(err));
        });
    };
};

