import React, { useContext } from 'react';
import { Redirect, Route } from "react-router-dom";
import UserContext from '../context/context';

const ProtectedRouteGuest = ({ path, component }) => {

    const isAuth = !!useContext(UserContext).user;

    if (isAuth) {
        return (
            <Route path={path} component={component} />
        );
    } else {
        return (
            <Redirect to={{ pathname: '/' }} />
        )
    }
};

export default ProtectedRouteGuest;