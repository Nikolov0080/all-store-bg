import firebase from 'firebase';
import moment from 'moment';
import compressor from '../../../../utils/fileCompressor/compressor';
import ID from '../../../../utils/Id-creator.js/id_creator';

const dbRef = firebase.database().ref('users');

const createProduct = (data) => {

    const currentId = ID();

    const { condition, description, price, title, userId, username } = data;
    const { image } = data

    var a = Promise.resolve(dbRef.child(userId).child(currentId).set({
        condition,
        description,
        price,
        title,
        creator: username,
        createdAt: moment().format('L'),
        imageId: currentId,
        creatorId: userId
    }, err => {
        if (err) { console.log(err) }
    }));

    const storageRef = firebase.storage().ref('images/' + currentId)

    var b = compressor(image).then((img) => {
        return storageRef.put(img).then((response) => {
            if (response) {

                console.log("Created")
                return a = response
            }
        }).catch(err => console.log(err))
    })

    return Promise.all([a, b]).then((response) => {
        return response
    })
}

export default createProduct;