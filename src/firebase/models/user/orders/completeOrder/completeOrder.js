import firebase from 'firebase';

const orderDataRef = firebase.database().ref('users');
const imageRef = firebase.storage().ref('images');
const completeOrder = (imageId,userId) => {
console.log(imageId);
console.log(userId);

}

export default completeOrder;