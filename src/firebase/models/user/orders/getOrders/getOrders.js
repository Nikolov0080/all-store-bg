import firebase from "firebase";

const getOrders = (userId) => {

    const ordersRef = firebase.database().ref("users/" + userId).child("purchases")

   return ordersRef.once('value', (snap) => {
        snap.forEach((data) => {
            console.log("ID - " + data.key);
            console.log("Order Data - " + JSON.stringify(data.val(),null,1));
        });

        return snap.val()
    })
}

export default getOrders;