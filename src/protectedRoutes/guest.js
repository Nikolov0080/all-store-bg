import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import UserContext from '../context/context';

const ProtectedRouteGuest = ({ path, component }) => {

    const isAuth = !!useContext(UserContext).user;

    return (
        <div>
            {isAuth
                ? <Route path={path} component={component} />
                : <Redirect to={{ pathname: '/' }} />
            }
        </div>
    )
};

export default ProtectedRouteGuest;