<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database

  $userid = $_POST['id']; 
  
  $sqlid = "SELECT ORG.*,DATE_FORMAT(creacion,'%m/%d/%Y') AS creacion2,DATE_FORMAT(renovacionpersonalidadjuridica,'%m/%d/%Y') AS renovacionpersonalidadjuridica2,DATE_FORMAT(vigencia,'%m/%d/%Y') AS vigencia2 FROM organizaciones ORG where ORG.id_organizaciones = ".$userid;

  
  
  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);
  $dateor=$rowdata['creacion2'];
  if($_POST['id']!=0){
    echo "<script> var id = ".$userid.";</script>";
  }
 

  //var_dump($rowdata);




?>

<form id="form-datos">   
    <div class="row">
        <div class="col-lg-12">     
                    <div class="form-group">
                        <input type="text" id="id_organizaciones" name="id_organizaciones" class="form-control d-none" value="<?php echo $rowdata['id_organizaciones']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="nombre">Organización</label>
                        <input type="text" id="nombre" name="nombre" class="form-control" value="<?php echo $rowdata['nombre']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="clasificación">Clasificación</label>
                        <input type="text" id="nombre" name="clasificación" class="form-control" value="<?php echo $rowdata['clasificación']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="rol">Rol</label>
                        <input type="text" id="rol" name="rol" class="form-control" value="<?php echo $rowdata['rol']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="creacion">Antiguedad</label>
                        <input type="text" class="form-control date" id="creacion" name="creacion" data-toggle="date-picker" data-single-date-picker="true" value ="<?php echo $rowdata['creacion2']; ?>">
                    </div>
                    <hr>
                    
                    <div class="form-group">
                        <label for="personalidadjuridica">N° personalidad juridica</label>
                        <input type="text" id="personalidadjuridica" name="personalidadjuridica" class="form-control" value="<?php echo $rowdata['personalidadjuridica']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="renovacionpersonalidadjuridica">Renovación de personalidad juridica</label>
                        <input type="text" class="form-control date" id="renovacionpersonalidadjuridica" name="renovacionpersonalidadjuridica" data-toggle="date-picker" data-single-date-picker="true" value ="<?php echo $rowdata['renovacionpersonalidadjuridica2']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="vigencia">Vigencia</label>
                        <input type="text" class="form-control date" id="vigencia" name="vigencia" data-toggle="date-picker" data-single-date-picker="true" value ="<?php echo $rowdata['vigencia2']; ?>"> 
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="socios">Socios</label>
                        <input data-toggle="touchspin" type="number" name="socios" value="<?php echo $rowdata['socios']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="presidente">Presidente/a</label>
                                <input type="text"  class="form-control" name="presidente" value="<?php echo $rowdata['presidente']; ?>">
                            </div>
                            <div class="col-lg-6">
                                <label for="presidente_rut">Presidente/a Rut</label>
                                <input type="text"  class="form-control" name="presidente_rut" value="<?php echo $rowdata['presidente_rut']; ?>">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="secretario">Secretario/a</label>
                                <input type="text"  class="form-control" name="secretario" value="<?php echo $rowdata['secretario']; ?>">
                            </div>
                            <div class="col-lg-6">
                                <label for="secretario_rut">Secretario/a Rut</label>
                                <input type="text"  class="form-control" name="secretario_rut" value="<?php echo $rowdata['secretario_rut']; ?>">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <div class="row">
                            <div class="col-lg-6">
                                <label for="tesorero">Tesorero/a</label>
                                <input type="text"  class="form-control" name="tesorero" value="<?php echo $rowdata['tesorero']; ?>">
                            </div>
                            <div class="col-lg-6">
                                <label for="tesorero_rut">Tesorero/a Rut</label>
                                <input type="text"  class="form-control" name="tesorero_rut" value="<?php echo $rowdata['tesorero_rut']; ?>">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="domicilio">Domicilio</label>
                        <input type="text" id="domicilio" name="domicilio" class="form-control" value="<?php echo $rowdata['domicilio']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="contacto">Fono</label>
                        <input type="text" id="contacto" name="contacto" class="form-control" value="<?php echo $rowdata['contacto']; ?>">
                    </div>         
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
                    data:'tblName=organizaciones&action=insert&'+inputData,
                    success:function(response){
                        if(response.status == 'ok'){
                            $("#scrollable-modal").modal('toggle');
                            console.log(response.data,"ok"); 
                            //table.ajax.reload();
                            location.reload();
                            loaduserdata("datatables-org.php","#tableorg","tablaorg");
                            
                        }else{
                            
                            console.log(response); 
                        }
                    }
                });
            }
            else{
                $.ajax({
                    type:'POST',
                    url:'configuracion/updata-asoc.php',
                    dataType: "json",
                    data:'tblName=organizaciones&action=edit&'+inputData,
                    success:function(response){
                        if(response.status == 'ok'){
                            $("#scrollable-modal").modal('toggle');
                            console.log(response.data,"ok"); 
                            //table.ajax.reload();
                            location.reload();
                            loaduserdata("datatables-org.php","#tableorg","tablaorg");
                            
                        }else{
                            
                            console.log(response); 
                        }
                    }
                });

            }
        //}
        insert=false;
        
    });
    
    


</script>