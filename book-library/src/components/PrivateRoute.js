import React from "react";

import { Navigate} from "react-router-dom";

const PrivateRoute = ({Component})=>{
    const isAuthenticated = false;

    return isAuthenticated? Component : <Navigate to="/"/>
}

export default PrivateRoute;