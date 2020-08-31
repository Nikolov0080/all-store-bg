import React from 'react';

const Context = React.createContext({
    user: null,
    signIn: () => { },
    signOut: () => { }
});

export default Context;