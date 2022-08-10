<?php
//load and initialize database class
$completarurl="../../";
require_once '../../bd_consul/DB.class.php';
$db = new DB();

$tblName = $_POST['tblName'];

if(($_POST['action'] == 'edit') && (!empty($_POST['id_organizaciones']) || !empty($_POST['id_comunidades']))){
    //update data
    if($tblName=="organizaciones"){
        $userData = array(
            'nombre' => $_POST['nombre'],
            
            'rol' => $_POST['rol'],
            'creacion' => date("Y-m-d", strtotime($_POST['creacion'])),
            'personalidadjuridica' => $_POST['personalidadjuridica'],
            'renovacionpersonalidadjuridica' => date("Y-m-d", strtotime($_POST['renovacionpersonalidadjuridica'])),
            'vigencia' => date("Y-m-d", strtotime($_POST['vigencia'])),
            'socios' => $_POST['socios'],
            'presidente' => $_POST['presidente'],
            'presidente_rut' => $_POST['presidente_rut'],
            'secretario' => $_POST['secretario'],
            'secretario_rut' => $_POST['secretario_rut'],
            'tesorero' => $_POST['tesorero'],
            'tesorero_rut' => $_POST['tesorero_rut'],
            'domicilio' => $_POST['domicilio'],
            'contacto' => $_POST['contacto']
        );
        $condition = array('id_organizaciones' => $_POST['id_organizaciones']);
    }
    elseif($tblName=="comunidades"){
        $userData = array(
            'nombre' => $_POST['nombre'],
            'programa' => $_POST['programa'],
            'sector' => $_POST['sector'],
            'socios' => $_POST['socios'],
            'presidente' => $_POST['presidente'],
            'rubroprincipal' => $_POST['rubroprincipal'],
            'autoridadancestral' => $_POST['autoridadancestral'],
            'liderazgos' => $_POST['liderazgos'],
            'comunidadescol' => $_POST['comunidadescol']
        );
        $condition = array('id_comunidades' => $_POST['id_comunidades']);
    }

    
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


    
}elseif(($_POST['action'] == 'delete') && !empty($_POST['id_organizaciones'])){
    //delete data
    $condition = array('rut' => $_POST['id_organizaciones']);
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

    if($tblName=="organizaciones"){
        $userData = array(
            'nombre' => $_POST['nombre'],
            
            'rol' => $_POST['rol'],
            'creacion' => date("Y-m-d", strtotime($_POST['creacion'])),
            'personalidadjuridica' => $_POST['personalidadjuridica'],
            'renovacionpersonalidadjuridica' => date("Y-m-d", strtotime($_POST['renovacionpersonalidadjuridica'])),
            'vigencia' => date("Y-m-d", strtotime($_POST['vigencia'])),
            'socios' => $_POST['socios'],
            'presidente' => $_POST['presidente'],
            'presidente_rut' => $_POST['presidente_rut'],
            'secretario' => $_POST['secretario'],
            'secretario_rut' => $_POST['secretario_rut'],
            'tesorero' => $_POST['tesorero'],
            'tesorero_rut' => $_POST['tesorero_rut'],
            'domicilio' => $_POST['domicilio'],
            'contacto' => $_POST['contacto']
        );
   
    }
    elseif($tblName=="comunidades"){
        $userData = array(
            'nombre' => $_POST['nombre'],
            'programa' => $_POST['programa'],
            'sector' => $_POST['sector'],
            'socios' => $_POST['socios'],
            'presidente' => $_POST['presidente'],
            'rubroprincipal' => $_POST['rubroprincipal'],
            'autoridadancestral' => $_POST['autoridadancestral'],
            'liderazgos' => $_POST['liderazgos'],
            'comunidadescol' => $_POST['comunidadescol']
        );
    }

    $insert = $db->insert2($tblName,$userData);
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