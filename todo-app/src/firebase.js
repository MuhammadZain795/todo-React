import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    
    apiKey: "AIzaSyCkvG0DmTQ5FSFgfJbZzvGASD4-tMk8e50",
    authDomain: "todo-app-6dbe6.firebaseapp.com",
    projectId: "todo-app-6dbe6",
    storageBucket: "todo-app-6dbe6.appspot.com",
    messagingSenderId: "1000761282115",
    appId: "1:1000761282115:web:7217d2925d87379f544ef6",
    measurementId: "G-1YTG7K37BY"

});

const db = firebaseApp.firestore();

export default db;