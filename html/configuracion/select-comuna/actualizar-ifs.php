<?php

if(!empty($_POST)){
	if(isset($_POST["ifs1"]) &&isset($_POST["ifs2"]) &&isset($_POST["ifs3"]) &&isset($_POST["ifs4"])){
		require_once '../../consultas_bd/conexion.php';
		$total = round($_POST["ifs1"]*0.25+$_POST["ifs2"]*0.25+$_POST["ifs3"]*0.25+$_POST["ifs4"]*0.25, 1);	
        $sql = "UPDATE indice_fs set ordenamiento=\"$_POST[ifs1]\",caracterizacion=\"$_POST[ifs2]\",cambio=\"$_POST[ifs3]\",gobernanza=\"$_POST[ifs4]\",total=\"$total\" where user_id=".$_POST["id"];
        
        $query = $mysqli->query($sql);
      
        
	}
}

?>