<?php 
$to = "jnew1@mail.ru";
$from = trim($_POST['email']);

$name = htmlspecialchars($_POST['name']);
$person = htmlspecialchars($_POST['person']);
$email = htmlspecialchars($_POST['email']);
$tel = htmlspecialchars($_POST['tel']);
$date = htmlspecialchars($_POST['date']);
$comment = htmlspecialchars($_POST['comment']);

$name = urldecode($name);
$person = urldecode($person);
$email = urldecode($email);
$tel = urldecode($tel);
$date = urldecode($date);
$comment = urldecode($comment);

$name = trim($name);
$person = trim($person);
$email = trim($email);
$tel = trim($tel);
$date = trim($date);
$comment = trim($comment);

$subject = "Бронирование столика";
$message = "$name" . "\r\n" . "$person" . "\r\n" . "$email" . "\r\n" . "$tel" . "\r\n" . "$date" . "\r\n" . "$comment";

$headers = "From: $from" . "\r\n" . "Reply-To: $from" . "\r\n" . "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);
?>