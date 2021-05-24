import {combineReducers, createStore} from "redux";


let rootReducer = combineReducers({
    profilePage: profileReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(
    rootReducer,
)