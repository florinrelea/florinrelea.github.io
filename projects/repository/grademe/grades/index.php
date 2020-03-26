<?php
session_start();
    if(isset($_POST['sub_name'])){
        $numeelev = $_POST['inpt_name'];
        setcookie('student', $numeelev, time() + (3600*24));
        header("Location: quest.php");
    }
?>
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Ce nota o sa iau</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
        <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet"/>
    </head>
    <body>
        <div id="main_box">
            <center>
            <p id="p1">Cum te numesti ?</p>
            <form  method="post">
                <input type="text" name="inpt_name" type="text" placeholder="Numele tau absolut de real" id="inpt_name"/>
                <input type="submit" name="sub_name" id="sub_name" value="Incepe"/>
            </form>
            </center>
        </div>
    </body>
</html>