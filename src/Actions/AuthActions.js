import { BASE_URL, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED } from './types'
import { post } from './API'

export const login = (params) => {
    return (dispatch) => {
        post(BASE_URL + '/login', params, dispatch, LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILED);
    }
}

export const register = (params) => {
    return (dispatch) => {
        post(BASE_URL + '/register', params, dispatch, REGISTER_START, REGISTER_SUCCESS, REGISTER_FAILED);
    }
}