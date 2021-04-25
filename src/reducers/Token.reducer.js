const INITIAL_STATE = {

}

const tokenReducer = (currentState = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "FETCH_LOGIN_PENDING":{
            return {
                ...currentState,
                fetchLoginPending: true
            };
        }
        case "FETCH_LOGIN_SUCCESS":{
            return {
                ...currentState,
                token: payload.token,
                fetchLoginError: false,
                fetchUserPending: false
            };
        }
        case "FETCH_LOGIN_ERROR":{
            return {
                ...currentState,
                fetchLoginError: true,
                fetchLoginPending: false
            };
        }
        case "SET_TOKEN":
            return {
                ...currentState,
                token: payload.token
            };
        case "CLEAR_TOKEN":
            return {};
        default:
            return currentState;
    }

};

export default tokenReducer;
