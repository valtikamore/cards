import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer/authReducer';
import profileReducer from './profileReducer/profileReducer';
import registrationReducer from './registrationReducer/registrationReducer';
import restorePassReducer from './restorePassReducer/restorePassReducer';
import changePassReducer from './changePassReducer/changePassReducer';
import appReducer from "./appReducer/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

export const rootReducer = combineReducers({
    authReducer,
    profileReducer,
    registrationReducer,
    restorePassReducer,
    changePassReducer,
    appReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer, applyMiddleware(thunk));



export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));