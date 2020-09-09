import firebase from 'firebase';

const reg = (email, password, username) => {

    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

        var errorCode = error.code;
        console.log(errorCode);
        return false;
    }).then((result) => {
        result.user.updateProfile({
            displayName: username
        })
        return result
    }).catch((error) => {
        console.log(error);
    });
}

export default reg;