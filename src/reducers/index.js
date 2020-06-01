const Reducer = (state, action) => {

    switch (action.type) {
        case "SIGNIN":
            return {
                ...state,
                isAuthenticated: true,
                email: action.payload
            };

        case "LOGOUT":
            return {
                ...state,
                isAuthenticated: false,
                email: ""
            };

        default:
            return state;
    }
};

export default Reducer;