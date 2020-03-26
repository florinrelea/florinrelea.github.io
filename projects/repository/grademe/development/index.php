<?php
    if(isset($_POST["sending"])){
        $to = "florinrelea@yahoo.com";
        $title = "Grade Me";
        $content = "Intrebarea: ".$_POST['input1'].";<br>Cu raspunsul: ".$_POST['input2'].";<br>Nota corecta: ".$_POST['input3'];
        $sender = "bot.hackernet@gmail.com";
        $header = "MIME-Version: 1.0" . "\r\n";
		$header .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $header .= "From: <$sender>";
        mail($to, $title, $content, $header);
        echo "<script>alert('Multumim pentru ajutor!'); window.location.href= 'http://florinrelea.000webhostapp.com/grademe/';</script>";
    }
?>
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <html lang="ro">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Program gresit!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    </head>
    <body>
        <form method="POST">
            <center>
                <p id="p1">Numarul intrebarii: </p>
                <input type="number" min="1" max="10" name="input1" id="input1"><br>
                <p id="p2">Raspunsul: </p>
                <input type="text" name="input2" id="input2"><br>
                <p id="p3">Nota corecta: </p>
                <input type="number" min="1" max="10" name="input3" id="input3" step=".01"><br><br>
                <input type="submit" class="send_it inputs" value="Trimite" id="sending" name="sending" onclick="goback()">
            </center>
        </form>
    </body>
</html>