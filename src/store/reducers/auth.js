import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null, 
    loading: false,
    regis:null,
    email_link:null,
    isAuthenticated:false,

    
}

const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false,
        isAuthenticated:true
    });

}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false
    });
}

const authLogout = (state, action) => {

    return updateObject(state, {
        token: null,
        error: null, 
        loading: false,
        regis:null,
        email_link:null,
        isAuthenticated:false,
    });
}

const registration = (state, action) => {
    return updateObject(state, {
        email_link: action.email_link,
        error: null,
        loading: false
    });
}

const reg_error = (state, action) => {
    return updateObject(state, {
        regis: action.regis,
        loading: false
    });
}



const LOADER = (state, action) => {
    return updateObject(state, {
        loading: action.loading
    });
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.registration: return registration(state, action);
        case actionTypes.reg_error: return reg_error(state, action);
         case actionTypes.LOADER: return LOADER(state, action);
       
                     
        default:
            return state;
    }
}

export default reducer;
