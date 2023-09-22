import axios from "axios";

const axiosInstance  = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 30000,
    timeoutErrorMessage: "Server timed out...",
    headers: {
        "Content-Type": "application/json"
    }
})


// axiosInstance.interceptors.request.use()
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    }, 
    (exception) => {
        if(exception.response.status === 401){
            // login screen
            throw exception
            // console.log("Interception: 401", exception)
        } else if(exception.response.status === 404){
            // redirect => 404 not found page
            console.log("Interception: 404", exception)
        } else if(exception.response.status === 403){
            // redirect => access denied
            console.log("Interception: 403", exception)
        } else if(exception.response.status === 400 || 
            exception.response.status === 422){
            // validation 
            throw exception.response;
        } else {
            throw exception
        }
        console.error("Error: ", exception)
    }
)


export default axiosInstance;