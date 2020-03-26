// Initialize Firebase
var config = {
    apiKey: "AIzaSyC26iwAxXFwRT5y-cIkzwYhjA3vAye9Ook",
    authDomain: "database1-81596.firebaseapp.com",
    databaseURL: "https://database1-81596.firebaseio.com",
    projectId: "database1-81596",
    storageBucket: "database1-81596.appspot.com",
    messagingSenderId: "915522831953"
  };
firebase.initializeApp(config);

document.getElementById('formular').addEventListener('submit', submitForm);
var database = firebase.database();
var boxName =  document.getElementById("nameBox");
var boxAge = document.getElementById("ageBox");
var adressBox = document.getElementById("adressBox");
var foundProfile = document.getElementById("foundProfile");
var name;
var ref = database.ref('names');
function submitForm(e){
    e.preventDefault();
    name = getInputData('name');
    alert("Searching information about: "+name);
    ref.on('value', gotData, errData); 
}
function gotData(datasnapshot){
        console.log("There is data!");
        var name1 = datasnapshot.val();
        var keys = Object.keys(name1);
        for(var i = 0; i < keys.length ; i++){
            var k = keys[i];
            var matchName = name1[k].name;
            if(matchName == name){
                alert("This name seems relevant!");
                var mainContent = document.getElementById("mainContent");
                mainContent.style.display = "none";
                nameBox.textContent = name1[k].name;
                ageBox.textContent = name1[k].age;
                adressBox.textContent = name1[k].adress;
                foundProfile.style.display = "block";
                return true;
            }
        }
        alert("Undefined name: "+name);
        location.reload();
} 
function errData(err){
    alert("Error. Please reload the page");
    return false;
}
function getInputData(id){
    return document.getElementById(id).value;
}
function reload(){
    location.reload();
}