import { SET_STATE } from "../types/newsTypes";

const initialState = {
    open: false,
    url: "",
    photo: "",
    selectedIndex: "",
    deleteModal: false,

};


export const newsReducer = (state = initialState, action ) => {
    if (action.type === SET_STATE){
        return {
            ...state,
            ...action.payload
        }
    }
    return state;
};
