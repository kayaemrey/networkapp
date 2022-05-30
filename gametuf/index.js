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
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());