document.getElementById("focus_socials").onclick = function () { 
      var target = document.querySelector(".social-media");
      if (target) {
            target.scrollIntoView();
      } else { 
            window.location.assign("../");
      }
}
document.getElementById("request_email").onclick = function (e) {
      console.log("Email requested!");
      const email = "Wm14dmNtbHVjbVZzWldGQWVXRm9iMjh1WTI5dA==";
      this.textContent = atob(atob(email));
      setTimeout(function () {
            console.log("Hide email!");
            e.target.textContent = "request email";
      }, 2000);
}