import React from "react";

import { Navigate} from "react-router-dom";

const PrivateRoute = ({Component})=>{
    const isAuthenticated = false; // backend will provide this token by sending a fetch req to it

    return isAuthenticated? Component : <Navigate to="/"/>
}

export default PrivateRoute;