import axios from 'axios';
import * as actionTypes from './actionTypes';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


export const authStart = () => {
    console.log('start')
    return {
        type: actionTypes.AUTH_START
    }
}

export const authSuccess = token => {
    console.log('sucess')
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}

export const authFail = error => {
    console.log('fail')
debugger;
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {
    console.log('logout')
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    storage.removeItem('persist:root')
    return {
        type: actionTypes.AUTH_LOGOUT,

    };
}

export const checkAuthTimeout = expirationTime => {
    console.log('authchecktime')
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}


export const authLogin = (email, password) => {
    console.log('authLogin call')
    return dispatch => {
        dispatch(authStart());
        var instance = axios.create({
            method: 'post',
            headers: { "access-control-allow-origin" : "*",
            "Content-type": "application/json; charset=UTF-8"
         },
            timeout: 60000,
        });
          instance.post(actionTypes.BASE_URL+'/api/Account/Login', {
//  axios.post('/rest-auth/login/', {
            userName: email,
            password: password
        })
            .then(res => {
                debugger
                const token = res.data.token.token;               
                // const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
                
            })
            .catch(err => {
                debugger

                dispatch(authFail(err))
            })
    }
}
export const registration = email_link => {
    console.log('registration')
    return {
        type: actionTypes.registration,
        email_link: email_link
    }
}

export const reg_error = regis => {
    console.log('reg_error')
    return {
        type: actionTypes.reg_error,
        regis: regis
    }
}



export const authCheckState = () => {
    console.log('authcheck')
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            }
        }
    }
}


// loader 
export const loader_id = loading => {
    console.log('loader id' +loading )
    return {
        type: actionTypes.LOADER,
        loading: loading,
        
    }
}


export  const  loader = (loading) => {
    console.log('loader call')
    return  dispatch => {
        dispatch(loader_id(loading))

    }
}
