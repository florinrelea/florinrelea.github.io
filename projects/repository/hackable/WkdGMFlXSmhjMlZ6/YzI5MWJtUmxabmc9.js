var sounds = {
    click: new Audio('WkdWd1pXNWtaVzVqYVdWeg==/sfx/WTJ4cFkycz0=.mp3'),
    background: new Audio()
};
var soundLoop;
document.getElementsByName("btn3d").forEach(button => {
    sounds.click.load();
    button.addEventListener("click", () => { 
        sounds.click.currentTime = 0;
        sounds.click.play();
    });
});
function switchVolume() {
    let lastSound;
    Object.keys(sounds).forEach(sound => {
        lastSound = sounds[sound].muted;
        sounds[sound].muted = !lastSound;
    });
    return lastSound;
};
var backgroundMusic = {
    start: ()=>{
        sounds.background.src = "WkdWd1pXNWtaVzVqYVdWeg==/sfx/WW1GamEyZHliM1Z1WkE9PQ==.mp3";
        sounds.background.load();
        sounds.background.volume = 0.3;
        sounds.background.play();
        let soundloader = setInterval(() => {
            if (sounds.background.readyState == 4) {
                    clearInterval(soundloader);
                    soundLoop = setInterval(() => {
                    sounds.background.currentTime = 0;
                }, sounds.background.duration * 1000 - 100);
            }
        }, 50);
    },
    stop: () => { 
        sounds.background.currentTime = sounds.background.duration;
        clearInterval(soundLoop);
    }
};