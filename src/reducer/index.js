export const initialState = {
    menuOpened: false,
    selectedMenu: 'home',
    times: [],
    selectedTime: {},
    error: false,
    loading: true,
};
export const actionTypes = {
    SET_MENU_OPENED: "SET_MENU_OPENED",
    SET_SELECTED_MENU: "SET_SELECTED_MENU",
    SET_TIMES: "SET_TIMES",
    SET_SELECTED_TIME: "SET_SELECTED_TIME",
};
const getFirstTimeData = (data) => {
    return data.length > 0 ? data[0] : {};
}
export const reducer = (state , action) => {
    console.log('Action ',action);
    switch(action.type){
        case actionTypes.SET_MENU_OPENED: {
            return {
                ...state,
                menuOpened: action.payload,
            }
        }
        case actionTypes.SET_SELECTED_MENU: {
            return {
                ...state,
                selectedMenu: action.payload,
            }
        }
        case actionTypes.SET_TIMES: {
            return {
                ...state,
                times: action.payload.data,
                selectedTime: getFirstTimeData(action.payload.data),
                error: action.payload.error,
                loading: action.payload.loading,
            }
        }
        case actionTypes.SET_SELECTED_TIME: {
            return {
                ...state,
                selectedTime: action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;