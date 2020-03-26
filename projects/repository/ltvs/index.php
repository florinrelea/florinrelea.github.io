<?php
    session_start();
    if(isset($_SESSION['alreadySeen'])){
        $random = 1;
        setcookie('alreadySeenCookie', $random, time()+3600);
    }
?>
<!DOCTYPE html>
<html>
    <head>
        <meta name="author" content="Relea Florin Iacob">
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Liceul Tehnologic "Vasile Sav"-Roman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
        <script src="main.js"></script>
        <script src="anime.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
        <?php
            if(isset($_COOKIE['alreadySeenCookie'])){
                echo"<script language='javascript'>
                seen();
                </script>";
            }else{
                echo"<script language='javascript'>
                    unseen();
                </script>";
                $_SESSION['alreadySeen'] = "1";
        }
        ?>
    </head>
    <body>
            <div id="loading_words">
                <h1 id="loading_word">Liceul Tehnologic „Vasile Sav” - Roman</h1>
            </div>
    <div id="main_content">
        <center><header>Vasile Sav</header></center>
        <ul id="navBar">
            <li id="p1" onclick="goto1()">Arduino</li>
            <li id="p2" onclick="goto2()">Site Oficial</li>
            <li id="p3" onclick="goto3()">Cronometru.ino</li>
            <li id="p4" onclick="goto4()">Robot.ino</li>
            <li id="p5" onclick="goto5()">Dance.ino</li>
        </ul>
    </div>
            <div id="loading_screen">
                <img src="images/logo_liceu.png" id="loading_picture"/>
            </div>
        <!--Loading finished-->
    </body>
</html>