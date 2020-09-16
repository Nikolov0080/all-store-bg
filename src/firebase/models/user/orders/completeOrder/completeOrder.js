import firebase from 'firebase';

const orderDataRef = firebase.database().ref('users');
const imageRef = firebase.storage().ref('images');
const completeOrder = (imageId,userId,orderId) => {
console.log(imageId);
console.log(userId);
console.log(orderId);

const a = orderDataRef.child(userId+"/purchases/" + orderId).remove((err)=>{
    console.log(err);
}).catch((e)=>console.log(e));

const b = imageRef.child(imageId).delete()

return Promise.all([a,b]).then((response)=>{
    console.log(response)
    return response;
})}

export default completeOrder;