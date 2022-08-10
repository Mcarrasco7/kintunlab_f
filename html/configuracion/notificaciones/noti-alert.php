<?php
//insert.php
$completarurl="../..";
include '../../consultas_bd/conexion.php';


if(isset($_POST["subject"]))
{
 $comunas = explode(",", $_POST["comunas"]);
 $subject = mysqli_real_escape_string($mysqli, $_POST["subject"]);
 $comment = mysqli_real_escape_string($mysqli, $_POST["comment"]);
 $date = date("Y-m-d");
 $query = "
 INSERT INTO comments(comment_subject, comment_text, comment_date)
 VALUES ('$subject', '$comment', '$date')
 ";
 
 mysqli_query($mysqli, $query);
 $id_comment =  $mysqli->insert_id;

 $date2 = date("Y-m-d H:i:s");
 $query3= "INSERT INTO alerta(estado, inicio,descripcion) VALUES ('1','$date','$subject')";
 mysqli_query($mysqli, $query3);
 $id_alerta =  $mysqli->insert_id;

 $temptext="";
 foreach ($comunas as $clave => $comuna) {
    if($clave==0){
        $temptext .=" C.comuna = '".$comuna."'";
    }
    else{
        $temptext .=" or C.comuna = '".$comuna."'";
    }
 }

 $query2 = "SELECT U.*,C.* FROM user As U, user_data As UD, comunas as C where C.id=UD.id_comuna and UD.id_user_data = U.id_user_data and (".$temptext.")";
 $result = mysqli_query($mysqli, $query2);
 
 if(mysqli_num_rows($result) > 0)
 {
    while($row = mysqli_fetch_array($result))
    {
        
        $query = "
            INSERT INTO comments_touser(comment_id, user_id)
            VALUES ('$id_comment', '".$row['user_id']."')
            ";
            
        mysqli_query($mysqli, $query);
    }
 }
 $query4 = "SELECT C.* FROM user As U, user_data As UD, comunas as C where C.id=UD.id_comuna and UD.id_user_data = U.id_user_data and (".$temptext.") GROUP BY C.id";
 $result4 = mysqli_query($mysqli, $query4);
 
 if(mysqli_num_rows($result4) > 0)
 {
    while($row = mysqli_fetch_array($result4))
    {
        $queryalertacomuna = "INSERT INTO comunas_tabla(id_comunas, id_alerta)VALUES ('".$row['id']."', '$id_alerta')";
        mysqli_query($mysqli, $queryalertacomuna);
        echo $query4;
    }
 }
 
 

}
?>