import firebase from 'firebase';
import moment from 'moment';

const orderDataRef = firebase.database().ref('users');
const imageRef = firebase.storage().ref('images');
const completeOrder = (imageId, userId, orderId) => {
    console.log(imageId);
    console.log(userId);
    console.log(orderId);

    return orderDataRef.child(userId + "/purchases/" + orderId).once("value", (snapshot) => {
        firebase.database()
            .ref("Completed Orders --History/" + moment().format('MMMM Do YYYY, h:mm:ss a'))
            .set(snapshot.val())
    }).then(() => {

        const a = orderDataRef.child(userId + "/purchases/" + orderId).remove((err) => {
            console.log(err);
        }).catch((e) => console.log(e));

        const b = imageRef.child(imageId).delete()

        return Promise.all([a, b]).then((response) => {
            console.log(response)
            return response;
        })
    })

}

export default completeOrder;