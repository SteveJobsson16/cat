<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['web']) || empty($_POST['message'])) {
	echo "failed";
}else{

    $name=$_POST['name'];
	$email=$_POST['email'];
	$website=$_POST['web'];
	$message=$_POST['message'];
	
	/** Put Your Email address here. **/
	
	$to= 'info@themeapt.com';  

	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n"; 

	$subject = 'Contact from on your site';
	$body='You have got a new message from the contact form on your website.'.'<br><br>';
	$body.='<b>Name:</b> '.$name.'<br>';
	$body.='<b>Email:</b> '.$email.'<br>';
	$body.='<b>Website:</b> '.$website.'<br>';
	
	$body.='<b>Message:</b> '.'<br>'.$message.'<br>';
			
	if(mail($to, $subject, $body,$headers )) {
		echo "success";
	} else {
		echo "failed";
	}
	
}

?>