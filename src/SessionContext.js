import React, { useState } from 'react'
import Context from './context/context';

const SessionContext = (props) => {

    const [user, setUser] = useState('GUEST_USER')

    const signIn = (userData) => {
        return setUser("LOGGED")
    }

    const signOut = () => {
        setUser("GUEST_USER")
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

export default SessionContext
