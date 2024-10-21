// src/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    token: null,
    projects: [],
    experiences: [],
    tecnos: [],
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                token: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                token: null,
                projects: [],
                experiences: [],
                tecnos: [],
            };
        case 'FETCH_PROJECTS':
            return {
                ...state,
                projects: action.payload,
            };
            
        case 'FETCH_EXPERIENCES':
            return {
                ...state,
                experiences: action.payload,
            };
            case 'FETCH_TECNOS':
            return {
                ...state,
                tecnos: action.payload,
            };
        default:
            return state;
    }
};

export default authReducer;
