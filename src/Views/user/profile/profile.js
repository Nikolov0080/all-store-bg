import React from 'react'
import {Button,Card} from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';

const Profile = () => {
    return (
        <div>
            Profile
            <Card>
                <Card.Title className="text-center">
                    Sell you stuff
                </Card.Title>
            </Card>
            <Button onClick={signOut}>sign out</Button>
        </div>
    )
}

export default Profile;