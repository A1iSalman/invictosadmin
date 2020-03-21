import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCK9nvIWUZlLjrSYn6HoC0DWeaA6m-82oY",
  authDomain: "invictos-8a5dd.firebaseapp.com",
  databaseURL: "https://invictos-8a5dd.firebaseio.com",
  projectId: "invictos-8a5dd",
  storageBucket: "invictos-8a5dd.appspot.com",
  messagingSenderId: "147877906452",
  appId: "1:147877906452:web:767e71a81d99aa46047f01"
}

firebase.initializeApp(config);
export const database = firebase.database();