// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase,ref,set,get,child } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoAH6ih3qjNA72XyhDLLPgxeBuk0zaXD8",
  authDomain: "petservice-6a764.firebaseapp.com",
  databaseURL: "https://petservice-6a764-default-rtdb.firebaseio.com",
  projectId: "petservice-6a764",
  storageBucket: "petservice-6a764.appspot.com",
  messagingSenderId: "914458245646",
  appId: "1:914458245646:web:36f11f5f9965c9e0ae5a5f",
  measurementId: "G-DSM5RYJ1B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//REFERNCE FOR DATABASE
const db=getDatabase(app);
document.getElementById("submit").addEventListener('click', function(e){
e.preventDefault();
  set(ref(db, 'user/' + document.getElementById("username").value),
  {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    PhoneNumber: document.getElementById("phone").value,
  });
  alert("Details saved successfully!");
})

  // reference for database
  var petServiceDB= firebase.database().ref("petService");

  document.getElementById('petService').addEventListener("submit",submitForm);


  function submitForm(e){
    e.preventDefault();

    var emailvar=getElementVal('email');
    var passwordvar=getElementVal('password');

    console.log(emailvar,passwordvar);
    
  }
// we use arrow function here to reduce rewriting of the same code again and again for the 2 input elements
//namely email and password
  const getElementVal=(id)=>{
    return document.getElementById(id).value;
  }

 