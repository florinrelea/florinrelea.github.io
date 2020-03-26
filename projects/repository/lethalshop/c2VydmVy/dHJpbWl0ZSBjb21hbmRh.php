<?php
echo "<html><p>Comanda se trimite ...</p></html>";
$product = json_decode($_GET['product']);
$quantity = json_decode($_GET['quantity']);
class customer{
    public $firstName;
    public $lastName;
    public $email;
}
$currentCustomer = new customer;
$currentCustomer->firstName = $_GET['customerFN'];
$currentCustomer->lastName = $_GET['customerLN'];
$currentCustomer->email = $_GET['customerEmail'];
$currentCustomerName = $currentCustomer->firstName.'</p><p style="line-height: 0;">'.$currentCustomer->lastName;
$orderCharge = $_GET['charge'];
$delivery;
if(isset($_GET['deliveryFalse']))
{
    $delivery = "Ridicare personala";
}
if(isset($_GET['deliveryTrue']))
{
    $delivery = "Strada: ".$_GET['street'].'</p><p style="line-height: 0;">'.'Nr. '.$_GET['houseNumber'];
}
// $message = "Client: ".$currentCustomer->firstName." ".$currentCustomer->lastName."\r\n".$product."\r\n".$quantity."\r\n".$orderCharge."\r\n".$delivery;
$message = '<header style="font-size: 3rem;font-weight: 400;background-color: rgba(100, 100, 100, 0.3) !important;text-align: center;color: black;">Lethal Shop</header>
<h1 style="margin-left: auto;margin-right: auto;font-size: 2rem;width: 80%;text-align: center;background-color: black;color: rgba(255, 255, 255, 1);">Comanda Noua</h1>
<center>';
$message .= '<img src="https://lethalshop.000webhostapp.com/c2VydmVy/package.png" alt="Package" style="width: 50vw;margin-top: 5%;max-width: 100%;"></center>
<!--find a solution to replace the -center- tag-->
<div class="grid" style=" color: black; display: grid;margin-top: 5vh;width: 80vw;margin-left: auto;margin-right: auto;grid-template-columns: 1fr;text-align: center;border: 1px black solid;font-size: 1.5rem;">
    <li style="list-style-type: none;width: 100%;border-top: 0px transparent solid;border-bottom: 1px black solid;background-color: rgba(100, 100, 100, 0.3) !important;font-weight: 1000;font-size: 2rem;">Client:</li>';
$message .= '<p style="line-height: unset;">'.$currentCustomerName.'</p>';
$message .= '<li style="list-style-type: none;width: 100%;border-top: 1px black solid;border-bottom: 1px black solid;background-color: rgba(100, 100, 100, 0.3) !important;font-weight: 1000;font-size: 2rem;">Produs</li>';
for($i = 0 ; $i < count($product) ; $i++){
    $message .= '<p style="line-height: unset;">'.$product[$i].' | Cantitate: '.$quantity[$i].'</p>';
}
$message .= '<li style="list-style-type: none;width: 100%;border-top: 1px black solid;border-bottom: 1px black solid;background-color: rgba(100, 100, 100, 0.3) !important;font-weight: 1000;font-size: 2rem;">Livrare:</li>';
$message .= '<p style="line-height: 0;">'.$delivery.'</p>';
$message .= '<li style="list-style-type: none;width: 100%;border-top: 1px black solid;border-bottom: 1px black solid;background-color: rgba(100, 100, 100, 0.3) !important;font-weight: 1000;font-size: 2rem;">Total de plata:</li>';
$message .= '<p style="line-height: 0;">'.$orderCharge.'</p></div>';

if(isset($message)) 
{
    $to = "florinrelea65@gmail.com";
    $subject = "Comanda noua";
    $sender = "order@lethalshop.com";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Lethal Shop <".$sender.">\r\n";
    $headers .= "Reply-To: Lethal Shop <".$sender.">\r\n";
    $headers .= "Return-Path: Lethal Shop <".$sender.">\r\n";
    $headers .= "Organization: Lethal Shop\r\n";
    $headers .= "X-Priority: 3\r\n";
    $headers .= "X-Mailer: PHP". phpversion() ."\r\n";
    $checkMail_order = false;
    $checkMail_confirmation = false;
    while(!$checkMail_order)
    {
        $checkMail_order = mail($to, $subject, $message, $headers);
    }
    while(!$checkMail_confirmation){
        $checkMail_confirmation = mail($currentCustomer->email, $subject, $message, $headers);
    }
    if($checkMail_order && $checkMail_confirmation){
        echo "<script lang='text/javascript'>window.location.assign('../index.html');</script>";
    }

}
?>