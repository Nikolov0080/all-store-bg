import firebase from 'firebase';
import '../../../SDK'



const signOut = () => { return firebase.auth().signOut(); }
export default signOut 