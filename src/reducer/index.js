export const initialState = {
    menuOpened: false,
    selectedMenu: 'home',
    times: [],
};
export const actionTypes = {
    SET_MENU_OPENED: "SET_MENU_OPENED",
    SET_SELECTED_MENU: "SET_SELECTED_MENU",
    SET_TIMES: "SET_TIMES",
};

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
                times: action.payload,
            }
        }
        default: return state;
    }
}

export default reducer;