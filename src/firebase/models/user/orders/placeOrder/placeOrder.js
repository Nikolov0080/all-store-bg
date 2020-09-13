import firebase from 'firebase';
import ID from '../../../../../utils/Id-creator.js/id_creator';

const userRef = firebase.database().ref("users")

const placeOrder = (data) => {
    const currentId = ID();

    const {
        creatorId,
        price,
        description,
        imageId,
        title,
        condition
    } = data

    userRef.child(creatorId + "/purchases/" + currentId).set({price,imageId,title,condition})

    console.log(data)
}

export default placeOrder;