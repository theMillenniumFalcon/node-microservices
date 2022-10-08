import { SET, CLEAR } from '../constants/actionTypes/session'

export const setSession = session => {
    return { session, type: SET }
}

export const clearSession = () => {
    return { type: CLEAR }
}