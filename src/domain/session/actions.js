import { config } from '../../../config';
import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT,ERROR , VALIDATION ,VALIDATION_ERROR } from './actionTypes';
import { fetchApi } from './api';

export const login = (data) => {

        return async (dispatch) => {
            dispatch ({
                type : IN_PROGRESS ,
            })
            const response = await fetchApi ( config.API_HOST_NAME+'login', data) ;
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

export const validation =  (password) =>{
    return async (dispatch) => {
        const response = await fetchApi ( config.API_HOST_NAME+'validate', {password:password}) ;
        console.log( response , "response" )
        if ( response.error == undefined ) {
            if( response.status == 'success' ) {
                console.log("1")
                dispatch ({
                    type : VALIDATION ,
                    payload : response ,
                })
            } else {
                dispatch ({
                    type : VALIDATION_ERROR ,
                    payload : response ,
                })
            }} else {
                dispatch ({
                    type : ERROR ,
                    payload : response ,
                })
            }
    }
}

export const logout = () => {
    return {
        type : LOGOUT
    };
}