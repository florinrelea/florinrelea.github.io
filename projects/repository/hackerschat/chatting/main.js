/*
https://console.firebase.google.com/project/hackerschat-cf2fa/database/hackerschat-cf2fa/data
*/
checkLog();
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
const liveChat = database.ref("Live Chat");
var user;
var databseChtLns;
//liveChat.on('value', chatLoaded, errData);
var form = document.getElementById("lonelyForm"); 
function handleForm(event){ 
  event.preventDefault();
  sendingMessage();
} 
form.addEventListener('submit', handleForm);
function pleaseClearTheChat(){
  liveChat.remove();
  location.reload();
}
liveChat.on('value', function(datasnapshot){
    var fixingErr = datasnapshot.val();
    //databseChtLns = Object.keys(fixingErr);
    var tempDiv = document.createElement("div");
    tempDiv.setAttribute('id','tempDiv');
    var containerDiv = document.getElementById("tempDiv");
    if(containerDiv){
      containerDiv.parentNode.removeChild(containerDiv);  
    }
    document.body.appendChild(tempDiv);
    datasnapshot.forEach(function(childNodes){
        var containerDiv = document.getElementById("tempDiv");
        var currentLine =  childNodes.val();
        var para = document.createElement("p");
        var node = document.createTextNode(currentLine);
        para.appendChild(node);
        containerDiv.appendChild(para);
    });
  /*
   for(var i = 0; i <= databseChtLns.length-1 ; i++){
      var k = databseChtLns[i];
      var currentLine = fixingErr[k];
      var para = document.createElement("p");
      var node = document.createTextNode(currentLine);
      para.appendChild(node);
      document.body.appendChild(para);
   }
   */
  }, errData);
function errData(err){
    console.log("ERROR: "+err);
    setTimeout(function(){
        alert("ERROR. Reloading the page...");
        location.reload();}, 1000);
}
function sendingMessage(){
  function handleForm(event){ 
    event.preventDefault(); 
  } 
  var textMessage = document.getElementById("inputMessage").value;
  var messageBox = document.getElementById("inputMessage");
  messageBox.value =  "";
  liveChat.push(user+" : "+textMessage);
}
function checkLog(){
  const userCheck = localStorage.getItem("user");
  const logged = localStorage.getItem("logged");
  if(userCheck){
    if(decodeURI(logged) == "true"){
      user = decodeURI(userCheck).toUpperCase();
    }else if(decodeURI(logged) != true){window.location.assign("http://hakerschat.000webhostapp.com/login");}
  }else{window.location.assign("http://hakerschat.000webhostapp.com/login");}
}
// // Fixing the p{line-height} bug
// function fixLineHeight(){
//   var ps = document.getElementsByTagName("p");
//   var checkReadyState = setInterval(function(){
//     if(ps){
//         for(let i = 0 ; i <= ps.length; i++){
//           ps[i].style.lineHeight = "1";
//         }
//         clearInterval(readyStateCheckInterval);
//     }
//   }, 20);
// }
// //Execute the function
// fixLineHeight();