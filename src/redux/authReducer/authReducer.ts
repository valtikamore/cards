import {Dispatch} from "redux";
import {authAPI} from "../../api/auth-api";
import {profileActions} from "../profileReducer/profileReducer";


export const LOGIN_FLOW = 'authReducer/SET-LOGIN' as const;
export const LOADING = 'authReducer/SET-LOADING' as const;
export const ERROR = 'authReducer/SET-ERROR' as const;
export const INFO = 'authReducer/SET-INFO' as const;


type InitialStateType = {
    isLoggedIn: boolean
    loading: boolean
    error: string
}

export const initialState: InitialStateType = {
    isLoggedIn: false,
    loading: false,
    error: '',
}

type PropertiesType<ActionType> = ActionType extends { [key: string]: infer ResponseType } ? ResponseType : never;
type ActionsType = ReturnType<PropertiesType<typeof authActions>>

export const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case LOGIN_FLOW: {
            return ({
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            })
        }
        case LOADING: {
            return ({
                ...state,
                loading: action.payload.loading
            })
        }
        case ERROR: {
            return ({
                ...state,
                error: action.payload.error
            })
        }

        default:
            return state
    }
}

export const authActions = {
    loginFlowAC: (isLoggedIn: boolean) => {
        return ({
            type: LOGIN_FLOW,
            payload: {
                isLoggedIn
            } as InitialStateType,
        })
    },
    loadingAC: (loading: boolean) => {
        return ({
            type: LOADING,
            payload: {
                loading
            } as InitialStateType,
        })
    },
    errorAC: (error: string) => {
        return ({
            type: ERROR,
            payload: {
                error
            } as InitialStateType,
        })
    },
}


export const loginTC = (email: string, password: string, rememberMe?: boolean) => (dispatch: any) => {
    dispatch(authActions.loadingAC(true))
    authAPI.logIn(email, password, rememberMe = true)
        .then(data => {
            dispatch(profileActions.setProfileDataAC(data))
            dispatch(authActions.loginFlowAC(true))
        })
        .catch((error) => {
            dispatch(authActions.loginFlowAC(false))
            dispatch(authActions.errorAC(error.message))
        })
        .finally(() => {
            dispatch(authActions.loadingAC(false))
        })
}
export const LogoutTC = () => (dispatch: any) => {
    dispatch(authActions.loadingAC(true))
    authAPI.logOut()
        .then((data) => {
            dispatch(authActions.loginFlowAC(false))
        })
        .catch((error) => {
            dispatch(authActions.errorAC(error.error))
            dispatch(authActions.loginFlowAC(false))
        })
        .finally(() => {
            dispatch(authActions.loadingAC(false))
        })
}

export const authMeTC = () => (dispatch: Dispatch) => {
    dispatch(authActions.loadingAC(true))
    authAPI.me()
        .then(data => {
            dispatch(profileActions.setProfileDataAC(data))
            dispatch(authActions.loginFlowAC(true))
        })
        .catch(err => {
            dispatch(authActions.errorAC(err.message))
            dispatch(authActions.loginFlowAC(false))
        })
        .finally(() => {
            dispatch(authActions.loadingAC(false))
        })
}


export default authReducer;
