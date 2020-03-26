<?php
if(isset($_POST['notare'])){

    /* ---Notarea--- */
    $nota = "catva";
        if(isset($_POST['q5_yes']) && isset($_POST['q6_yes']) && isset($_POST['q7_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q8_no'])){
            $nota = 10;
        }
        elseif(isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q8_no'])){
            $nota = 10;
        }
        elseif(isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q7_yes']) && isset($_POST['q8_yes']) && isset($_POST['q9_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q2_yes']) && isset($_POST['q3_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q5_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q2_yes']) && isset($_POST['q4_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q5_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q6_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q6_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q2_yes']) && isset($_POST['q1_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q2_yes']) && isset($_POST['q3_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q2_yes']) && isset($_POST['q5_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q2_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q3_yes']) && isset($_POST['q5_yes']) && isset($_POST['q10_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q4_no']) && isset($_POST['q6_yes']) && isset($_POST['q7_yes'])){
            $nota = 10;
        }
        elseif(isset($_POST['q6_yes']) && isset($_POST['q7_yes'])){
            $nota = 9.51;
        }
        elseif(isset($_POST['q7_yes']) && isset($_POST['q8_yes']) && isset($_POST['q9_yes'])){
            $nota = 9.26;
        }
        elseif(isset($_POST['q7_yes']) && isset($_POST['q10_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q7_yes']) && isset($_POST['q10_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q8_no']) && isset($_POST['q9_yes']) && isset($_POST['q10_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q10_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q4_no']) && isset($_POST['q6_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q3_yes']) && isset($_POST['q5_yes'])){
            $nota = 9;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q6_yes'])){
            $nota = 8.61;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q7_yes'])){
            $nota = 8.5;
        }
        elseif(isset($_POST['q7_yes']) && isset($_POST['q8_no'])){
            $nota = 8.47;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q8_yes'])){
            $nota = 8;
        }
        elseif(isset($_POST['q4_yes']) && isset($_POST['q5_yes'])){
            $nota = 8;
        }
        elseif(isset($_POST['q8_no'])&& isset($_POST['q10_yes'])){
            $nota = 8;
        }
        elseif(isset($_POST['q5_yes'])){
            $nota = 7.49;
        }
        elseif(isset($_POST['q4_no']) && isset($_POST['q8_no']) && isset($_POST['q9_yes'])){
            $nota = 7.2;
        }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q8_yes']) && isset($_POST['q9_no'])){
            $nota = 7;
        }
        elseif(isset($_POST['q2_yes'])){
            $nota = 7;
        }
        elseif(isset($_POST['q4_no']) && isset($_POST['q8_no'])){
            $nota = 7;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q8_no']) && isset($_POST['q9_yes'])){
            $nota = 7;
        }
        elseif(isset($_POST['q6_yes'])){
            $nota = 7;
        }
        elseif(isset($_POST['q7_yes'])){
            $nota = 7;
        }
        elseif(isset($_POST['q7_yes'])){
            $nota = 7;
        }
        elseif(isset($_POST['q3_yes']) && isset($_POST['q4_yes'])){
            $nota = 6;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q8_no'])){
            $nota = 6;
        }
        elseif(isset($_POST['q5_yes']) && isset($_POST['q8_no'])){
            $nota = 6;
        }
        elseif(isset($_POST['q3_yes'])){
            $nota = 5;
        }
        elseif(isset($_POST['q8_no']) && isset($_POST['q9_yes'])){
            $nota = 4.52;
        }
        elseif(isset($_POST['q4_no'])){
            $nota = 4.5;
        }
        elseif(isset($_POST['q8_no'])){
            $nota = 4;
        }elseif(isset($_POST['q1_no']) && isset($_POST['q2_yes']) && isset($_POST['q7_no'])){
            $nota = 5.2;
            //updated after this one
        }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_yes']) && isset($_POST['q8_no'])){
            $nota = 8;
        }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_no']) && isset($_POST['q4_yes']) && isset($_POST['q5_no']) && isset($_POST['q6_no']) && isset($_POST['q7_no']) && isset($_POST['q8_yes']) && isset($_POST['q9_no']) && isset($_POST['q10_no'])){
                    $nota = 3;
                }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_yes']) && isset($_POST['q3_yes']) && isset($_POST['q4_no']) && isset($_POST['q6_no']) && isset($_POST['q7_no']) && isset($_POST['q8_no']) && isset($_POST['q9_no']) && isset($_POST['q10_no'])){
                $nota = 8;
                }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_no']) && isset($_POST['q3_no']) && isset($_POST['q4_no']) && isset($_POST['q5_no']) && isset($_POST['q6_no']) && isset($_POST['q7_no']) && isset($_POST['q8_yes']) && isset($_POST['q9_no']) && isset($_POST['q10_no'])){
                $nota = 7;
                }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_no']) && isset($_POST['q3_no']) && isset($_POST['q4_no']) && isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q8_no']) && isset($_POST['q9_yes']) && isset($_POST['q10_no'])){
                $nota = 9;
                }
        elseif(isset($_POST['q1_yes']) && isset($_POST['q2_yes']) && isset($_POST['q3_yes']) && isset($_POST['q4_yes']) && isset($_POST['q6_yes']) && isset($_POST['q7_yes']) && isset($_POST['q8_no']) && isset($_POST['q9_yes']) && isset($_POST['q10_no'])){
                $nota = 10;
                }
        elseif(isset($_POST['q1_no']) && isset($_POST['q2_yes']) && isset($_POST['q3_no']) && isset($_POST['q4_yes']) && isset($_POST['q6_no']) && isset($_POST['q7_yes']) && isset($_POST['q8_no']) && isset($_POST['q10_yes'])){
                $nota = 7.5;
                }
    /*try */
    function question1(){
        $result = "empty";
        if(isset($_POST['q1_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q1_no'])){
            $result = "no";
        }
        return $result;
    }
    function question2(){
        $result = "empty";
        if(isset($_POST['q2_yes'])){
            $result = "yes";
        }
        elseif(isset($_POST['q2_no'])){
            $result = "no";
        }
        return $result;
    }
    function question3(){
        $result = "empty";
        if(isset($_POST['q3_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q3_no'])){
            $result = "no";
        }
        return $result;
    }
    function question4(){
        $result = "empty";
        if(isset($_POST['q4_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q4_no'])){
            $result = "no";
        }
        return $result;
    }
    function question5(){
        $result = "empty";
        if(isset($_POST['q5_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q5_no'])){
            $result = "no";
        }
        return $result;
    }
    function question6(){
        $result = "empty";
        if(isset($_POST['q6_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q6_no'])){
            $result = "no";
        }
        return $result;
    }
    function question7(){
        $result = "empty";
        if(isset($_POST['q7_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q7_no'])){
            $result = "no";
        }
        return $result;
    }
    function question8(){
        $result = "empty";
        if(isset($_POST['q8_no'])){
            $result = "yes";
        }
        if(isset($_POST['q8_yes'])){
            $result = "no";
        }
        return $result;
    }
    function question9(){
        $result = "empty";
        if(isset($_POST['q9_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q9_no'])){
            $result = "no";
        }
        return $result;
    }
    function question10(){
        $result = "empty";
        if(isset($_POST['q10_yes'])){
            $result = "yes";
        }
        if(isset($_POST['q10_no'])){
            $result = "no";
        }
        return $result;
    }
    /* try*/
    /*sending feedback*/
    if($nota == "catva"){
        $feedback = "Intrebarea 1: ".question1()."; Intrebarea 2: ".question2()."; Intrebarea 3: ".question3()."; Intrebarea 4: ".question4()."; Intrebarea 5: ".question5()."; Intrebarea 6: ".question6()."; Intrebarea 7: ".question7()."; Intrebarea 8: ".question8()."; Intrebarea 9: ".question9()."; Intrebarea 10: ".question10()." ;\n";
        $file = 'needUpdate.txt';
        if(file_exists($file)){
            $handle = fopen($file, 'a+');
            fwrite($handle, $feedback);
            fclose($handle);
        }
    }
    /*sending feedback*/
    /* ---Notarea--- */
    if(isset($_COOKIE['grade'])){
        $_COOKIE['grade'] = $nota;
    }elseif(!isset($_COOKIE['grade'])){
        setcookie('grade', $nota, time() + (3600*24));
    }
    header("Location: grade.php"); 
}
?>
<!DOCTYPE <!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Ce nota o sa iau</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" media="screen" href="quest.css" />
        <link href="https://fonts.googleapis.com/css?family=Gloria+Hallelujah" rel="stylesheet">
        <script lang="javascript" src="quest.js"></script>
    </head>
    <body>
        <form method="post">
            <div id="main_column">
                <center><p id="p1">Ce nota o sa iau?</p></center>
                <p id="question">1. Ai invatat aseara?</p>
                    <input type="checkbox" id="q1_yes" name="q1_yes" value="Da" onclick="checking1()">
                    <label for="q1_yes">Da</label>
                    <input type="checkbox" id="q1_no" name="q1_no" value="Nu" onclick="checking1()">
                    <label for="q1_no">Nu</label>
                <p id="question">2. Ai invatat saptamana trecuta pentru test?</p>
                    <input type="checkbox" id="q2_yes" name="q2_yes" value="Da" onclick="checking2()">
                    <label for="q2_yes">Da</label>
                    <input type="checkbox" id="q2_no" name="q2_no" value="Nu" onclick="checking2()">
                    <label for="q2_no">Nu</label>
                <p id="question">3. Ai invatat pe holuri?</p>
                    <input type="checkbox" id="q3_yes" name="q3_yes" value="Da" onclick="checking3()">
                    <label for="q3_yes">Da</label>
                    <input type="checkbox" id="q3_no" name="q3_no" value="Nu" onclick="checking3()">
                    <label for="q3_no">Nu</label>
                <p id="question">4. Care este pozitia ta in clasa?</p>
                    <input type="checkbox" id="q4_yes" name="q4_yes" value="fata" onclick="checking4()">
                    <label for="q4_yes">In fata</label>
                    <input type="checkbox" id="q4_no" name="q4_no" value="spate" onclick="checking4()">
                    <label for="q4_no">In spate</label>
                <p id="question">5. Cat de atent esti la ore?</p>
                    <input type="checkbox" id="q5_yes" name="q_yes" value="Putin" onclick="checking5()">
                    <label for="q5_yes">Foarte</label>
                    <input type="checkbox" id="q5_no" name="q5_no" value="Foarte" onclick="checking5()">
                    <label for="q5_no">Putin</label>
                <p id="question">6. Ce temperament are profesorul?</p>
                    <input type="checkbox" id="q6_yes" name="q6_yes" value="Calm" onclick="checking6()">
                    <label for="q6_yes">Calm</label>
                    <input type="checkbox" id="q6_no" name="q6_no" value="NebunAF" onclick="checking6()">
                    <label for="q6_no">Nebun AF</label>
                <p id="question">7. Ai mai copiat la respectiva materie?</p>
                    <input type="checkbox" id="q7_yes" name="q7_yes" value="Da" onclick="checking7()">
                    <label for="q7_yes">Da</label>
                    <input type="checkbox" id="q7_no" name="q7_no" value="Nu" onclick="checking7()">
                    <label for="q7_no">Nu</label>
                <p id="question">8. Cum te simti astazi?</p>
                    <input type="checkbox" id="q8_yes" name="q8_yes" value="Da" onclick="checking8()">
                    <label for="q8_yes">Ma duc la culcare</label>
                    <input type="checkbox" id="q8_no" name="q8_no" value="Nu" onclick="checking8()">
                    <label for="q8_no">Ca in Tenerife!</label>
                <p id="question">9. Ai mancat ceva astazi?</p>
                    <input type="checkbox" id="q9_yes" name="q9_yes" value="Da" onclick="checking9()">
                    <label for="q9_yes">Da</label>
                    <input type="checkbox" id="q9_no" name="q9_no" value="Nu" onclick="checking9()">
                    <label for="q9_no">Nu</label>
                <p id="question">10. Iti place respectiva materie?</p>
                    <input type="checkbox" id="q10_yes" name="q10_yes" value="Da" onclick="checking10()">
                    <label for="q10_yes">Da</label>
                    <input type="checkbox" id="q10_no" name="q10_no" value="Nu" onclick="checking10()">
                    <label for="q10_no">Nu</label>
                <br><br><br><br><br>
                <center><input type="submit" name="notare" id="notare" value="Noteaza-ma!"/></center>
                <!--MODEL
                <p id="question"></p>
                    <input type="checkbox" id="q_yes" name="q_yes" value="Da" onclick="checking()">
                    <label for="q_yes">Da</label>
                    <input type="checkbox" id="q_no" name="q_no" value="Nu" onclick="checking()">
                    <label for="q_no">Nu</label>
                -->
            </div>
        </form>
    </body>
</html>