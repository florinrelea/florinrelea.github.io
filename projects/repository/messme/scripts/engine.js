var mainForm = document.getElementById("sender-form");
var trigger = false;
var username;
var votebox = document.getElementById("votebox");
let logChecker = document.getElementById("logger");
var voteHolder = document.getElementById("votes");
var usersHolder = document.getElementById("users");
var active = 0;
var votes = 0;
var gotData = false;
var base = document.createElement("script");
base.src = "data:text/javascript;base64,dmFyIGZpcmViYXNlQ29uZmlnID0gewogICAgYXBpS2V5OiAiQUl6YVN5REI5LVpTNGUwSG1FT0VlRTRsZlRpSW5TSW0xNTZQMjg4IiwKICAgIGF1dGhEb21haW46ICJtZXNzbWUtZWE2ODcuZmlyZWJhc2VhcHAuY29tIiwKICAgIGRhdGFiYXNlVVJMOiAiaHR0cHM6Ly9tZXNzbWUtZWE2ODcuZmlyZWJhc2Vpby5jb20iLAogICAgcHJvamVjdElkOiAibWVzc21lLWVhNjg3IiwKICAgIHN0b3JhZ2VCdWNrZXQ6ICJtZXNzbWUtZWE2ODcuYXBwc3BvdC5jb20iLAogICAgbWVzc2FnaW5nU2VuZGVySWQ6ICI0NTk1NzU5NDU0NTkiLAogICAgYXBwSWQ6ICIxOjQ1OTU3NTk0NTQ1OTp3ZWI6NzA2OTc0NGU4OGY2NGFhNjJjZWY4NiIKfTsKZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7CmZ1bmN0aW9uIHdyaXRlSW5DaGF0KHVzZXJuYW1lLCBjb250ZW50KXsKICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdjaGF0LycpLnB1c2goe3VzZXJuYW1lOnVzZXJuYW1lLGNvbnRlbnQ6Y29udGVudH0pOwp9CmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCdjaGF0Jykub24oJ3ZhbHVlJywgKHNuYXBzaG90KSA9PiB7CiAgICBkZWxldGVBbGxNZXNzYWdlcygpOwogICAgaWYgKHNuYXBzaG90LnZhbCgpICE9IG51bGwpIHsKICAgICAgICBsZXQgdXNlcnMgPSBPYmplY3Qua2V5cyhzbmFwc2hvdC52YWwoKSk7CiAgICAgICAgdXNlcnMuZm9yRWFjaCh1c2VyID0+IHsKICAgICAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImRpdiIpOwogICAgICAgICAgICBsZXQgYXV0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInAiKTsKICAgICAgICAgICAgbGV0IGNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCJwIik7CiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCJtZXNzYWdlIik7CiAgICAgICAgICAgIGNvbnQuaWQgPSAiY29udGVudCI7CiAgICAgICAgICAgIGF1dGguaWQgPSAiYXV0aG9yIjsKICAgICAgICAgICAgYXV0aC50ZXh0Q29udGVudCA9IHNuYXBzaG90LnZhbCgpW3VzZXJdLnVzZXJuYW1lICsgJzonOwogICAgICAgICAgICBjb250LnRleHRDb250ZW50ID0gc25hcHNob3QudmFsKClbdXNlcl0uY29udGVudDsKICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGF1dGgpOwogICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoY29udCk7CiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTsKICAgICAgICB9KTsKICAgIH0KfSk7CmZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2VycycpLm9uKCd2YWx1ZScsIChzbmFwc2hvdCkgPT4gewogICAgLy9wcmV2ZW50IG51bWJlcnMgbG93ZXIgdGhhbiAwCiAgICBpZiAoc25hcHNob3QudmFsKCkudm90ZXMgPCAwKSB7CiAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXJzL3ZvdGVzJykuc2V0KDApOwogICAgfQogICAgYWN0aXZlID0gT2JqZWN0LmtleXMoc25hcHNob3QudmFsKCkuYWN0aXZlKS5sZW5ndGg7CiAgICB2b3RlcyA9IHNuYXBzaG90LnZhbCgpLnZvdGVzOwogICAgdm90ZUhvbGRlci50ZXh0Q29udGVudCA9IHZvdGVzOwogICAgdXNlcnNIb2xkZXIudGV4dENvbnRlbnQgPSBhY3RpdmU7CiAgICBpZiAoKHZvdGVzID49IGFjdGl2ZSkmJihhY3RpdmUgPiAwKSkgeyAKICAgICAgICB2YXIgYWRhUmVmID0gZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ2NoYXQnKTsKICAgICAgICBhZGFSZWYucmVtb3ZlKCkKICAgICAgICAudGhlbihmdW5jdGlvbigpIHsKICAgICAgICAgICAgLy9zdWNjZXNzCiAgICAgICAgfSkKICAgICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHsKICAgICAgICAgICAvL2Vycm9yCiAgICAgICAgfSk7CiAgICAgICAgdm90ZWJveC5jaGVja2VkID0gZmFsc2U7CiAgICAgICAgaWYgKHZvdGVzID4gMCkgeyAKICAgICAgICAgICAgZmlyZWJhc2UuZGF0YWJhc2UoKS5yZWYoJ3VzZXJzL3ZvdGVzJykuc2V0KDApOwogICAgICAgIH0KICAgIH0KICAgIGlmIChnb3REYXRhID09PSBmYWxzZSkgeyBnb3REYXRhID0gdHJ1ZSB9Owp9KTsKZnVuY3Rpb24gYWN0aXZlVXNlcihuYW1lKSB7CiAgICBsZXQgY3J0VGltZSA9IG5ldyBEYXRlKCk7CiAgICBmaXJlYmFzZS5kYXRhYmFzZSgpLnJlZigndXNlcnMvYWN0aXZlLycrbmFtZSkuc2V0KGNydFRpbWUuZ2V0VGltZSgpKTsKfQp2b3RlYm94LmFkZEV2ZW50TGlzdGVuZXIoImNsaWNrIiwgKCkgPT4gewogICAgaWYgKHZvdGVib3guY2hlY2tlZCA9PT0gdHJ1ZSkgewogICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy92b3RlcycpLnNldCh2b3RlcysxKTsKICAgIH0gZWxzZSBpZiAodm90ZWJveC5jaGVja2VkID09PSBmYWxzZSkgewogICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy92b3RlcycpLnNldCh2b3Rlcy0xKTsKICAgIH0KfSk7CnNldEludGVydmFsKCgpID0+IHsgCiAgICBsZXQgdGVtcFRpbWUgPSBuZXcgRGF0ZSgpOwogICAgaWYgKGxvY2FsU3RvcmFnZS5oYXNPd25Qcm9wZXJ0eSgiWTNWeWNtVnVkQ0IxYzJWeSIpKSB7IAogICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy9hY3RpdmUvJyArIGF0b2IobG9jYWxTdG9yYWdlLmdldEl0ZW0oIlkzVnljbVZ1ZENCMWMyVnkiKSkpLnNldCh0ZW1wVGltZS5nZXRUaW1lKCkpOwogICAgfQogICAgLy9jaGVjayBmb3IgdXNlcnModXNlIGEgc2VydmVyIHJ1bm5pbmcgc29mdHdhcmUgaW4gdGhlIGZ1dHVyZSkKICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy9hY3RpdmUnKS5vbmNlKCd2YWx1ZScpLnRoZW4oZnVuY3Rpb24oc25hcHNob3QpIHsKICAgICAgICBsZXQgYWN0aXZlVXNlcnMgPSBPYmplY3Qua2V5cyhzbmFwc2hvdC52YWwoKSk7CiAgICAgICAgYWN0aXZlVXNlcnMuZm9yRWFjaCh1c2VyID0+IHsKICAgICAgICAgICAgbGV0IGxhc3RTZWVuID0gc25hcHNob3QudmFsKClbdXNlcl07CiAgICAgICAgICAgIGlmICgobGFzdFNlZW4gPCB0ZW1wVGltZS5nZXRUaW1lKCkgLSAxNTAwMCkgJiYgKHNuYXBzaG90LnZhbCgpW3VzZXJdICE9IG51bGwpKSB7CiAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9kYXRlID0gbmV3IERhdGUobGFzdFNlZW4pOwogICAgICAgICAgICAgICAgICAgIGZpcmViYXNlLmRhdGFiYXNlKCkucmVmKCd1c2Vycy9hY3RpdmUvJyArIHVzZXIpLnJlbW92ZSgpOwogICAgICAgICAgICAgICAgICAgIHdyaXRlSW5DaGF0KCJzeXN0ZW0iLCAiPCIrdXNlcisiPiIrICIgaGFzIGxlZnQgdGhlIGNoYXQgYXQ6ICIrY3VycmVudF9kYXRlLnRvTG9jYWxlU3RyaW5nKCkpOwogICAgICAgICAgICB9CiAgICAgICAgfSk7CiAgICB9KTsKfSwgMTAwMDApOw==";
document.body.appendChild(base);
function deleteAllMessages() { 
    let messages = document.querySelectorAll(".message");
    messages.forEach(message => { 
    message.parentNode.removeChild(message);
    });
}
if (!localStorage.hasOwnProperty("Y3VycmVudCB1c2Vy")) {
    logChecker.style.display = "block";
    document.getElementById("logger-submit").onclick = () => {
        let validation = usernameValidation(document.getElementById("logger-name"));
        if (validation === true) {
            localStorage.setItem("Y3VycmVudCB1c2Vy", btoa(document.getElementById("logger-name").value));
            logChecker.parentNode.removeChild(logChecker);
            window.location.reload();
        }
    };
} else {
    logChecker.parentNode.removeChild(logChecker);
    username = atob(localStorage.getItem("Y3VycmVudCB1c2Vy"));
    if (username.length > 10) { 
        localStorage.setItem("Y3VycmVudCB1c2Vy", btoa("Default"));
        window.location.reload();
    }
    let checker_1 = setInterval(() => {
        if (gotData === true) {
            activeUser(atob(localStorage.getItem("Y3VycmVudCB1c2Vy")));
            //scroll to the last message
            let lastMess = document.querySelectorAll(".message");
            if (lastMess.length != 0) { 
                lastMess[lastMess.length - 1].scrollIntoView({behavior:"smooth",block:"start"});
            }
            clearInterval(checker_1);
        }
    }, 10);
}
mainForm.onsubmit = (e) => {
    //prevent flooding attack
    e.preventDefault();
    if (mainForm.checkValidity()) {
        if(trigger === false) {
            let sentContent = document.getElementById("send-content");
            writeInChat(username, sentContent.value);
            sentContent.value = '';
            trigger = true;
            setTimeout(() => { trigger = false }, 700);
        }
    }
}
document.getElementById("auth").textContent = username;