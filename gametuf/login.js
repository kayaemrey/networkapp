var firebaseConfig = {
    apiKey: "AIzaSyCMnKAgy1cn_kJIEwk-mW2yhNGYbWUIv1I",
    authDomain: "gametuf-662c4.firebaseapp.com",
    projectId: "gametuf-662c4",
    storageBucket: "gametuf-662c4.appspot.com",
    messagingSenderId: "952768408536",
    appId: "1:952768408536:web:57befadedbe3032945e0ad",
    measurementId: "G-5LF1Z0ZCTS"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var firebase = require('firebase');
var firebaseui = require('firebaseui');
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

document.getElementById("buttonlogin").addEventListener("click",function(){
  console.log("hi");
  // let useremail = document.getElementById("email").value;
  // let userpassword = document.getElementById("password").value;
  // firebase.auth().signInWithEmailAndPassword(useremail, userpassword)
  // .then((userCredential) => {
  //   // Signed in
  //   var user = userCredential.user;
  //   window.location.href = "index.html";
  //   // ...
  // })
  // .catch((error) => {
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  // });
});