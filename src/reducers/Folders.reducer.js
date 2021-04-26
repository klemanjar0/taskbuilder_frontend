const INITIAL_STATE = {
    data: []
}

const foldersReducer = (currentState = INITIAL_STATE, {type, payload}) => {
    switch (type) {
        case "FETCH_FOLDERS_PENDING":{
            return {
                ...currentState,
                fetchFoldersPending: true
            };
        }
        case "FETCH_FOLDERS_SUCCESS" :{
            return {
                ...currentState,
                data: payload,
                fetchFoldersError: false,
                fetchFoldersPending: false
            };
        }
        case "FETCH_FOLDERS_ERROR" :{
            return {
                ...currentState,
                fetchFoldersError: true,
                fetchFoldersPending: false
            };
        }
        case "CLEAR_FOLDERS":{
            return {};
        }
        default:
            return currentState;
    }
}

export default foldersReducer;
