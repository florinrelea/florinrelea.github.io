<?php
    session_start();
    $student = "Nimeni";
    $nota = "0";
        if(isset($_SESSION['nume']) && isset($_SESSION['grade'])){
            $student = $_SESSION['nume'];
            $nota = $_SESSION['grade'];
        }else{
            echo "<style>.corner_box{display:none;}</style>";
        }
    /*
    $numele = file_get_contents('../grades/nume.txt');
    $puncte = file_get_contents('../grades/punctaj.txt');
    if(isset($numele)){
        $student = $numele;
        $nota = $puncte;
    }else{
        echo "<style>.corner_box{display:none;}</style>";
    }
    */
?>
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Relea Florin">
        <title>Grade Me</title>
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
        <link href="https://fonts.googleapis.com/css?family=Permanent+Marker" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Comfortaa" rel="stylesheet">
        <script lang="javascript" src="main.js"></script>
        <script lang="javascript" src="anime.js"></script>
    </head>
    <body>
            <div class="fill_space">
                <center>
                <header>Ce nota o sa iau?</header><br><br>
                <div id="box1">
                    <p id="p1">Vrei sa stii ce nota o sa iei la test ?</p>
                    <button type="button" id="test" onclick="grade()" onmouseover="animation1(this)">Da, vreau</button>
                </div>
                <br><br>
                <div id="box2">
                    <p id="p2">Vrei sa stii daca esti in situatie de corigenta? </p>
                    <button type="button" id="corigenta" onclick="examination()" onmouseover="animation2(this)"> Da :( </button>
                </div>
                <image src="logo_liceu.png" id="highschool">
                <image src="spre_scoala.jpg" id="door">
                <marquee behavior="scroll" direction="right" scrollamount="12"><img src="Running.gif" id="apple_man"></marquee>
                <p id="author">&copy;florinrelea</p>
                </center>
            </div>
            <div class="corner_box">
                <center>
                <p id="p3">Ultima predictie</p>
                <p id="nume_utilizator" class="corner_p"><?php echo $student ?></p>
                <p id="nota_utilizator" class="corner_p"><?php echo $nota ?></p>
                <p id="p4" class="corner_p"> la urmatorul test</p>
                </center>
                <button type="button" id="button_dev" onclick="development()" onmouseover="animation3(this)">Programul e gresit</button>
            </div>
    </body>
</html>