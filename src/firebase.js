import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCgQjM7-958YoJMzDzILV3dxtKZuPtwigo",
  authDomain: "uvmundodigital-87193.firebaseapp.com",
  projectId: "uvmundodigital-87193",
  storageBucket: "uvmundodigital-87193.appspot.com",
  messagingSenderId: "21893807813",
  appId: "1:21893807813:web:9aa4761ee84ee21a64baac"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export {firebase}