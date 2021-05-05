import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './App.reducer';
import userReducer from "./User.reducer";
import tokenReducer from "./Token.reducer";
import foldersReducer from "./Folders.reducer";
import tabReducer from "./Tab.reducer";


export default combineReducers({
    app: appReducer,
    user: userReducer,
    token: tokenReducer,
    folders: foldersReducer,
    tabs: tabReducer,
    routing: routerReducer
})
