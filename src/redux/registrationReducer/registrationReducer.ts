import {authAPI} from "../../api/auth-api";

export const SUCCESS = 'registrationReducer/SUCCESS' as const
export const LOADING = 'registrationReducer/LOADING'as const
export const ERROR = 'registrationReducer/ERROR'as const

type addedUserType = {
        created: string
        email: string
        isAdmin: boolean
        name: string
        publicCardPacksCount: number
        rememberMe: boolean
        updated: string
        verified: boolean
        __v: number
        _id: string
}
type InitialStateType = {
    loading:boolean
    error:string
    registrationSuccess: boolean
}
const initialState = {
    registrationSuccess:false,
    loading:false,
    error:''
}
type PropertiesType<ActionType> = ActionType extends {[key: string]: infer ResponseType } ? ResponseType : never;
type ActionsType = ReturnType<PropertiesType<typeof actions>>

const registrationReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {

        case SUCCESS: {
            return {
                ...state,
                registrationSuccess: action.payload.registrationSuccess
            }
        }
        case LOADING: {
            return {
                ...state,
                error:'',
                loading:action.payload.loading,
                registrationSuccess:false
            }
        }
        case ERROR: {
            return {
                ...state,
                error:action.payload.error,
                loading:false,
                registrationSuccess:false
            }
        }
        default:
            return state
    }
}


export const actions = {
    registrationAC: (registrationSuccess:boolean) => {
        // data:addedUserType,
        return ({
            type: SUCCESS,
            payload: {
                // data,
                registrationSuccess: registrationSuccess
            }
        })
    },
    registrationLoadingAC: (loading:boolean) => {
        return({
            type:LOADING,
            payload : {
                loading
            }
        })
    },
    registrationErrorAC: (error:string) => {
        return({
            type:ERROR,
            payload : {
                error
            }
        })
    }

}


export const RegistrationTC = (email: string, password: string) => (dispatch: any) => {

        dispatch(actions.registrationLoadingAC(true))
        authAPI.registration(email, password)
            .then((data) => {
                dispatch(actions.registrationAC(true))
                dispatch(actions.registrationLoadingAC(false))
            })
            .catch((error) => {
                dispatch(actions.registrationErrorAC('error'))
                console.log('error')
            })

}

export default registrationReducer;
