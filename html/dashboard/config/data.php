<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';
  include '../../bd_consul/conexion.php';
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database

  $userid = $_POST['id']; 

  $sqlid = " SELECT  (
                SELECT COUNT(*)
                FROM   emprendedor where genero = 0 and indigena = 0
            ) AS tot_masindi,
            (
                SELECT COUNT(*)
                FROM   emprendedor where genero = 1 and indigena = 0
            ) AS tot_femindi,
            (
                SELECT COUNT(*)
                FROM   emprendedor where genero = 0 and indigena = 1
            ) AS tot_masnoindi,
            (
                SELECT COUNT(*)
                FROM   emprendedor where genero = 1 and indigena = 1
            ) AS tot_femnoindi ";

    /*$sqlid2 = "SELECT actividad_economica.nombre as name, count(emprendedor.actividad_economica) as resultado
                from emprendedor
                INNER JOIN 
                    actividad_economica 
                ON
                emprendedor.actividad_economica=actividad_economica.id_actividad
                group by emprendedor.actividad_economica";*/

    $sqlid2 = "SELECT actividad_economica.nombre as name, actividad_economica.id_actividad as id, count(emprendedor.actividad_economica) as quantity
                from emprendedor
                INNER JOIN 
                    actividad_economica 
                ON
                emprendedor.actividad_economica=actividad_economica.id_actividad
                group by emprendedor.actividad_economica order by count(emprendedor.actividad_economica) desc";

    $sqlid2v2 = "SELECT count(emprendedor.actividad_economica) as resultado
        from emprendedor";

    $sqlid3 = " SELECT  (
                SELECT COUNT(*)
                FROM   emprendedor where iniciacion_actividad = 0
            ) AS tot_actividad,
            (
                SELECT COUNT(*)
                FROM   emprendedor where iniciacion_actividad = 1
            ) AS tot_noactividad";

    $sqlid4 = "SELECT actividad_economica.nombre as name, actividad_economica.id_actividad as id, sum(emprendedor.numero_trabajadores) as quantity
        from emprendedor
        INNER JOIN 
            actividad_economica 
        ON
        emprendedor.actividad_economica=actividad_economica.id_actividad
        group by emprendedor.actividad_economica order by sum(emprendedor.numero_trabajadores) desc";

    $sqlid4v2 = "SELECT sum(emprendedor.numero_trabajadores) as resultado
        from emprendedor";


  
  #$sqlid = "select count(*) from emprendedor where indigena = 1";
  
  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);

  $resultid2 = mysqli_query($mysqli,$sqlid2);
  $rowdata2 = mysqli_fetch_all($resultid2,MYSQLI_ASSOC);

  $resultid3 = mysqli_query($mysqli,$sqlid3);
  $rowdata3 = mysqli_fetch_all($resultid3,MYSQLI_ASSOC);

  $resultid2v2 = mysqli_query($mysqli,$sqlid2v2);
  $rowdata2v2 = mysqli_fetch_all($resultid2v2,MYSQLI_ASSOC);

  $resultid4 = mysqli_query($mysqli,$sqlid4);
  $rowdata4 = mysqli_fetch_all($resultid4,MYSQLI_ASSOC);
  
  $resultid4v2 = mysqli_query($mysqli,$sqlid4v2);
  $rowdata4v2 = mysqli_fetch_all($resultid4v2,MYSQLI_ASSOC);

 


 
  
  $datos = array('grafico1' => $rowdata3,
                 'grafico2' => $rowdata,
                 'grafico3' => $rowdata2,
                 'grafico3v2' => $rowdata2v2,
                 'grafico4' => $rowdata4,
                 'grafico4v2' => $rowdata4v2);

  echo json_encode($datos);

  //var_dump($rowdata);




?>