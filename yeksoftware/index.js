var firebaseConfig = {
    apiKey: "AIzaSyBpmd2xXNlLilEn2xG3CNW-7ZTuAzY3gnQ",
    authDomain: "yeksoftware-46ff1.firebaseapp.com",
    projectId: "yeksoftware-46ff1",
    storageBucket: "yeksoftware-46ff1.appspot.com",
    messagingSenderId: "491373348312",
    appId: "1:491373348312:web:21eaa47378b44551709ead",
    measurementId: "G-4MK2R33T94"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();


document.querySelector("#gonder").addEventListener("click", function () {
    let username = document.getElementById("name").value;
    let useremail = document.getElementById("email").value;
    let userkonu = document.getElementById("konu").value;
    console.log()
    db.collection("users").add({
        "name": username,
        "mail": useremail,
        "konu": userkonu
    })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    window.alert("İletişim sağlandı");
    $("#name").val("");
    $("#email").val("");
    $("#konu").val("");
});