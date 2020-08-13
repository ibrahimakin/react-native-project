import { SET_LIST, LOADING_END, LOADING_START, UPDATE_LIST, ADD_LIST_LOCAL } from '../Actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
    list: [],
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOADING_START:
            return {
                ...state,
                loading: action.payload,
            };
        case LOADING_END:
            return {
                ...state,
                loading: action.payload,
            };
        case UPDATE_LIST:
            const obj = action.payload;
            let arr = state.list.slice();
            arr.push(obj);

            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr));

            return {
                ...state,
                list: arr,
            };

        case SET_LIST:
            return {
                ...state,
                list: action.payload,
            };

        default:
            return state;
    }
};