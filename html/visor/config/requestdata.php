<?php
$completarurl="../../";

include '../../bd_consul/conexion.php';


$sqlid = "SELECT E.*,C.*, P.Nombre as programanombre, P.id_programa as pid FROM emprendedor E, comunas C, programa P where P.id_programa = E.id_programa and  E.id_comuna = C.comuna_id  ";
 
$resultid = mysqli_query($mysqli,$sqlid);


//$result = mysqli_query($con,$sqlid);
$rowdata = $resultid->fetch_all(MYSQLI_ASSOC);

// Encoding array in JSON format
echo json_encode($rowdata);