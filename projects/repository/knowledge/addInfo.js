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
document.getElementById('form1').addEventListener('submit', submitForm);
var database = firebase.database();
var ref = database.ref('names');
var freshName;
var freshAge;
var freshAdress;
var newData;
var checkedName;
var keys;
var baseLenght;
/*
if there is any =>null<= error
for(var i = 0 ; i < 2 ; i++){
 var newData1 = {name: "backup", age: "backup", adress: "backup"};
 ref.push(newData1);
}
*/
 function getInputData(id){
    return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    freshName = getInputData('freshName');
    freshAge = getInputData('age');
    freshAdress = getInputData('adress');
    newData = {
        name: freshName,
        age: freshAge,
        adress: freshAdress
    };
    ref.on('value', gotData, errData);
    checkNameAvailability();
}
function gotData(datasnapshot){
    checkedName = datasnapshot.val();
    keys = Object.keys(checkedName);
    baseLenght = keys.length;
    console.log("There is data! Continue the process...");
}
function errData(err){
    alert("Error. Please reload the page");
    return false;
}
function checkNameAvailability(){
//check is the name already exists in the database
console.log("Checking the name availability...");
    for(var i = 0; i < baseLenght ; i++){
        var k = keys[i];
        var matchName = checkedName[k].name;
        console.log(matchName);
        if(matchName == freshName){
            console.log("This name is already in the database!");
            alert("This name is already taken!");
            location.reload();
            return true;
        }
    }
    console.log("There is no such name in the database");
    ref.push(newData);
    alert("Thanks for help!");
    console.log("Process finished.");
    document.getElementById("mainContent").style.display = "none";
    var showImage = document.getElementById("thxImage");
    showImage.style.display = "block";
    setTimeout(function(){
    location.assign("http://florinrelea.000webhostapp.com/knowledge");
    }, 3000);
    return true;
}