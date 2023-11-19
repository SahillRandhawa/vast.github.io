// JavaScript source code
// setting up firebase with our website
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5-ow4YS3r98QIcfMyT4JLJJmzjDfmCbc",
  authDomain: "authentication-608f0.firebaseapp.com",
  projectId: "authentication-608f0",
  storageBucket: "authentication-608f0.appspot.com",
  messagingSenderId: "574744795723",
  appId: "1:574744795723:web:aedc90dce5a85278a58bce",
  
};

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed Up")
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("You are Signed In")
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
        });
}