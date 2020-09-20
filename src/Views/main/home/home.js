import React from 'react'
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import Notifications from '../../components/notifications/notifications';

const Home = ({ location }) => {
    const notificationData = location.state;

    return (
        <ErrorBoundary>
            sa
            {location.state ?
                <Notifications
                    type={notificationData.type}
                    message={notificationData.message} show={true} />
                : ''
            }

        </ErrorBoundary>

    )
}

export default Home;