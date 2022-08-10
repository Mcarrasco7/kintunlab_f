<?php

$database = include($completarurl.'/configuracion/config.php');
//var_dump($database);
$host = $database['database']['host'];
$db = $database['database']['name']; 
$user = $database['database']['user'];
$pass = $database['database']['pass'];
/*$host = '45.236.128.11:3306';
$db = 'test2'; 
$user = 'root';
$pass = 'cffr4e3ecfec343';*/
$mysqli = new mysqli($host, $user, $pass, $db);
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
//$connect = new PDO("mysql:host=localhost:3306; dbname=ottos_25452089_prueba", "root", "cffr4e3ecfec343");
$mysqli->set_charset("utf8");

?>





