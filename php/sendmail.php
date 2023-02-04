<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$title = "Email title";

$c = true;
// Email creation
$title = "Email title";
foreach ($_POST as $key => $value) {
  if ($value != "" && $key != "project_name" && $key != "admin_email" && $key != "form_subject") {
    $body .= "
    " . (($c = !$c) ? '<tr>' : '<tr style="background-color: #f8f8f8;">') . "
      <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
      <td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
    </tr>
    ";
  }
}

$body = "<table style='width: 100%;'>$body</table>";

// PHPMailer settings
$mail = new PHPMailer\PHPMailer\PHPMailer();

try {
  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;

  // Your email settings
  $mail->Host       = 'smtp.gmail.com'; // SMTP
  $mail->Username   = 'yashkatip@gmail.com'; // Email address that will send the email
  $mail->Password   = 'xqajoerfskctvtbr'; // App password
  $mail->SMTPSecure = 'ssl';
  $mail->Port       = 465;

  $mail->setFrom('', 'Jesus Christ');

  // Email receiver
  $mail->addAddress('yxllwllxy@gmail.com');

  // Email sending
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  $mail->send();
} catch (Exception $e) {
  $status = "Email was not sent. Error text: {$mail->ErrorInfo}";
}
