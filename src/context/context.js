
import React from 'react';

const Context = () => {

    const Context = React.createContext({
        user: null,
        signIn: () => { },
        signOut: () => { }
    });

}

export default Context;