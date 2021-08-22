// https://firebase.google.com/docs/web/setup#available-libraries -->
const firebaseConfig = {
    apiKey: "AIzaSyDaG4UUCo5XohKqIt-7Dd02G3mwX3jjVzQ",
    authDomain: "chat-room-faf3d.firebaseapp.com",
    projectId: "chat-room-faf3d",
    storageBucket: "chat-room-faf3d.appspot.com",
    messagingSenderId: "386398409723",
    appId: "1:386398409723:web:f838bff0f48064fae7715e",
    measurementId: "G-8DB5BYER1Q"
  };
const db = firebase.initializeApp(firebaseConfig);

  export default db