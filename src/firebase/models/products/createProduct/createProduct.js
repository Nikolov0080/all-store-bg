import firebase from 'firebase';
import moment from 'moment';

const ID = () => {
    return '-' + Math.random().toString(36).substr(2, 9);
};

const dbRef = firebase.database().ref('users');

const storageRef = firebase.storage().ref('images')
const createProduct = (data) => {

    const currentId = ID();

    const { condition, description, price, title, userId, username } = data;
    const { image } = data

    dbRef.child(userId).child(currentId).set({
        condition,
        description,
        price,
        title,
        creator:username,
        createdAt: moment().format('L'),
        imageId:currentId
    }).then(() => {
        storageRef.child(currentId).put(image[0]).then((resp) => {
            console.log(resp)
        }).then((resp) => {
            console.log(resp)
        }).catch(e => console.log(e))
    })
}

export default createProduct;