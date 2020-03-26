Wallet();
function Wallet() {
    let settings = {
        icons: {
            card: {
                width: 100,
                height: 60,
                src: "WkdWd1pXNWtaVzVqYVdWeg==/sprites/cc-visa.png",
                element: new Image()
            },
            close: {
                x: canvas.width-20-5,
                y: 5,
                width: 20,
                height: 20,
                src: "WkdWd1pXNWtaVzVqYVdWeg==/sprites/window-close-red.png",
                element: new Image()
            }
        },
        headerFont: 40,
        fontSize: 20,
        fontColor: "rgb(250, 158, 11)",
        smallFont: 15,
        padding: 40,
        background: "rgb(26,31,97)",
        refreshRate: 60/1000,
        activeAnim: false,
        gameFinisher: false
    };
    //delete the data from below
    let lastTransaction = "30.12.2019 -> 1000 $ from John N.";
    let moneyPosY = settings.padding + 2 * settings.headerFont;
    //get data from database
    let money = 1000;
    let moneyHelper = money - 30;
    Object.keys(settings.icons).forEach(icon => { 
        settings.icons[icon].element.src = settings.icons[icon].src;
    });
    canvas.ctx.fillStyle = settings.background;
    canvas.ctx.strokeStyle = settings.fontColor;
    canvas.ctx.lineWidth = 5;
    canvas.ctx.fillRect(0, 0, canvas.width, canvas.height);
    canvas.drawText('italic '+settings.headerFont+'px Impact, Charcoal', settings.fontColor, 'John Doe', settings.padding, settings.headerFont+settings.padding);
    settings.icons.card.element.onload = () => { canvas.ctx.drawImage(settings.icons.card.element, canvas.width - settings.padding - settings.icons.card.width, settings.padding, settings.icons.card.width, settings.icons.card.height) };
    settings.icons.close.element.onload = () => { canvas.ctx.drawImage(settings.icons.close.element, settings.icons.close.x, settings.icons.close.y, settings.icons.close.width, settings.icons.close.height)};
    canvas.ctx.moveTo(settings.padding, canvas.height/2);
    canvas.ctx.lineTo(canvas.width-settings.padding, canvas.height/2);
    canvas.ctx.stroke();
    canvas.drawText('bold '+settings.fontSize+'px Impact, Charcoal', settings.fontColor, "Last transaction:", settings.padding, canvas.height / 2 + settings.fontSize + 10);
    setTimeout(() => { canvas.drawText(settings.smallFont+'px Impact, Charcoal', settings.fontColor, lastTransaction, settings.padding, (canvas.height / 2) + settings.padding + settings.fontSize) }, 1000);
    let moneyAnimation = setInterval(() => {
        settings.activeAnim = true;
        moneyHelper += 1;
        canvas.ctx.fillStyle = settings.background;
        canvas.ctx.fillRect(settings.padding, moneyPosY-settings.fontSize+3, canvas.width/2, settings.fontSize);
        canvas.drawText('italic '+settings.fontSize+'px Impact, Charcoal', settings.fontColor, moneyHelper+' $',settings.padding,moneyPosY);
        if (moneyHelper >= money) { 
            settings.activeAnim = false;
            clearInterval(moneyAnimation);
        }
    }, 50);
    canvasSource.addEventListener("click", closeChecker, false);
    function closeChecker(e) { 
        if ((settings.activeAnim===false)&&(e.offsetX >= settings.icons.close.x)&&(e.offsetX <= settings.icons.close.x + settings.icons.close.width)&&(e.offsetY >= settings.icons.close.y)&&(e.offsetY <= settings.icons.close.y + settings.icons.close.height)) {
            settings.gameFinisher = true;
            return 0;
        }
    }
    let loop = setInterval(() => { 
        if (settings.gameFinisher === true) { 
            let includedScript = document.getElementById("wallet");
            if (includedScript) {
                includedScript.parentNode.removeChild(includedScript);
            }
            canvasSource.removeEventListener("click", closeChecker, false);
            clearInterval(loop);
            initializeDesktop();
            return 0;
        }
    }, settings.refreshRate);
    return 0;
}