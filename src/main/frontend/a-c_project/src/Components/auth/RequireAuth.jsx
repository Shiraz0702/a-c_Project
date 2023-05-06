import React from 'react';
import {Navigate, useLocation} from "react-router-dom";

function RequireAuth({children}) {
    const location=useLocation()
    
    if(!localStorage.getItem("user")){
        return <Navigate to={"/login"} state={{path:location.pathname}}/>
    }
    return children
}

export default RequireAuth;