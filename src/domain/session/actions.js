import { LOGIN, LOGIN_ERROR, IN_PROGRESS, LOGOUT,ERROR } from './actionTypes';
import { fetchApi } from './fetch';
import { LOGIN_URL } from './urls';
export const login = (username,passord) => {
    const datas ={
        "email": username,
        "password": passord
    }
        return async (dispatch) => {
            dispatch({
                type: IN_PROGRESS,
            });
            // simulating api call. call the api here and use that response
            const response = await fetchApi(LOGIN_URL,datas);
            if (response.error==undefined) {
                if(response.status=='success'){
                    dispatch({
                        type: LOGIN,
                        payload: response,
                    })
                    return;
                }else{
                    dispatch({
                        type: LOGIN_ERROR,
                        payload: response,
                    })
                    return;
                }

                } else {

                    dispatch({
                        type: ERROR,
                        payload: response,
                    })
                    return;
                }

        }
};

export const logout = () => {
    return {
        type: LOGOUT
    };
}