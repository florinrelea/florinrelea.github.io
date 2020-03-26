function loading(){
    window.addEventListener("load", function(){
        var load_screen = document.getElementById("loading_screen");
        document.body.removeChild(load_screen);
        document.getElementById("main_content").style.display = "block";
    });
}
function seen(){setTimeout(function(){
    var loadingWords = document.getElementById("loading_words");
    document.body.removeChild(loadingWords);
    var load_screen = document.getElementById("loading_screen");
    document.body.removeChild(load_screen);
    document.getElementById("main_content").style.display = "block";
},0);
}
function unseen(){setTimeout(function(){
    var loadingWords = document.getElementById("loading_words");
    document.body.removeChild(loadingWords);
    document.getElementById("loading_screen").style.display = "block";
    setTimeout(loading(), 2000);
    setTimeout(function(){var load_screen = document.getElementById("loading_screen");
    document.body.removeChild(load_screen);
    document.getElementById("main_content").style.display = "block";},2000);
},7000);}
function goto1(){
    window.location.href = "http://florinrelea.000webhostapp.com/ltsv/arduino.txt";
}
function goto2(){
    window.location.href = "http://www.vasilesav.ro";
}
function goto3(){
    window.location.href = "http://florinrelea.000webhostapp.com/ltsv/cronometru.txt";
}
function goto4(){
    window.location.href = "http://florinrelea.000webhostapp.com/ltsv/robot.txt";
}
function goto5(){
    window.location.href = "http://florinrelea.000webhostapp.com/ltsv/moves.txt";
}