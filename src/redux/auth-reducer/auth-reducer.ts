

const initialState = {}
type authReducerType = typeof initialState

type authActionsType = {type?:''}

export const authReducer = (state: authReducerType = initialState, action: authActionsType): authReducerType => {
    switch (action.type) {

        default:
            return initialState
    }
}
