import {combineReducers, createStore} from "redux";
import { profileReducer } from "./profile-reducer/profile-reducer";
import {authReducer} from "./auth-reducer/auth-reducer";
import {appReducer} from "./app-reducer/app-reducer";


let rootReducer = combineReducers({
    profile: profileReducer,
    auth:authReducer,
    app:appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
)