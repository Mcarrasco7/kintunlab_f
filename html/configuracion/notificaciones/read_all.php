<?php
$completarurl="../..";
include '../../consultas_bd/conexion.php';

session_start();

if(isset($_POST['id'])){
  
if($_POST["id"] != '')
    {
    $update_query = "UPDATE comments_touser SET comment_status = 1 WHERE comment_status=0 and comments_touser.user_id = ".$_POST["id"];
    mysqli_query($mysqli, $update_query);
    }
}
$data = array(
    'notification' => 'Correcta',
    'unseen_notification'  => 0
);

echo json_encode($data);
?>