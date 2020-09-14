import firebase from 'firebase';

const deleteProduct = (userId, id) => {

    const userRef = firebase.database().ref('users/' + userId + '/products').child(id);
    const storageRef = firebase.storage().ref('images').child(id)

    var a = storageRef.delete();
    var b = userRef.remove();

    return Promise.all([a, b]).then((response) => {
        return response;
    })
}
export default deleteProduct;