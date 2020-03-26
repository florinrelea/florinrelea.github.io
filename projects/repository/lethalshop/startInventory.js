var firebaseConfig = {
    apiKey: "AIzaSyA9UwiSGfQNSOsquDt7RlXfUcror8uc_o8",
    authDomain: "deposit-944e4.firebaseapp.com",
    databaseURL: "https://deposit-944e4.firebaseio.com",
    projectId: "deposit-944e4",
    storageBucket: "",
    messagingSenderId: "899942969217",
    appId: "1:899942969217:web:83db61c5c47e77f9d2c280"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const accesories_database = database.ref('Inventory/Accesories');
const pyro_database = database.ref("Inventory/Pyro");
const visitors_count= database.ref("Visitors");
function errData(err){
  console.log("ERROR: "+err);
  setTimeout(function(){
      alert("ERROR. Reloading the page...");
      location.reload();}, 1000);
}
visitors_count.once('value').then(function(datasnapshot) {
    visitors_count.set(datasnapshot.val()+1);
    console.log(datasnapshot.val());
}, errData);