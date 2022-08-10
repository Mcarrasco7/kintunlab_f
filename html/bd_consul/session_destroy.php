<?php
	session_start();
	$_SESSION=array();
	session_destroy();
	//header('Location: '.$completarurl.'/kimgendata/login.php');
	header('Location: '.$completarurl.'/kintun/pages-login.php');
?>