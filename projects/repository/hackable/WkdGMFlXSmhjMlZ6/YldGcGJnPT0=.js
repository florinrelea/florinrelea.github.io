let closeBtns;
document.getElementById("play-button").addEventListener("click",(e)=>{
  window.location.assign("play.html") //play.php
});
document.getElementById("dev-button").addEventListener("click", () => {document.getElementById("dev").style.display = "block" });
document.getElementById("news-button").addEventListener("click", () => {document.getElementById("news").style.display = "block"});
closeBtns = document.querySelectorAll(".fa-window-close");
closeBtns.forEach(button=>{
 button.addEventListener("click",()=>{
    let parent = button.parentNode;
    parent.style.animation = "0.3s modalClose 1 linear";
setTimeout(()=>{ 
  parent.style.animation="";
  parent.style.display="none";},290);
  });
});