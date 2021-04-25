import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import appReducer from './App.reducer';
import userReducer from "./User.reducer";
import tokenReducer from "./Token.reducer";


export default combineReducers({
    app: appReducer,
    user: userReducer,
    token: tokenReducer,
    routing: routerReducer
})
