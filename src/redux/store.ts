import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './authReducer/authReducer';
import profileReducer from './profileReducer/profileReducer';
import registrationReducer from './registrationReducer/registrationReducer';
import restorePassReducer from './changePassword/restorePassReducer/restorePassReducer';
import changePassReducer from './changePassword/changePassReducer/changePassReducer';
import appReducer from "./appReducer/appReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {packsReducer} from "./PacksReducer/Packs-reducer";

export const rootReducer = combineReducers({
    authReducer,
    profileReducer,
    registrationReducer,
    restorePassReducer,
    changePassReducer,
    appReducer,
    cardsReducer: packsReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

// export const store = createStore(rootReducer, applyMiddleware(thunk));



export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk),
    // other store enhancers if any
));