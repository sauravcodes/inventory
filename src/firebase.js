import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2PbLNz8peUx4bNxnNDfgYhKYf_ruw2IQ",
  authDomain: "inventory-91c84.firebaseapp.com",
  databaseURL: "https://inventory-91c84-default-rtdb.firebaseio.com",
  projectId: "inventory-91c84",
  storageBucket: "inventory-91c84.appspot.com",
  messagingSenderId: "212360703740",
  appId: "1:212360703740:web:8c368465f8f00258d3b179",
};
// Initialize Firebase
const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB;
