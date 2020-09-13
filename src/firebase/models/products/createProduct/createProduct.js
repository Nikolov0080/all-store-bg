import firebase from 'firebase';
import moment from 'moment';
import compressor from '../../../../utils/compressor';

const ID = () => {
    return '-' + Math.random().toString(36).substr(2, 9);
};

const dbRef = firebase.database().ref('users');

const createProduct = (data) => {

    var promises = [];

    const currentId = ID();

    const { condition, description, price, title, userId, username } = data;
    const { image } = data

    const a = dbRef.child(userId).child(currentId).set({
        condition,
        description,
        price,
        title,
        creator: username,
        createdAt: moment().format('L'),
        imageId: currentId,
        creatorId: userId
    })


    const storageRef = firebase.storage().ref('images/' + currentId)


   const b =  compressor(image).then((img) => {
        return storageRef.put(img).then((response) => {
            if (response) {

                console.log("Created")
                return a = response
            }
        }).catch(err => console.log(err))
    })

    // TODO implement Promise.all to the promises

console.log(a);
console.log(b)



}

export default createProduct;