import axios from 'axios';

export const fetchApi = async (url,datas) => {
    try {
        const response = await axios.post(url, datas);
            console.log(response.status,"res")
            if (response.status == '200') {
                return response.data;
            } else {
                return {
                    error: "Other Errors"
                }

            }
        }catch(error) {
            if(error.response.status=='404'){
                return {
                    error: "File Not Found"
                }
            }
        }
}