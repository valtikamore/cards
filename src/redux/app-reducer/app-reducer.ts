const initialState = {}
type appReducerType = typeof initialState

type appActionsType = {type?:''}

export const appReducer = (state: appReducerType = initialState, action: appActionsType): appReducerType => {
    switch (action.type) {

        default:
            return initialState
    }
}