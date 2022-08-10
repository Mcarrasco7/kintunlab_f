<?php 
if(!isset($_SESSION)) 
{ 
    session_start(); 

} 
if(!isset($_SESSION["user"])){
	header('Location: '.$completarurl.'/pages-login.php');
    exit();

}

$now = time();

if ($now > $_SESSION['expire']) {
            session_destroy();
            header('Location: '.$completarurl.'/pages-login.php');
        }
         
?>
           