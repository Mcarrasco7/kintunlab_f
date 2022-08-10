<?php
$completarurl="..";
include '../consultas_bd/validar.php';

include '../consultas_bd/conexion.php';

$consulta = $_POST['value'].' style="border-width:0" width="100%" height="300px" frameborder="0" scrolling="yes"></iframe>';
$sqlcalendario= "update calendario set descripcion ='".$consulta."' where id_user = ".$_SESSION["idregion"];
$querycalendario = $mysqli->query($sqlcalendario);   

echo $sqlcalendario;

?>