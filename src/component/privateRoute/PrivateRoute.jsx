import React, { use } from 'react';
import { AuthContext } from '../provider/AuthCotext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {

    const {user} = use(AuthContext)
    const location = useLocation()


    if(!user){
        return <Navigate state={location?.pathname} to='/auth/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;