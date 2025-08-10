import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const WithAuthProtection =(WrappedComponent) =>{
    return function ProtectedComponent(Props){
        const navigate = useNavigate()

        useEffect(()=>{
            const isLogeIn = localStorage.getItem("token");
            if(!isLogeIn){
                navigate("/login")
            }
        },[navigate]);

        const isLogeIn = localStorage.getItem("token");
        return isLogeIn ? <WrappedComponent {...Props}/> : null;
    }

}

export default WithAuthProtection;