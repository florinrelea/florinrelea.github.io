<?php
    session_start();
    $_SESSION['grade'] = $_COOKIE['grade'];
    $_SESSION['nume'] = $_COOKIE['student'];
    unset($_COOKIE['grade']);
    unset($_COOKIE['student']);
    /*
    setcookie('grade', 'thevalue', time() - 3600);
    setcookie('student', 'thevalue', time() - 3600);
    $numele = json_encode($_SESSION['nume']);
    $punctaj = json_encode($_SESSION['grade']);
    file_put_content("nume.txt", $numele);
    file_put_content("punctaj.txt", $punctaj);
    */
    $file = 'database.txt';
    if(file_exists($file)){
        $handle = fopen($file, 'a+'); //w from write
        $txt = $_SESSION['nume'].' --> '.$_SESSION['grade']."\n";
        fwrite($handle, $txt);
        fclose($handle);
    }
?>
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Ce nota o sa iau?</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="grade.css"/>
        <script lang="javascript" src="grade.js"></script>
    </head>
    <body>
        <div id="main_box">
            <center><p id="p1">Predictie</p></center>
            <center><p id="p2"><?php echo $_SESSION['nume'] ?>, vei lua :  <?php echo $_SESSION['grade'] ?> la urmatorul test!</p></center>
        </div>
    </body>
</html>