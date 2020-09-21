import React, { useContext, useEffect, useState } from 'react'
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import Context from '../../../context/context';
import LoggedView from './loggedView';
import GuestView from './guestView';
import Loading from '../../components/loading/loading';

const Home = (props) => {

    const context = useContext(Context);
    const [auth, setAuth] = useState(false)

    useEffect(() => {
        setAuth(context.user);
    }, [context])
  
    if (auth === "GUEST") {
        return (
            <Loading />
        )
    }

    if(auth === null){
        return(
            <ErrorBoundary>


            <GuestView />

        </ErrorBoundary>

        )
    }

    return (
        <ErrorBoundary>

            <LoggedView />


        </ErrorBoundary>

    )
}

export default Home;