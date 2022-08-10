<?php
$completarurl="../..";
include '../../consultas_bd/conexion.php';

session_start();

if(isset($_POST['view'])){
  
if($_POST["view"] != '')
{
  
    $update_query = "UPDATE comments_touser SET comment_status = 1 WHERE comment_status=0 and comments_touser.id_comments_touser = ".$_POST["view"];
    mysqli_query($mysqli, $update_query);
}

$query = "SELECT * FROM comments AS c, comments_touser AS ctu where c.comment_id = ctu.comment_id and ctu.user_id = ".$_SESSION['user_id']." ORDER BY c.comment_id DESC LIMIT 5";


$result = mysqli_query($mysqli, $query);
$output = '';
if(mysqli_num_rows($result) > 0)
{
 while($row = mysqli_fetch_array($result))
 {
   if($row['comment_status']==0){
      $output .= '
      <a class="dropdown-item d-flex align-items-center notificaciones-boton" href="#" data-id="'.$row["id_comments_touser"].'">
      <div class="mr-3">
        <div class="icon-circle bg-warning" style="color:#fff!important;">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
      </div>
      <div>
       <span class="font-weight-bold text-dark">'.$row["comment_subject"].' / <div class="small text-gray-500">'.$row["comment_date"].'</div></span>
        <div class="small text-gray-500">'.$row["comment_text"].'</div>
      </div>
    </a>';
  }
  else{
    $output .= '
      <a class="dropdown-item d-flex align-items-center notificaciones-boton" href="#" style="background-color:#e8e8e8!important";" data-id="'.$row["id_comments_touser"].'">
      <div class="mr-3">
        <div class="icon-circle bg-warning" style="color:#fff!important;">
          <i class="fas fa-exclamation-triangle"></i>
        </div>
      </div>
      <div>
      <span class="text-gray-700">'.$row["comment_subject"].' / <span class="small text-gray-700">'.$row["comment_date"].'</span></span>
      <div class="small text-gray-700">'.$row["comment_text"].'</div>
      </div>
    </a>';
  }

 }
}
else{
    $output .= '
    <a class="dropdown-item d-flex align-items-center" href="#">
    <div class="mr-3">
      <div class="icon-circle bg-warning">
        <i class="fas fa-exclamation-triangle"></i>
      </div>
    </div>
    <div>
      <div class="small text-gray-500"></div>
      No tienes notificaciones
    </div>
  </a>';
}



$status_query = "SELECT * FROM comments_touser WHERE comment_status=0 and comments_touser.user_id = ".$_SESSION['user_id'];
$result_query = mysqli_query($mysqli, $status_query);
$count = mysqli_num_rows($result_query);

$data = array(
    'notification' => $output,
    'unseen_notification'  => $count
);

echo json_encode($data);

}

?>