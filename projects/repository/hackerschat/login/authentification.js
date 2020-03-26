var backgroundURL = "../images/bkdLog.png";
const firebaseConfig = {
    apiKey: "AIzaSyAxPDJ1VTdbUtFpvjuy_a4DC5ZG24kaSC4",
    authDomain: "hackerschat-cf2fa.firebaseapp.com",
    databaseURL: "https://hackerschat-cf2fa.firebaseio.com",
    projectId: "hackerschat-cf2fa",
    storageBucket: "",
    messagingSenderId: "623754028048",
    appId: "1:623754028048:web:43a549ef53ba732e"
  };
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const accounts= database.ref('Accounts');
function authentification(){
    var user = encodeURI(document.getElementById("getUsername").value);
    var pass = encodeURI(document.getElementById("getPass").value);
    var logged = false;
    accounts.on('value',function(datasnapshot){
    datasnapshot.forEach(function(childNodes){
        if(childNodes.key == decodeURI(user)){
            if(childNodes.val().password == decodeURI(pass)){
                alert("You`re logged in!  :)");
                logged = true;
                localStorage.setItem("user", user);
                localStorage.setItem("logged", encodeURI("true"));
                window.location.assign("../chatting/index.html");
            }else if(childNodes.val().password != decodeURI(pass)){
                alert("WRONG password!");
                location.reload();
                return 0;
            }
        }
    })
    if(logged != true){
        alert("We dont have such a user on our website");
        location.reload();
        return 0;
    }
    },errData);

}
function errData(err){
    console.log("ERROR: "+err);
    setTimeout(function(){
        alert("ERROR. Reloading the page...");
        location.reload();}, 1000);
}