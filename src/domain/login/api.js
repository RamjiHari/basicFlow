import axios from 'axios';

export const fetchApi = async (url,data) => {
    try {
        const response = await axios.post(url, data);
            if (response.status == '200') {
                return response.data;
            } else {
                return {
                    error: "Other Errors"
                }
            }
        } catch( error ) {
            console.log(error,"eee")
            if ( error.response.status == '404' ){
                return {
                    error: "File Not Found"
                }
            }
        }
}