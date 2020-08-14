import { SET_LIST, LOADING_END, LOADING_START, UPDATE_LIST, DELETE_ITEM, DELETE_LIST, UPDATE_ITEM, ADD_LIST_LOCAL } from '../Actions/types';
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

        case DELETE_ITEM:
            const del = action.payload;
            let arr1 = state.list.filter(function (item) {
                return item !== del;
            });
            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr1));

            return {
                ...state,
                list: arr1,
            };
        case DELETE_LIST:
            let arr2 = [];
            AsyncStorage.removeItem(ADD_LIST_LOCAL);

            return {
                ...state,
                list: arr2,
            };

        case UPDATE_ITEM:
            //const upd = action.payload;
            let arr3 = state.list.slice();
            //arr3.push(upd);

            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(arr3));

            return {
                ...state,
                list: arr3,
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