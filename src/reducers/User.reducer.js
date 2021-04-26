const INITIAL_STATE = {

}

const userReducer = (currentState = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "FETCH_USER_PENDING":
            return {
                ...currentState,
                fetchUserPending: true
            };
        case "FETCH_USER_SUCCESS":
            return {
                ...currentState,
                user: payload,
                fetchUserError: false,
                fetchUserPending: false
            };

        case "FETCH_USER_ERROR":
            return {
                ...currentState,
                fetchUserError: true,
                fetchUserPending: false
            };
        default:
            return currentState;
    }
}

export default userReducer;
