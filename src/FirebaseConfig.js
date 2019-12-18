import firebase from 'firebase';
import '@firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyB-a-mRli0x27Ymr8Pg_vmSyPtjrGO1b_g",
  authDomain: "smile-69a25.firebaseapp.com",
  databaseURL: "https://smile-69a25.firebaseio.com",
  projectId: "smile-69a25",
  storageBucket: "smile-69a25.appspot.com",
  messagingSenderId: "431203851277",
  appId: "1:431203851277:web:8843d577e06704b4"
};
// Initialize Firebase
export default()=>{firebase.initializeApp(firebaseConfig)}