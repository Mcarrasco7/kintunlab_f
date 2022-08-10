<?php
  $completarurl="../../";


  
  
  require_once '../../bd_consul/DB.class.php';

  
  $db = new DB();
/*  $sqlid = "SELECT * FROM agenda order by linea";
  $resultid = mysqli_query($mysqli,$sqlid);
  $agenda = mysqli_fetch_array($resultid,MYSQLI_ASSOC);
  */
  $agenda = $db->getRows('agenda',array('where'=>array('estado'=>'0'),'order_by'=>'linea asc'));


  $return_arr = array();
  
  foreach($agenda as $agendad){
    
    $id = $agendad['id_agenda'];
    $name = utf8_decode($agendad['accion']." ".$agendad['responsable']." ".$agendad['recurso']);
    $start = $agendad['start_d'];
    $end = $agendad['end_d'];
    $progress = $agendad['progress'];
    $dependencies = $agendad['linea'];
    
    
    $return_arr[] = array(
        "id" => $id,
        "name" => $name,
        "start" => $start,
        "end" => $end,
        "progress" => $progress,
        "dependencies" => $dependencies
    );
}



  echo json_encode($return_arr);

  
?>