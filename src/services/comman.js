import axios from "axios";

const httpRequest = async ({method,url,headers,data}) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = await axios.request({
                method,
                url,
                headers:{
                    // Authorization:getCurrentUser("authToken"),
                    ...headers
                }, 
                data
            });
            resolve(res);
        } catch (error) {
            reject(error);  
        }
    })
};  


export default httpRequest
