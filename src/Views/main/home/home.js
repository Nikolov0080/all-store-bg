import React, { useContext } from 'react'
import ErrorBoundary from '../../../errorBoundaries/errorBoundary';
import Notifications from '../../components/notifications/notifications';
import Context from '../../../context/context';

const Home = ({ location }) => {
    //TODO -- FINISH NOTIFICATIONS!!!
    const context = useContext(Context);
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