const INITIAL_STATE = {
    currentTab: -1
}

const tabReducer = (currentState = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "SET_ACTIVE_TAB": {
            return {
                ...currentState,
                currentTab: payload.currentTab
            }
        }
        default:
            return currentState;
    }
}

export default tabReducer;
