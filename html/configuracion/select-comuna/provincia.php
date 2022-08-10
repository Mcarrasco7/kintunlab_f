<?php  
$completarurl="../..";
    include '../../bd_consul/conexion.php';
    $sqlprovincia = "select * from provincias where region_id=".$_POST['id'];
    $queryprovincia = $mysqli->query($sqlprovincia);   
    if($queryprovincia->num_rows>0){ 
        while ($r=$queryprovincia->fetch_array()){
            echo "<option value='".$r["provincia_id"]."'>".$r["provincia_nombre"]."</option>";
        }
    }
?>