import firebase from 'firebase';


const deleteProduct = (userId, id) => {

    const userRef = firebase.database().ref('users/' + userId).child(id);
    const storageRef = firebase.storage().ref('images').child(id)

   return storageRef.delete().then((response) => {
        userRef.remove(err=>{
            console.log(err);
        }).then((result)=>{
            console.log(result)
            return
        })
    })
}
export default deleteProduct;