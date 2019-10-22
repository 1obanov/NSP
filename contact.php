<?php
$post = (!empty($_POST)) ? true : false;

if($post)
{
$email = trim($_POST['email']);
$name = htmlspecialchars($_POST['name']);
$email = htmlspecialchars($_POST['email']);
$phone = htmlspecialchars($_POST["phone"]);

$EmailTo = "lobanova.tatyana.16@gmail.com";

$Title ="Бронь билетов на семинар 7 декабря 2019 года";
$Title1 = "=?utf-8?b?". base64_encode($Title) ."?=";

$Message ="\n\nИмя: ".$name."\nТелефон: " .$phone."\nE-mail: " .$email."\n";	

$From = "Content-Type: text/plain; charset=utf-8\n";
$From .= "From: Новая бронь <nsp@ihorlobanov.info>\n\n";	

$success = mail($EmailTo, $Title1, iconv ('utf-8', 'windows-1251', $Message), iconv ('utf-8', 'windows-1251', $From));

if($success)
{
echo 'OK';
}

}
?>