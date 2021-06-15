import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT,ERROR } from './actionTypes';
import { fetchApi } from './api';
import { LOGIN_URL } from './urls';

export const login = (data) => {

        return async (dispatch) => {
            dispatch ({
                type : IN_PROGRESS ,
            })
            const response = await fetchApi ( LOGIN_URL, data) ;
            console.log( response , "response" )
            if ( response.error == undefined ) {
                if( response.status == 'success' ) {
                    dispatch ({
                        type : LOGIN ,
                        payload : response ,
                    })
                } else {
                    dispatch ({
                        type : LOGIN_ERROR ,
                        payload : response ,
                    })
                }} else {
                    dispatch ({
                        type : ERROR ,
                        payload : response ,
                    })
                }}
};

export const logout = () => {
    return {
        type : LOGOUT
    };
}