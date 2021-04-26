import {configuredFetch, configuredRequest} from "../api/http/configuredFetch";
import {fetchUserError, fetchUserPending, fetchUserSuccess} from "./user.actions";

export const fetchFoldersPending = () => {
    return {
        type: 'FETCH_FOLDERS_PENDING'
    };
};

export const fetchFoldersSuccess = (folder) => {
    return {
        type: 'FETCH_FOLDERS_SUCCESS',
        payload: folder
    };
};

export const fetchFoldersError = () => {
    return {
        type: 'FETCH_FOLDERS_ERROR'
    };
};
export const clearFolders = () => {
    return {
        type: 'CLEAR_FOLDERS'
    };
};
export const fetchLoadFolders = (userId) => {
    return dispatch => {
        dispatch(fetchFoldersPending());
        const request = configuredFetch(`/folder/${userId}/get_all`,
            'GET',
            {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }).then(res => {
            return res.json();
        }).then(res => {
            if(res === "Unauthorized for this data") {
                console.log("Unauthorized for this data")
                throw new Error();
            }
            dispatch(fetchFoldersSuccess(res));
        }).catch(err => {
            console.log(err)
            dispatch(fetchFoldersError(err));
        });
    };
};
