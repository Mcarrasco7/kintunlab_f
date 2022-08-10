<?php  
$completarurl="../..";
    include '../../bd_consul/conexion.php';
    $sqlcomuna = "select * from comunas where provincia_id =".$_POST['id'];
    $querycomuna = $mysqli->query($sqlcomuna);   
    if($querycomuna->num_rows>0){ 
        while ($r=$querycomuna->fetch_array()){
            echo "<option value='".$r["comuna_id"]."'>".$r["comuna_nombre"]."</option>";
        }
    }
?>