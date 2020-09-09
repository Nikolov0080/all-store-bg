import React from 'react'
import {Button,Card} from 'react-bootstrap';
import signOut from '../../../firebase/models/user/signOut/signOut';
import { Link } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            Profile
            <Card>
                    <Button size="lg"><Link to={'/add-product'}>Sell on All-store <h1>+</h1></Link></Button>  
            </Card>


            
            <Button onClick={signOut}>sign out</Button>
        </div>
    )
}

export default Profile;