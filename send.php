<?php
 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
 
if (isset($_POST["send"])) {
 
  $mail = new PHPMailer(true);
 
    //Server settings
    $mail->isSMTP();                    
    $mail->Host       = 'smtp.gmail.com';   
    $mail->SMTPAuth   = true;  
    $mail->Username   = 'jsme0mir@gmail.com';  
    $mail->Password   = 'rmqsfoxzwwirdpcu';     
    $mail->SMTPSecure = 'ssl';        
    $mail->Port       = 465;                                    
 
    //Recipients
    $mail->setFrom( $_POST["email"], $_POST["name"]);
    $mail->addAddress('jsme0mir@gmail.com');  
    $mail->addReplyTo($_POST["email"], $_POST["name"]);
 
    //Content
    $mail->isHTML(true);   
    $mail->Subject = $_POST["subject"];  
    $mail->Body    = $_POST["message"]; 
      
    // Success sent message alert
    $mail->send();
    echo
    " 
    <script> 
     alert('E-mail odeslán.');
     document.location.href = 'index.html';
    </script>
    ";
}