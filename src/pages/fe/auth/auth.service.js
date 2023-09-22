import HTTPService from "../../../services/http.service";

class AuthService extends HTTPService{
    datamap = (data) => {
        const formData = new FormData();
        // object data types
        Object.keys(data).forEach((fieldName) => {
            if(fieldName === 'image' && typeof data[fieldName] === 'object'){
                formData.append('image', data[fieldName], data[fieldName].name)
            } else {
                formData.append(fieldName, data[fieldName])
            }
        })
        return formData;
        
    }

    registerUser = async (data) => {
        try {
            let response = await this.postrequest('/v1/auth/register', data,{file:true})
            return response;
        } catch(exception){
            console.log(exception);
        }
    }

    verifyActivationToken = async (token) => {
        try{
            let response = await this.getRequest('/v1/auth/verify/'+token);
            return response;
        } catch(exception){
            console.log("excpt: ", exception)
        }
    }

    activateAccount = async(data, token) => {
        try{
            let response = await this.postrequest('/v1/auth/active/'+token, data)
            return response;
        } catch(exception){
            console.log("excpt: ", exception)
            
            throw new Error("Error while submitting account activation")
        }
    }

    loginProcess = async(data) => {
        try{
            let response = await this.postrequest('/v1/auth/login', data)
            return response;
        } catch(err){
            
            throw new Error(err.data.msg)
        }
    }
    getLoggedInuser = async () => {
        try {
            let userDetail = await this.getRequest('/v1/auth/me', {auth: true})
            return userDetail;
        } catch(exception) {
            throw new Error(exception.data.msg);
        }
    }
}

const authSvc = new AuthService();
export default authSvc;