import firebase from 'firebase';

const userRef = firebase.database().ref("users")
const imagesRef = firebase.storage().ref("images")

const placeOrder = (data) => {

    console.log(data)
}

export default placeOrder;