
<?php

include '../../consultas_bd/validar.php';
$error="";
include '../../consultas_bd/conexion.php';

 require_once '../../consultas_bd/DB.class.php';
 $db = new DB();

 //get users from database <td> echo $user['id_seguimiento_tabla']; </td>    
 $id= $_POST['id']; 

 //$users = $db->getRows('recuperacion',array('where'=> array('id_alerta' => $id),'order_by'=>'id_recuperacion DESC'));

 //$sql= "SELECT A.*, OB.id_ejes from plan_reduccion_de_riesgo P, objetivos_estrategicas OB, acciones_estrategicas A where P.id_user=4 and P.estado = 1 and OB.id_plan = id_plan_reduccion_de_riesgo and A.id_objetivos_estrategicas = OB.id_objetivos_estrategicas and DATEDIFF(plazos,fecha)<1095 ";
 $sql= "SELECT A.*, OB.id_ejes from plan_reduccion_de_riesgo P, objetivos_estrategicas OB, acciones_estrategicas A, comunas C, user_data UD, user U where C.id=".$id." and  P.id_user=U.user_id and U.id_user_data=UD.id_user_data and UD.id_comuna = C.id and P.estado = 1 and OB.id_plan = id_plan_reduccion_de_riesgo and A.id_objetivos_estrategicas = OB.id_objetivos_estrategicas and DATEDIFF(plazos,fecha)<1095 ";

 $result = $mysqli->query($sql);
 
 $users = $result->fetch_all(MYSQLI_ASSOC);


 //get status message from session
 if(!empty($sessData['status']['msg'])){
     $statusMsg = $sessData['status']['msg'];
     $statusMsgType = $sessData['status']['type'];
     unset($_SESSION['sessData']['status']);
 }

?> 

<div class="card t-azul">
               <div class="table-responsive p-4" >
                   <table id="dataTable" width="100%" cellspacing="0" class="table" >
                       <thead>
                           <tr>
                             
                             <th  scope="col">Codigo</th>
                             <th  scope="col">Tarea</th>
                             <th  scope="col">Descripción</th>
                             <th  scope="col">Inicio</th>
                             <th  scope="col">Encargado</th>
                             <th  scope="col">Contacto</th>
                             <th  scope="col">Estado</th>
                             
                           </tr>
                       </thead>
                       <tbody id="userData">
                               <?php if(!empty($users)): foreach($users as $user): ?>
                               <tr role ="row" id="<?php echo $user['id_acciones_estrategicas']; ?>">
                                                          
                                   <td><?php echo $user['id_acciones_estrategicas']; ?></td>
                                   <td>
                                       <span class="editSpan accion"><?php echo utf8_decode($user['accion']); ?></span>
                                       <input class="editInput accion form-control input-sm" type="text" name="accion" value="<?php echo utf8_decode($user['accion']); ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan descripcion"><?php echo utf8_decode($user['descripcion']); ?></span>
                                       <input class="editInput descripcion form-control input-sm" type="text" name="descripcion" value="<?php echo utf8_decode($user['descripcion']); ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan plazos"><?php echo $user['plazos']; ?></span>
                                       <input class="editInput plazos form-control input-sm" type="date" name="plazos" value= "<?php echo date("Y-m-d", strtotime($user['plazos'])); ?>" style="display: none;"  min="2020-01-01">
                                   </td>
                                   <td>
                                       <span class="editSpan responsables"><?php echo utf8_decode($user['responsables']); ?></span>
                                       <input class="editInput responsables form-control input-sm" type="text" name="responsables" value="<?php echo utf8_decode($user['responsables']); ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan fuentes"><?php echo utf8_decode($user['fuentes']); ?></span>
                                       <input class="editInput fuentes form-control input-sm" type="text" name="fuentes" value="<?php echo utf8_decode($user['fuentes']); ?>" style="display: none;">
                                   </td>
                                   <td class="d-flex justify-content-center">
                                       
                                   <?php if ($user['estado']=="1"){echo '<button type="button" data-estado="1" class="btn btn-success row-estado" disabled>Finalizado</button>';}else{echo '<button type="button" data-estado="0" class="btn btn-info row-estado" disabled>En Proceso</button>';}  ?>
                                       <!--<input class="editInput estado form-control input-sm" type="text" name="estado" value="<?php //echo $user['estado']; ?>" style="display: none;">-->
                                   </td>
                                   


                               </tr>
                               <?php endforeach; else: ?>
                               <tr><td colspan="5">No se encontraron datos o no existe alerta activa</td></tr>
                               <?php endif; ?>
                           </tbody>
                       </table>      
                   </div>
               </div>

<script>
 $( ".row-estado" ).click(function() {
     var estado=$(this).data("estado");
     if(estado==1){
         $(this).removeClass("btn-success");
         $(this).addClass("btn-info");
         $(this).data('estado', '0');
         $(this).html('En Proceso');
     }
     else{
         $(this).removeClass("btn-info");
         $(this).addClass("btn-success");
         $(this).data('estado', '1');
         $(this).html('Finalizado');
     }
 });
</script>
