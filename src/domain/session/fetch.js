import axios from 'axios';
import { LOGIN_URL } from './urls';

export const fetchApi = async (datas) => {
    try {
        const response = await axios.post(LOGIN_URL, datas);
           console.log(response.status,"res")
            if (response.status == '200') {
                return response.data;
            } else {
                return {
                    error: "Other Errors"
                }

            }
        }catch(error) {
            console.log(error,"eee")
            if(error.response.status=='404'){
                return {
                    error: "File Not Found"
                }
            }
        }
}