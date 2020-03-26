var volumeState = true;
var gameState = true;
document.getElementById("menu").addEventListener("click", () => {
    exitModal.show();
    document.getElementById("exit-confirm").addEventListener("click",()=>{window.location.assign("index.html")});
    document.getElementById("exit-reject").addEventListener("click",()=>{exitModal.close()});
});
document.getElementById("pause").addEventListener("click", (e) => {
    gameState = !gameState;
    if (gameState == true) {
        e.srcElement.className = "fas fa-pause";
    } else {
        e.srcElement.className = "fas fa-play";
    }
});
document.getElementById("volume").addEventListener("click", (e) => {
    volumeState = switchVolume();
    if (volumeState == true) {
        e.srcElement.className = "fas fa-volume-up";
    } else {
        e.srcElement.className = "fas fa-volume-mute";
    }
});
let exitModal = {
    show: ()=>{
        document.querySelector(".modal-close").style.display = "block";
    },
    close: ()=>{
        document.querySelector(".modal-close").style.display = "none";
    }
}