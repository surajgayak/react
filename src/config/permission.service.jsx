import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router-dom";
import authSvc from "../pages/fe/auth/auth.service";
import { useDispatch } from "react-redux";
import { setUser as setUserState } from "../reducers/user.slicer";

const PrivateLayout = ({component, role}) => {
    let [user, setUser] = useState();
    let [loading, setLoading] = useState(true);

    let token = localStorage.getItem("accessToken") ?? null;
    let navigate = useNavigate();
    let dispatch = useDispatch()


    const getLoggedInuser = useCallback(async () => {
        // token 
        try {
            // token 
            let user = await authSvc.getLoggedInuser()
            
            if(user) {
                setUser(user.data);
                dispatch(setUserState(user.data))
                setLoading(false);
            } else {
                throw new Error("Error in token")    
            }
        } catch(exception) {
            localStorage.removeItem("accessToken");
            toast.error("Error validating token")
            navigate('/')
        }
    }, [])

    useEffect(() => {
        if(token){
            getLoggedInuser();
        } else {
            navigate("/login");
        }
    }, [])

    if(loading){
        return <>Loading...</>
    } else {
        if(user.role === role) {
            return component;
        } else {
            toast.warn("You do not have permission to access this panel!!")
            return <Navigate to={"/"+user.role}/>
        }
    }
    
}

export default PrivateLayout;