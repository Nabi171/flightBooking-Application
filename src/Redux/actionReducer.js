import { BOOK, ADD_ROWS, HANDLE_OPTIONCHANGE, ADD_OPTIONS, ADD_OPTIONS2 } from "./detailcounter/actionTypes";

const initialState = {
    // value: [],
    optionValue: null,
    optionValue2: null,

};

const actionReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ROWS:

            return {
                ...state,
                value: [...state.items, action.payload]
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
        default:
            return state;
    }
}

export default actionReducer;




