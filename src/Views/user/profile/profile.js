import React from 'react'
import {Button} from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';

const Profile = () => {
    return (
        <div>
            Profile
            <Button onClick={signOut}>sign out</Button>
        </div>
    )
}

export default Profile
