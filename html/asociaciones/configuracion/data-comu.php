<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database
  $comunas = $db->getRows('comunas',array('order_by'=>'comuna_nombre asc'));
  $programas = $db->getRows('programa',array('order_by'=>'Nombre asc'));

  $userid = $_POST['id']; 
  
  $sqlid = "SELECT CO.*,C.*, P.Nombre as programanombre, P.id_programa as pid FROM comunidades CO, comunas C, programa P where P.id_programa = CO.programa and  CO.sector = C.comuna_id  and CO.id_comunidades = ".$userid;
 
  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);
  if($_POST['id']!=0){
    echo "<script> var id = ".$userid.";</script>";
  }

  //var_dump($rowdata);




?>

<form id="form-datos">   
    <div class="row">
        <div class="col-lg-12">   
                    <input type="text" id="id_comunidades" name="id_comunidades" class="form-control d-none" value="<?php echo $rowdata['id_comunidades']; ?>">  
                    <div class="form-group">
                        <label for="nombre">Nombre Comunidad, grupo o Comité</label>
                        <input type="text" id="nombre" name="nombre" class="form-control" value="<?php echo $rowdata['nombre']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="programa">Programa</label>
                        <select class="form-control select2" data-toggle="select2" id="programa" name="programa">
                            
                            <optgroup label="Comunas">
                                <?php if(!empty($programas)): foreach($programas as $programa): ?>
                                <?php if($rowdata['pid']==$programa['id_programa']){?>
                                    <option selected value="<?php echo $programa['id_programa'];?>"><?php echo $programa['Nombre'];?></option>
                                <?php }
                                else{
                                ?>
                                    <option value="<?php echo $programa['id_programa'];?>"><?php echo $programa['Nombre'];?></option>
                                <?php }?>
                                <?php endforeach; else: ?>
                                    <option value="0">No existen datos</option>
                                <?php endif; ?>
                            </optgroup>
                        </select>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="sector">Comuna</label>
                        <select class="form-control select2" data-toggle="select2" id="sector" name="sector">
                            
                            <optgroup label="Comunas">
                                <?php if(!empty($comunas)): foreach($comunas as $comuna): ?>
                                <?php if($rowdata['id_comuna']==$comuna['comuna_id']){?>
                                    <option selected value="<?php echo $comuna['comuna_id'];?>"><?php echo $comuna['comuna_nombre'];?></option>
                                <?php }
                                else{
                                ?>
                                    <option value="<?php echo $comuna['comuna_id'];?>"><?php echo $comuna['comuna_nombre'];?></option>
                                <?php }?>
                                <?php endforeach; else: ?>
                                    <option value="0">No existen datos</option>
                                <?php endif; ?>
                            </optgroup>
                        </select>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="socios">Socios</label>
                        <input data-toggle="touchspin" type="number" name="socios" value="<?php echo $rowdata['socios']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="presidente">Presidente / Delegado</label>
                        <input type="text"  class="form-control" id="presidente" name="presidente" placeholder="presidente" value="<?php echo $rowdata['presidente']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="rubroprincipal">Principales rubros</label>
                        <input type="text" id="rubroprincipal" name="rubroprincipal" class="form-control" placeholder="Rubro al que corresponde" value="<?php echo $rowdata['rubroprincipal']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="autoridadancestral">Autoridades ancestrales</label>
                        <input type="text" id="autoridadancestral" name="autoridadancestral" class="form-control" placeholder="Autoridad ancestral" value="<?php echo $rowdata['autoridadancestral']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="liderazgos">Otros Liderazgos</label>
                        <input type="text" id="liderazgos" name="liderazgos" class="form-control" placeholder="Otros Liderazgos" value="<?php echo $rowdata['liderazgos']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="comunidadescol">Empresas, Asociaciones, Cooperativas</label>
                        <input type="text" id="comunidadescol" name="comunidadescol" class="form-control" placeholder="Empresas, Asociaciones, Cooperativas" value="<?php echo $rowdata['comunidadescol']; ?>">
                    </div>
                    <hr>
                
            
        </div>
    </div>
</form>


         
 <!-- bundle -->
<script src="../assets/js/vendor.min.js"></script>
<script src="../assets/js/app.min.js"></script>

<!-- third party js -->
<script src="../assets/js/vendor/jquery.dataTables.min.js"></script>
<script src="../assets/js/vendor/dataTables.bootstrap4.js"></script>
<script src="../assets/js/vendor/dataTables.responsive.min.js"></script>
<script src="../assets/js/vendor/responsive.bootstrap4.min.js"></script>
<script src="../assets/js/vendor/dataTables.buttons.min.js"></script>
<script src="../assets/js/vendor/buttons.bootstrap4.min.js"></script>
<script src="../assets/js/vendor/buttons.html5.min.js"></script>
<script src="../assets/js/vendor/buttons.flash.min.js"></script>
<script src="../assets/js/vendor/buttons.print.min.js"></script>
<script src="../assets/js/vendor/dataTables.keyTable.min.js"></script>
<script src="../assets/js/vendor/dataTables.select.min.js"></script>
<!-- third party js ends -->

<!-- demo app -->

<!-- end demo js-->
<!-- plugin js -->

<!-- Summernote demo -->


<script>
    

    

    

    $('.savedata').on('click',function(){
        //var ID = $(this).closest("tr").attr('id');
        var inputData = $( "form" ).serialize();

        /*if(insert==true){
            
            $.ajax({
                type:'POST',
                url:'configuracion/updata.php',
                dataType: "json",
                data:'action=insert&'+inputData,
                success:function(response){
                    console.log(response.data); 
                    if(response.status == 'ok'){
                        $("#scrollable-modal").modal('toggle');
                        console.log(response,"ok"); 
                        loaduserdata();
                    }else{
                        console.log(response.data); 
                    }
                }
            });
        }
        else{*/
            console.log(insert,inputData);
            if(insert==true){
            $.ajax({
                type:'POST',
                url:'configuracion/updata-asoc.php',
                dataType: "json",
                data:'tblName=comunidades&action=insert&'+inputData,
                success:function(response){
                    if(response.status == 'ok'){
                        $("#scrollable-modal").modal('toggle');
                        console.log(response.data,"ok"); 
                        //loaduserdata()
                        location.reload();
                        loaduserdata("datatables-comu.php","#tablecomu","tablacomu");
                    }else{
                        
                        console.log(response.data); 
                    }
                }
            });
        }
        else{
            $.ajax({
                type:'POST',
                url:'configuracion/updata-asoc.php',
                dataType: "json",
                data:'tblName=comunidades&action=edit&'+inputData,
                success:function(response){
                    if(response.status == 'ok'){
                        $("#scrollable-modal").modal('toggle');
                        console.log(response.data,"ok"); 
                        //loaduserdata()
                        location.reload();
                        loaduserdata("datatables-comu.php","#tablecomu","tablacomu");
                    }else{
                        
                        console.log(response.data); 
                    }
                }
            });
        }
        //}
        insert=false;
        
    });
    
    


</script>