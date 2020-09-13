import firebase from 'firebase';


const deleteProduct = (userId, id) => {

    const userRef = firebase.database().ref('users/' + userId).child(id);
    const storageRef = firebase.storage().ref('images').child(id)

   return storageRef.delete().then((response) => {
        userRef.remove(err=>{
          
            if(err){  console.log(err); return}
        }).then(()=>{
            console.log("Deleted")
            return true
        })
    })
}
export default deleteProduct;