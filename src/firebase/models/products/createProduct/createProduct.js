import firebase from 'firebase';
import moment from 'moment';
import compressor from '../../../../utils/compressor';

const ID = () => {
    return '-' + Math.random().toString(36).substr(2, 9);
};

const dbRef = firebase.database().ref('users');

const createProduct = (data) => {

    const currentId = ID();

    const { condition, description, price, title, userId, username } = data;
    const { image } = data

    console.log()

    dbRef.child(userId).child(currentId).set({
        condition,
        description,
        price,
        title,
        creator: username,
        createdAt: moment().format('L'),
        imageId: currentId,
        creatorId: userId
    }).then(() => {

        const storageRef = firebase.storage().ref('images/' + currentId)

        compressor(image).then((img) => {


            storageRef.put(img).then((response) => {
                console.log(response)
            }).catch(e => console.log(e))
        })
    })
}

export default createProduct;