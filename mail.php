<?php
$name = $_POST["name"];
$email = $_POST["email"];
$message = $_POST["message"];
$formcontent="From: $name \n Message: $message";
$recipient = "dinoshahi@hotmail.com";
$subject = "Gurkha Contact Form";
$mailheader = "From: $email \r\n";
if (mail($recipient, $subject, $formcontent, $mailheader) ){
header('Location: ./thankyou.html');

exit();


} else{
  header("Location: contact.html");
}




?>

