import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAq_Xpd_Xcu_vit4CKDxtjspzjC3AypnHQ",
  authDomain: "clone-77244.firebaseapp.com",
  databaseURL: "https://clone-77244.firebaseio.com",
  projectId: "clone-77244",
  storageBucket: "clone-77244.appspot.com",
  messagingSenderId: "942597642460",
  appId: "1:942597642460:web:ccf4b843401552fec0fc19",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
