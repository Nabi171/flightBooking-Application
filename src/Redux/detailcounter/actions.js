import { BOOK, ADD_OPTIONS, ADD_OPTIONS2, ADD_OPTIONS3, ADD_OPTIONS4, ADD_OPTIONS5, ADD_ROW } from "./actionTypes";

export const book = (selectedValue) => {
    return {
        type: BOOK,
        payload: selectedValue,
    }
}

export const addOptions = (options) => {
    return {
        type: ADD_OPTIONS,
        payload: options,
    };
};
export const addOptions2 = (options) => {
    return {
        type: ADD_OPTIONS2,
        payload: options,
    };
};
export const addOptions3 = (options) => {
    return {
        type: ADD_OPTIONS3,
        payload: options,
    };
};
export const addOptions4 = (options) => {
    return {
        type: ADD_OPTIONS4,
        payload: options,
    };
};
export const addOptions5 = (options) => {
    return {
        type: ADD_OPTIONS5,
        payload: options,
    };
};
export const addrows = (row) => {
    return {
        type: ADD_ROW,
        payload: row,
    };
};



