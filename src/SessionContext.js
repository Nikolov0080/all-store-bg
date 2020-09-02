import React, { useState, useEffect } from 'react'
import Context from './context/context';
import firebase from 'firebase';
import { Spinner } from 'react-bootstrap';
import './firebase/SDK';

const SessionContext = (props) => {

    const [user, setUser] = useState('GUEST');
    const [loading,setLoading] = useState(true)

    const signIn = (data) => {
        return setUser(data)
    }

    const signOut = () => {
        setUser("GUEST")
    }

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            setUser(user);
            setLoading(false);
        } else {
            setUser(null)
            setLoading(false);
        }
    });

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            </div>
        )
    }

    return (
        <Context.Provider value={{
            user,
            signIn,
            signOut
        }}>

            <div>
                {props.children}
            </div>
        </Context.Provider>
    )
}

export default SessionContext;