import firebase from "firebase";

const login = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
        console.log(error.code);
        return false;
    }).then((resp) => {
        console.log(resp);
        return true;
    })
}

export default login;