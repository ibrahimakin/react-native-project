import { UPDATE_LIST, SET_LIST, ADD_LIST_LOCAL, DELETE_LIST, DELETE_ITEM, UPDATE_ITEM } from './types'
import AsyncStorage from '@react-native-community/async-storage';

export const updateList = (payload) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_LIST, payload })
    }
}
export const deleteList = () => {
    return (dispatch) => {
        dispatch({ type: DELETE_LIST })
    }
}
export const deleteItem = (payload) => {
    return (dispatch) => {
        dispatch({ type: DELETE_ITEM, payload })
    }
}
export const updateItem = (payload) => {
    return (dispatch) => {
        dispatch({ type: UPDATE_ITEM, payload })
    }
}
export const getList = () => {
    return async (dispatch) => {
        let data = await AsyncStorage.getItem(ADD_LIST_LOCAL)
        if (data) {
            dispatch({ type: SET_LIST, payload: JSON.parse(data) });
        }
    }
}