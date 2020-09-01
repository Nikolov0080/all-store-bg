import firebase from 'firebase';


const reg = (email, password) => {

    return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);

        return false;
    }).then((resp) => {
        console.log(resp);
        return true;

    })
}

export default reg;