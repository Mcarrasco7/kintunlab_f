<?php
//insert.php
$completarurl="../..";
include '../../consultas_bd/conexion.php';


if(isset($_POST["subject"]))
{
 $subject = mysqli_real_escape_string($mysqli, $_POST["subject"]);
 $comment = mysqli_real_escape_string($mysqli, $_POST["comment"]);
 $date = date("Y-m-d");
 $query = "
 INSERT INTO comments(comment_subject, comment_text, comment_date)
 VALUES ('$subject', '$comment', '$date')
 ";
 
 mysqli_query($mysqli, $query);
 $id_comment =  $mysqli->insert_id;

 echo $id_comment;


 $query2 = "SELECT * FROM user";
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

 echo $query;

}
?>