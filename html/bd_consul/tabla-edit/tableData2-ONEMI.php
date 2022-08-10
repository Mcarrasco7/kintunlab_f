
<?php

include '../../consultas_bd/validar.php';
$error="";
include '../../consultas_bd/conexion.php';

 require_once '../../consultas_bd/DB.class.php';
 $db = new DB();

 //get users from database <td> echo $user['id_seguimiento_tabla']; </td>    
 $id= $_POST['id']; 

 //$users = $db->getRows('recuperacion',array('where'=> array('id_alerta' => $id),'order_by'=>'id_recuperacion DESC'));

 $users = $db->getRows('seguimiento_tabla',array('where'=> array('id_alerta' => $id, 'estado' => '0'),'order_by'=>'id_seguimiento_tabla DESC'));


 //get status message from session
 if(!empty($sessData['status']['msg'])){
     $statusMsg = $sessData['status']['msg'];
     $statusMsgType = $sessData['status']['type'];
     unset($_SESSION['sessData']['status']);
 }

?> 

<div class="card t-azul">
               <div class="table-responsive p-4" >
                   <table id="dataTable2" width="100%" cellspacing="0" class="table" >
                       <thead>
                           <tr>
                             
                             <th  scope="col">Codigo</th>
                             <th  scope="col">Tarea</th>
                             <th  scope="col">Descripción</th>
                             <th  scope="col">Encargado</th>
                             <th  scope="col">Contacto</th>
                             <th  scope="col">Estado</th>
                         
                           </tr>
                       </thead>
                       <tbody id="userData">
                               <?php if(!empty($users)): foreach($users as $user): ?>
                               <tr role ="row" id="<?php echo $user['id_seguimiento_tabla']; ?>">
                                                          
                                   <td><?php echo $user['id_alerta']; ?></td>
                                   <td>
                                       <span class="editSpan tarea"><?php echo $user['tarea']; ?></span>
                                       <input class="editInput tarea form-control input-sm" type="text" name="tarea" value="<?php echo $user['tarea']; ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan descripcion"><?php echo $user['descripcion']; ?></span>
                                       <input class="editInput descripcion form-control input-sm" type="text" name="descripcion" value="<?php echo $user['descripcion']; ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan encargado"><?php echo $user['encargado']; ?></span>
                                       <input class="editInput encargado form-control input-sm" type="text" name="encargado" value="<?php echo $user['encargado']; ?>" style="display: none;">
                                   </td>
                                   <td>
                                       <span class="editSpan contacto"><?php echo $user['contacto']; ?></span>
                                       <input class="editInput contacto form-control input-sm" type="text" name="contacto" value="<?php echo $user['contacto']; ?>" style="display: none;">
                                   </td>
                                   <td class="d-flex justify-content-center">
                                       
                                        <?php if ($user['estado']=="1"){echo '<button type="button" data-estado="1" class="btn btn-success row-estado">Finalizado</button>';}else{echo '<button type="button" data-estado="0" class="btn btn-info row-estado">En Proceso</button>';}  ?>
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
