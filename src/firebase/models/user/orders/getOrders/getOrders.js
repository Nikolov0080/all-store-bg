import firebase from "firebase";

const getOrders = (userId, setOrders) => {

    const ordersRef = firebase.database().ref("users/" + userId).child("purchases")

    var formattedData = [];

    return ordersRef.once('value', (snap) => {
        snap.forEach((data) => {
            // console.log("ID - " + data.key);
            // console.log("Order Data - " + JSON.stringify(data.val(),null,1));
        });

        const snapshot = snap.val();

        for (const key in snapshot) {
            if (snapshot.hasOwnProperty(key)) {
                const element = snapshot[key];
                formattedData.push(element)
            }
        }
        setOrders(formattedData)
    })
}

export default getOrders;