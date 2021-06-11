import { dispatchAction } from '../../common/utils/Dispatch';
import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT,ERROR } from './actionTypes';
import { fetchApi } from './fetch';
import { LOGIN_URL } from './urls';

export const login = (data) => {

        return async (dispatch) => {
            dispatchAction(IN_PROGRESS,'',dispatch)

            const response = await fetchApi ( LOGIN_URL, data) ;
            console.log( response , "response" )
            if ( response.error == undefined ) {
                if( response.status == 'success' ) {
                    dispatchAction(LOGIN,response,dispatch)
                } else {
                    dispatchAction(LOGIN_ERROR,response,dispatch)
                }} else {
                    dispatchAction(ERROR,response,dispatch)
                }}
};

export const logout = () => {
    return {
        type : LOGOUT
    };
}