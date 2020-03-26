var canvasSource = document.getElementById("monitor");
class displayer { 
    constructor(monitor) { 
        monitor.width = 430;
        monitor.height = 350;
        this.ctx = monitor.getContext("2d");
        this.width = monitor.width;
        this.height = monitor.height;
    };
    drawText(font, color, content, posX, posY){
        this.ctx.font = font;
        this.ctx.fillStyle = color;
        this.ctx.fillText(content, posX, posY);
    };
    clearRect(posX, posY, width, height){
        canvas.ctx.fillStyle = "black";
        canvas.ctx.fillRect(posX, posY, width, height);
    };
    clearScreen(){
        canvas.ctx.clearRect(0, 0, this.width, this.height);
    };
}
var canvas = new displayer(canvasSource);
//Volume de bugger
let confirmAudio = document.getElementById("audio-confirm");
confirmAudio.addEventListener("click", () => {
    backgroundMusic.start()
    confirmAudio.parentNode.removeChild(confirmAudio);
});
canvas.drawText("70px Consolas", "green", "Hackable", 60, 100);
canvas.drawText("20px Consolas", "green", "Press enter to start...", 90, 200);
let binaryAnimation = setInterval(() => { 
    canvas.clearRect(0, 320, canvas.width, 20);
    let binaryString = "";
    for (let i = 0; i < 21; i++){
        binaryString += Math.round(Math.random())+ " ";
    }
    canvas.drawText("20px Consolas", "green", binaryString, 0, 340);
}, 100);
//if enter pressed => clearInterval(binaryAnimation);
window.addEventListener("keydown", startGame, false);
function startGame(e) { 
    e = e || window.event;
    if (e.keyCode === 13) { 
        clearInterval(binaryAnimation);
        backgroundMusic.stop();
        window.removeEventListener("keydown", startGame, false);
        delete backgroundMusic.start;
        delete backgroundMusic.stop;
        delete sounds.background;
        canvas.clearScreen();
        sounds.click.play();
        initializeDesktop();
    }
}
function initializeDesktop() {
    let icons = {
        width: 30,
        height: 30,
        fontSize: 12, //space between letters == 3px
        launchers: {
            'Console': {
                validImage: "WkdWd1pXNWtaVzVqYVdWeg==/sprites/terminal.png",
                color: "blue",
                x: 20,
                y: 20
            },
            'Hacking': {
                color: "green",
                x: 20,
                y: 72
            },
            'Wallet': {
                validImage : "WkdWd1pXNWtaVzVqYVdWeg==/sprites/cc-visa.png",
                color: "rgb(255,165,0)",
                x: 20,
                y: 124
            },
            'Example23': {
                color: "green",
                x: 20,
                y: 174
            }
        }
    };
    canvas.clearScreen();
    Object.keys(icons.launchers).forEach(icon => {
        canvas.ctx.fillStyle = icons.launchers[icon].color;
        if (icons.launchers[icon].validImage) {
            let crtIcon = new Image();
            crtIcon.src = icons.launchers[icon].validImage;
            crtIcon.onload = ()=> {
                canvas.ctx.drawImage(crtIcon, icons.launchers[icon].x, icons.launchers[icon].y,icons.width, icons.height);
            }
        } else {
            canvas.ctx.fillRect(icons.launchers[icon].x, icons.launchers[icon].y, icons.width, icons.height);
        }
        canvas.ctx.font = icons.fontSize + "px Consolas";
        canvas.ctx.fillText(icon, (icons.width / 2) + icons.launchers[icon].x - (icons.fontSize * icon.length / 2) + icon.length * 3, icons.fontSize + icons.height + icons.launchers[icon].y);
    });
    canvasSource.addEventListener("click", clickMapping, false);
    function clickMapping(e) {
        Object.keys(icons.launchers).forEach(launcher => {
            if ((e.offsetX >= icons.launchers[launcher].x) && (e.offsetX <= icons.launchers[launcher].x + icons.width) && (e.offsetY >= icons.launchers[launcher].y) && (e.offsetY <= icons.launchers[launcher].y + icons.height)) {
                sounds.click.currentTime = 0;
                sounds.click.play();
                canvasSource.removeEventListener("click", clickMapping, false);
                canvas.clearScreen();
                accessLauncher(launcher);
            }
        });
    }
    function accessLauncher(launcher) {
        switch (launcher) {
            case 'Console':
                assignScript("WkdGMFlXSmhjMlZ6/WTI5dWMyOXNaUT09.js", "commands");
                break;
            case 'Wallet':
                assignScript("WkdGMFlXSmhjMlZ6/ZDJGc2JHVjA=.js", "wallet");
                break;
            default:
                console.log("Default!");
                break;
        }
        return 0;
    }
    return 0;
}
function assignScript(source, id) {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = source;
    script.id = id;
    let thisInterval = setInterval(() => {
        if (document.readyState === 'complete') {
            document.body.appendChild(script);
            delete script;
            clearInterval(thisInterval);
        }
    },50);
}