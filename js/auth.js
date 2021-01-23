
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCe2uL9-Zn8oKDq_sCMeDBS2KMoyrQiaCU",
  authDomain: "bloodsite-bac18.firebaseapp.com",
  databaseURL: "https://bloodsite-bac18-default-rtdb.firebaseio.com",
  projectId: "bloodsite-bac18",
  storageBucket: "bloodsite-bac18.appspot.com",
  messagingSenderId: "49018989498",
  appId: "1:49018989498:web:6949540ca6e35c5bc30b83",
  measurementId: "G-EFNQ64RJWV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//refrence auth and database
const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();


//signUp
const signupForm = document.querySelector('#signIn-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = signupForm['inputEmail'].value;
    const phoneNumber = signupForm['inputPhone'].value;

    auth.createUserWithEmailAndPassword(email, phoneNumber).then(cred => {
      return db.collection('user').doc(cred.user.uid).set({
        full_name: signupForm['inputFullName'].value,
        Age: signupForm['inputAge'].value,
        phone: signupForm['inputPhone'].value,
        blood_type: signupForm['blood_type'].value,
        Date: signupForm['date'].value,
        time: signupForm['time'].value,
      });
    }).then(() => {
      signupForm.querySelector('.error').innerHTML = '';
      signupForm.reset();
      setTimeout(() => { document.location.href = "page3(searchforblood).html"; }, 1000);
    }).catch(err => {
      signupForm.querySelector('.error').innerHTML = err.message;
    });
  });
}

const creatForm = document.querySelector("#signIn-form");
if (creatForm) {
  creatForm.addEventListener('submit', (e) => {
    e.preventDefault();

    db.collection('Donations').add({
      full_name: creatForm['inputFullName'].value,
      Age: creatForm['inputAge'].value,
      phone: creatForm['inputPhone'].value,
      blood_type: creatForm['blood_type'].value,
    })
  });
}

db.collection('Donations').onSnapshot(snapshot => {
  setupDonations(snapshot.docs);
});


// location 

//contact US
const contactUS = document.querySelector("#contactUS");
if (contactUS) {
  contactUS.addEventListener('submit', (e) => {
    e.preventDefault();
    //var file = e.target.files[0];

    db.collection('contact-US').add({
      name: contactUS['nameInfo'].value,
      email: contactUS['emailInfo'].value,
      messageInfo: contactUS['messagesInfo'].value,
    }).then(() => {
      //closed model and reset form
      contactUS.reset();
      //location.reload();
    }).catch(err => {
      console.log(err.message);
    })

  });
}