


const initialState = {}
type profileReducer = typeof initialState
type profileReducerType = {type?:''}

export const profileReducer = (state: profileReducer = initialState, action: profileReducerType): profileReducer => {
    switch (action.type) {

        default:
            return initialState
    }
}


