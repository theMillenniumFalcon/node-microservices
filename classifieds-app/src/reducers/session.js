import { DEFAULT_STATE } from "../constants/default"
import { SET, CLEAR } from "../constants/actionTypes/session"

export const sessionReducer = (state = DEFAULT_STATE, action = {}) => {
    switch (action.type) {
        case SET:
            return action.session
        case CLEAR:
            return null
        default:
            return state
    }
}