<?php
if($_POST["submit"]) {
    $recipient = "aaron@keydesign.com";
    $subject = "New Form Response";
    $first = $_POST["first"];
    $last = $_POST["last"];
    $senderEmail = $_POST["email"];
    $senderPhone = $_POST["telephone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    $mailBody = "Name: ".$first .$last."\nEmail: ".$email."\n\n".$subject .$message;
    $thankYou = "<p>Thank you! Your message has been sent.</p>";
}
?>
