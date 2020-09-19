import React from 'react'
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import Notifications from '../../components/notifications/notifications';

const Home = (props) => {

const notification = props.location.state;


    return (
        <ErrorBoundary>
            
            <Notifications type="info" message="dsdsdo" show={true}/>

        </ErrorBoundary>

    )
}

export default Home;