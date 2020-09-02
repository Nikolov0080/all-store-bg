import firebase from 'firebase';
import './SDK';

const userStatus = async() => {

    let userState = '';
//TODO
   await firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            userState = user
        } else {
            userState = null
        }
    })

    return userState
}

export default userStatus;