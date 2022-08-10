<?php
//load and initialize database class
require_once '../../consultas_bd/DB.class.php';
$db = new DB();

$tblName = 'acciones_estrategicas';

if(($_POST['action'] == 'edit') && !empty($_POST['id'])){
    //update data
    $userData = array(
        'responsables' => $_POST['responsables'],
        'accion' => $_POST['accion'],
        'descripcion' => $_POST['descripcion'],
        'plazos' => $_POST['plazos'],
        'fuentes' => $_POST['fuentes'],
        'estado' => $_POST['estado']
    );
    $condition = array('id_acciones_estrategicas' => $_POST['id']);
    $update = $db->update($tblName, $userData, $condition);
    if($update){
        $returnData = array(
            'status' => 'ok',
            'msg' => 'Datos actualizados correctamente.',
            'data' => $userData
        );
    }else{
        $returnData = array(
            'status' => 'error',
            'msg' => 'Ha habido un problema, intentalo nuevamente.',
            'data' => $userData
            
        );
    }
    
    echo json_encode($returnData);
}elseif(($_POST['action'] == 'delete') && !empty($_POST['id'])){
    //delete data
    $condition = array('id_acciones_estrategicas' => $_POST['id']);
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
    //add data
    $insert = $db->insert_recu($tblName);
    if($insert){
        $returnData = array(
            'status' => 'ok',
            'msg' => 'Datos Agregados correctamente.',
            'msg2' => $insert
        );
    }else{
        $returnData = array(
            'status' => 'error',
            'msg' => 'Ha habido un problema, intentalo nuevamente',
            'msg2' => $insert
        );
    }
    
    echo json_encode($returnData);
}
die();
?>