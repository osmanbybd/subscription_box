import React, { use } from 'react';
import { AuthContext } from '../provider/AuthCotext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Loading';

const PrivateRoute = ({children}) => {

    const {user,loading} = use(AuthContext)
    const location = useLocation()


    if(loading){
        return <Loading></Loading>
    }

    if(!user){
        return <Navigate state={location?.pathname} to='/auth/login'></Navigate>
    }

    return children;
};

export default PrivateRoute;