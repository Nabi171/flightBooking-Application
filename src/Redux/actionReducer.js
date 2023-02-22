import { BOOK, ADD_ROWS, HANDLE_OPTIONCHANGE, ADD_OPTIONS, ADD_OPTIONS2, ADD_OPTIONS3, ADD_OPTIONS5, ADD_OPTIONS4, ADD_ROW } from "./detailcounter/actionTypes";

const initialState = {
    rows: [],
    optionValue: null,
    optionValue2: null,
    optionValue3: null,
    optionValue4: null,
    optionValue5: null,

};

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROW:

            return {
                ...state,
                rows: [...state.rows, action.payload]
            };
        case ADD_OPTIONS:

            return {
                ...state,
                optionValue: action.payload

            };
        case ADD_OPTIONS2:

            return {
                ...state,
                optionValue2: action.payload

            };
        case ADD_OPTIONS3:

            return {
                ...state,
                optionValue3: action.payload

            };
        case ADD_OPTIONS4:

            return {
                ...state,
                optionValue4: action.payload

            };
        case ADD_OPTIONS5:

            return {
                ...state,
                optionValue5: action.payload

            };
        default:
            return state;
    }
}

export default actionReducer;




