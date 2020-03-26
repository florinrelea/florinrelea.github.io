Console();
function Console() {
    class activeItem { 
        constructor(width, height, padding) { 
            this.width = width;
            this.height = height;
            this.padding = padding;
            this.x = canvas.width - this.width - this.padding;
            this.y = this.padding;
        }
    }
    let game = {
        animationState: false,
        refreshRate: 60 / 1000, // 60fps
        paddingTop: 20,
        fontSize: 15,
        mapping: {
            close: new activeItem(20, 20, 15)
        },
        lineX:5,
        lineY: 40,
        finisher: false
    }
    var commands = {
        'open wifi': () => {
            let initialization = [
                () => { consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "Opening wifi...."); },
                () => { consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "Please choose the network name: "); }
            ];
            if (!localStorage.hasOwnProperty("Wm1GclpTQjNhV1pw")) {
                consoleForm.removeEventListener("submit", submitCommand, false);
                consoleForm.addEventListener("submit", addNetworkName, false);
                document.getElementById("picker").setAttribute("maxlength", 20);
                let sequence = 0;
                let checker = setInterval(() => {
                    if (game.animationState === false) {
                        initialization[sequence]();
                        if (sequence === initialization.length - 1) {
                            clearInterval(checker);
                            delete sequence;
                            delete checker;
                        } else {
                            sequence++;
                        }
                    }
                }, 500);
                function addNetworkName(e) {
                    e.preventDefault();
                    let input = document.getElementById("picker");
                    localStorage.setItem("Wm1GclpTQjNhV1pw", btoa(input.value));
                    input.setAttribute("maxlength", 100);
                    consoleForm.removeEventListener("submit", addNetworkName, false);
                    consoleForm.addEventListener("submit", submitCommand, false);
                    input.value = "";
                }
            } else { 
                consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "Your wifi network is alterady on!");
            }
            let finalLine = setInterval(() => { 
                if (localStorage.hasOwnProperty("Wm1GclpTQjNhV1pw")&&(game.animationState === false)) {
                    consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "The wifi network ->"+atob(localStorage.getItem("Wm1GclpTQjNhV1pw"))+"<- is live!");
                    clearInterval(finalLine);
                    delete finalLine
                }
            });
            return 0;
        },
        'stop wifi broadcast': () => {
            if (localStorage.hasOwnProperty("Wm1GclpTQjNhV1pw")) {
                localStorage.removeItem("Wm1GclpTQjNhV1pw");
                consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "Your wifi network turned off!");
            } else { 
                consoleWriteAnimation(game.fontSize, "Consolas", "rgb(255, 0, 0)", "You're wifi network isn't turned on!");
            }
            return 0;
        },
        'wireshark': () => { 
            let initialization = [
                () => { consoleWriteAnimation(game.fontSize, "Consolas", "rgb(0, 255, 0)", "WireShark V1.0"); },
                () => {
                    let status = false;
                    if (localStorage.hasOwnProperty("Wm1GclpTQjNhV1pw")){ 
                        status = "broadcasting";
                    } else {
                        status = "offline";
                    }
                    consoleWriteAnimation(game.fontSize, "Consolas", "rgb(0, 255, 0)", "Current status: "+status);
                }
            ];
            //consoleForm.removeEventListener("submit", submitCommand, false);
            //document.getElementById("picker").setAttribute("maxlength", 20);
            let sequence = 0;
            let checker = setInterval(() => {
                if (game.animationState === false) {
                    initialization[sequence]();
                    if (sequence === initialization.length - 1) {
                        clearInterval(checker);
                        delete sequence;
                        delete checker;
                    } else {
                        sequence++;
                    }
                }
            }, 500);
            return 0;
        }
    }
    let consoleForm = document.getElementById("console-form");
    drawCloseTab();
    consoleWriteAnimation(game.fontSize, "Consolas", "rgb(0, 255, 0)", "Type hackable --h to see the commands", 5, game.paddingTop+game.fontSize);
    canvasSource.addEventListener("click", clickMapping, false);
    function clickMapping(e) {
        Object.keys(game.mapping).forEach(activeObj => {
            if ((e.offsetX >= game.mapping[activeObj].x) && (e.offsetX <= game.mapping[activeObj].x + game.mapping[activeObj].width) && (e.offsetY >= game.mapping[activeObj].y) && (e.offsetY <= game.mapping[activeObj].y + game.mapping[activeObj].height)&&(game.animationState != true)) {
                if (activeObj == 'close') {
                    game.finisher = true;
                }
            }
        });
    }
    consoleForm.addEventListener("submit", submitCommand, false);
    function submitCommand(e) {
        e.preventDefault();
        let cmds = Object.keys(commands);
        let inputContent = document.getElementById("picker");
        let cmdFound = false;
        for (let i = 0; i < cmds.length; i++) { 
            if (inputContent.value === cmds[i]) {
                cmdFound = true;
                commands[cmds[i]]();
                break;
            } else if (inputContent.value === 'hackable --h') {
                cmdFound = true;
                let sequence = 0;
                let checker = setInterval(() => { 
                    if (game.animationState === false) { 
                        consoleWriteAnimation(game.fontSize, "Consolas", "rgb(0, 0, 255)", cmds[sequence]);
                        if (sequence === cmds.length - 1) {
                            clearInterval(checker);
                            delete sequence;
                            delete checker;
                        } else {
                            sequence++;
                        }
                    }
                }, 500);
                break;
            }
        }
        inputContent.value = "";
        if (cmdFound != true) {
            consoleWriteAnimation(game.fontSize, "Consolas", "rgb(0, 255, 0)", "This command doesn't exist!", 5, game.paddingTop + game.fontSize);
        }
    }
    let loop = setInterval(() => {
        if (game.lineY >= canvas.height-game.paddingTop) {
            game.lineX = 5;
            game.lineY = 50;
            canvas.clearScreen();
            drawCloseTab();
        }
        if ((game.animationState === false)&&(consoleForm.style.display != "block")) {
            consoleForm.style.display = "block";
        } else if((game.animationState === true)&&(consoleForm.style.display == "block")){
                consoleForm.style.display = "none";
        }
        if (game.finisher === true) {
            closeLauncher();
            return initializeDesktop();
        }
    },game.refreshRate);
    function consoleWriteAnimation(font_size, font_family, color, content) {
        let itterator = 0;
        let contentArray = content.split('');
        game.animationState = true;
        canvas.ctx.fillStyle = color;
        canvas.ctx.font = font_size + "px" + " "+font_family;
        let typer = setInterval(() => {
            canvas.ctx.fillStyle = color;
            canvas.ctx.fillText(contentArray[itterator], game.lineX, game.lineY);
            game.lineX += font_size - 7;
            itterator++;
            if (game.lineX >= canvas.width - font_size) {
                    game.lineX = 5;
                    game.lineY += font_size;
            }
            if (itterator >= contentArray.length) { 
                clearInterval(typer);
                game.lineX = 5;
                game.lineY += font_size + 5;
                game.animationState = false;
            }
        }, 20);
        return 1;
    };
    function drawCloseTab() {
        let size = game.mapping.close.width;
        let x = game.mapping.close.x;
        let y = game.mapping.close.y;
        let img = new Image();
        img.src = "WkdWd1pXNWtaVzVqYVdWeg==/sprites/window-close-red.png";
        img.onload = () => {
            canvas.ctx.drawImage(img, x, y, size, size);
        }
        return 0;
    }
    function closeLauncher() { 
        let includedScript = document.getElementById("commands");
        consoleForm.style.display = "none";
        var new_element = consoleForm.cloneNode(true);
        consoleForm.parentNode.replaceChild(new_element, consoleForm);
        canvasSource.removeEventListener("click", clickMapping, false);
        if (includedScript) {
            includedScript.parentNode.removeChild(includedScript);
        }
        delete includedScript;
        clearInterval(loop);
    }
}