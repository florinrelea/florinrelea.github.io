//Winter mode: on
setInterval(()=>{createSnowFlake()}, 100);
function createSnowFlake() {
    const snowFlake = document.createElement("i");
    snowFlake.classList.add("fas");
    snowFlake.classList.add("fa-snowflake");
    snowFlake.style.left = Math.random() * window.innerWidth + 'px';
    snowFlake.style.animationDuration = Math.random() * 3 + 2 + 's';
    snowFlake.style.opacity = Math.random();
    snowFlake.style.fontSize = Math.random() * 10 + 10 + 'px';
    document.body.appendChild(snowFlake);
    setTimeout(() => {snowFlake.remove()},4000);
}