import axiosInstance from "./axios.service";

class HTTPService{
    headers = {};

    setHeader = (config) => {
        if(config.file){
            this.headers = {
                ...this.headers,
                "Content-Type": "multipart/form-data"
            }
        }
        // TODO: login 
        if(config.auth){
            let token = localStorage.getItem('accessToken');
            this.headers = {
                ...this.headers,
                "Authorization": "Bearer "+token
            }
        }
    }

    postrequest = async (url, payload, config = {} ) => {
        try{
            this.setHeader(config);
            
            let response = await axiosInstance.post(url, 
                payload, 
                {headers: this.headers})
            // {.... data: API Response}
            return response.data
        } catch(exception){
            throw exception;
        }
    }

    getRequest = async (url, config = {}) => {
        try{
            this.setHeader(config);
            
            let response = await axiosInstance.get(url, 
                {headers: this.headers})
            
            return response.data
        } catch(exception){
            throw exception;
        }
    }
}

export default HTTPService;