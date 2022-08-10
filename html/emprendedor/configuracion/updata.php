<?php
//load and initialize database class
$completarurl="../../";
require_once '../../bd_consul/DB.class.php';
$db = new DB();

$tblName = 'emprendedor';

if(($_POST['action'] == 'edit') && !empty($_POST['id_emprendedor'])){

    $parts = explode('/', $_POST['edad']);
    $date  = "$parts[2]-$parts[0]-$parts[1]";

    $userData = array(
        'rut' => $_POST['rut'],
        'edad' => $date ,
        'nombres' => $_POST['nombres'],
        'apellidos' => $_POST['apellidos'],
        'telefono' => $_POST['telefono'],
        'direccion' => $_POST['direccion'],
        'id_comuna' => $_POST['id_comuna'],
        'gfamiliaradultos' => $_POST['gfamiliaradultos'],
        'gfamiliarmenores' => $_POST['gfamiliarmenores'],
        'iniciacion_actividad' => $_POST['iniciacion_actividad'],
        'ejecutivo' => $_POST['ejecutivo'],
        'id_programa' => $_POST['id_programa'],
        'electricidad' => $_POST['electricidad'],
        'agua' => $_POST['agua'],
        'subsidio' => $_POST['subsidio'],
        'indigena' => $_POST['indigena'],
        'nivel_ventas' => $_POST['nivel_ventas'],
        'ventas' => $_POST['ventas'],
        'etapa_desarrollo' => $_POST['etapa_desarrollo'],
        'escalamiento' => $_POST['escalamiento'],
        'innovacion' => $_POST['innovacion'],
        'jornada' => $_POST['jornada'],
        'educacion' => $_POST['educacion'],
        'emprendimientodir' => $_POST['emprendimientodir'],
        'emprendimiento' => $_POST['emprendimiento'],
        'iniciacion_actividad' => $_POST['iniciacion_actividad'],
        'otrosingresos' => $_POST['otrosingresos'],
        'actividad_economica' => $_POST['actividad_economica'],
        'numero_trabajadores' => $_POST['numero_trabajadores'],
        'latitud' => $_POST['latitud'],
        'longitud' => $_POST['longitud']
        
    );
    $condition = array('id_emprendedor' => $_POST['id_emprendedor']);
    $update = $db->update($tblName, $userData, $condition);
    if($update){
        $returnData = array(
            'status' => 'ok',
            'msg' => 'Datos actualizados correctamente.',
            'data' => $update
        );
    }else{
        $returnData = array(
            'status' => 'error',
            'msg' => 'Ha habido un problema, intentalo nuevamente.',
            'data' => $update
        );
    }
    
    echo json_encode($returnData);
}elseif(($_POST['action'] == 'delete') && !empty($_POST['id_emprendedor'])){
    //delete data
    $condition = array('id_emprendedor' => $_POST['id_emprendedor']);
    $delete = $db->delete($tblName, $condition);
    if($delete){
        $returnData = array(
            'status' => 'ok',
            'msg' => 'Datos eliminados correctamente.'                    
        );
    }else{
        $returnData = array(
            'status' => 'error',
            'msg' => 'Ha habido un problema, intentalo nuevamente'
        );
    }
    
    echo json_encode($returnData);
}
elseif(($_POST['action'] == 'insert')){

    $parts = explode('/', $_POST['edad']);
    $date  = "$parts[2]-$parts[0]-$parts[1]";
  
    $userData = array(
        
        
        'rut' => $_POST['rut'],
        'edad' => $date ,
        'nombres' => $_POST['nombres'],
        'apellidos' => $_POST['apellidos'],
        'telefono' => $_POST['telefono'],
        'direccion' => $_POST['direccion'],
        'id_comuna' => $_POST['id_comuna'],
        'gfamiliaradultos' => $_POST['gfamiliaradultos'],
        'gfamiliarmenores' => $_POST['gfamiliarmenores'],
        'iniciacion_actividad' => $_POST['iniciacion_actividad'],
        'ejecutivo' => $_POST['ejecutivo'],
        'id_programa' => $_POST['id_programa'],
        'electricidad' => $_POST['electricidad'],
        'agua' => $_POST['agua'],
        'subsidio' => $_POST['subsidio'],
        'indigena' => $_POST['indigena'],
        'nivel_ventas' => $_POST['nivel_ventas'],
        'ventas' => $_POST['ventas'],
        'etapa_desarrollo' => $_POST['etapa_desarrollo'],
        'escalamiento' => $_POST['escalamiento'],
        'innovacion' => $_POST['innovacion'],
        'jornada' => $_POST['jornada'],
        'educacion' => $_POST['educacion'],
        'emprendimientodir' => $_POST['emprendimientodir'],
        'emprendimiento' => $_POST['emprendimiento'],
        'iniciacion_actividad' => $_POST['iniciacion_actividad'],
        'otrosingresos' => $_POST['otrosingresos'],
        'actividad_economica' => $_POST['actividad_economica'],
        'numero_trabajadores' => $_POST['numero_trabajadores'],
        'latitud' => $_POST['latitud'],
        'longitud' => $_POST['longitud'],
        'claridad' => $_POST['claridad']
        
    );
    
    $insert = $db->insert2($tblName, $userData);

    if($insert){
        $returnData = array(
            'status' => 'ok',
            'msg' => 'Datos actualizados correctamente.',
            'data' => $insert
        );
    }else{
        $returnData = array(
            'status' => 'error',
            'msg' => 'Ha habido un problema, intentalo nuevamente.',
            'data' => $insert
        );
    }
    
    echo json_encode($returnData);
}
else{
    echo json_encode("");
}
die();
?>