<?php
//Security function
function check_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

//Defining all necessary variables
$mailTo = 'contact@fhuszti.com';
$subject = 'New message sent through the contact form - fhuszti.com';

//Security round
$fromName = check_input($_POST['name']);
$fromMail = check_input($_POST['email']);
$message = check_input($_POST['message']);

//If everything is clean, we can proceed
if($fromName && $fromMail && $message) {
	$emailBody = '<html>
			<head>
			  <title>New message sent through the contact form - fhuszti.com</title>
			</head>
			<body>
			  From : '.$fromName.'
			  <br />
			  Email address : '.$fromMail.'
			  <br />
			  Message : '.$message.'
			</body>
		      </html>';
	
	//For something apparently going on with Windows
	$emailBody = str_replace("\n.", "\n..", $emailBody);
	// In case any of our lines are larger than 70 characters, we should use wordwrap()
	$emailBody = wordwrap($emailBody, 70, "\r\n");
	
	//Clean way to go about adding headers, thanks to the PHP doc
	$headers = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/html; charset=iso-8859-1";
	$headers[] = "From: $fromName <$fromMail>";
	$headers[] = "Subject: {$subject}";
	
	//Now we can finally send it
	mail($mailTo, $subject, $emailBody, implode("\r\n", $headers));
}