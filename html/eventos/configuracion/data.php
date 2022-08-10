<meta http-equiv="Content-Type" content="text/html; charset=utf-8">  

<?php
  header('Content-Type: text/html; charset=utf-8');
  $completarurl="../../";
  
  include '../../bd_consul/validar.php';
  $error="";
  include '../../bd_consul/conexion.php';

  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database
  $eventos = $db->getRows('evento',array('order_by'=>'fin desc'));


  $userid = $_POST['id']; 



?>


<?php if(!empty($eventos)): foreach($eventos as $evento): ?>

   <?php 

    $fin = $evento['estado'];


    if($fin==1){
        $res="En proceso";
        $res2="badge-primary";
    }
    else{
        $res="Finalizado";
        $res2="badge-secondary";
    }
    
    ?>

    <div class="col-md-6 col-xl-3">
        <!-- project card -->
        <div class="card d-block">
            <!-- project-thumbnail -->
            <img class="card-img-top"  height="230" src="<?php echo $evento['archivo'];?>" alt="project image cap">
            <div class="card-img-overlay">
                <div class="badge <?php echo $res2;?> p-1"><?php echo $res;?></div>
            </div>

            <div class="card-body position-relative">
                <!-- project title-->
                <h4 class="mt-0">
                    <a href="apps-projects-details.html" class="text-title"><?php echo utf8_decode($evento['nombre']);?></a>
                </h4>
                
                <p class="text-muted font-13 mb-3"><?php echo utf8_decode($evento['descripcion']);?></p>
                <!-- project detail-->
                <p class="mb-3">
                    <span class="pr-2 text-nowrap">
                        <i class="mdi mdi-calendar-range"></i>
                        <b>Inicio:</b> <span class="text-muted font-13 mb-3"><?php echo $evento['inicio'];?></span>
                    </span>
                    <span class="text-nowrap">
                        <i class="mdi mdi-calendar-range"></i>
                        <b>Fin;</b> <span class="text-muted font-13 mb-3"><?php echo $evento['fin'];?></span>
                    </span>
                </p>
                <div class="mb-3">
                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Mat Helme" class="d-inline-block">
                        <img src="img/users/avatar-6.jpg" class="rounded-circle avatar-xs" alt="friend">
                    </a>

                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="Michael Zenaty" class="d-inline-block">
                        <img src="img/users/avatar-7.jpg" class="rounded-circle avatar-xs" alt="friend">
                    </a>

                    <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" title="" data-original-title="James Anderson" class="d-inline-block">
                        <img src="img/users/avatar-8.jpg" class="rounded-circle avatar-xs" alt="friend">
                    </a>
                    <a href="javascript:void(0);" class="d-inline-block text-muted font-weight-bold ml-2">
                        +5 more
                    </a>
                </div>

                <!-- project progress-->
                <p class="mb-2 font-weight-bold">Avance <span class="float-right"><?php $random = rand(5, 15); echo $random;?>%</span></p>
                <div class="progress progress-sm">
                    <div class="progress-bar" role="progressbar" aria-valuenow="<?php echo $random;?>" aria-valuemin="0" aria-valuemax="100" style="width: <?php echo $random;?>%;">
                    </div><!-- /.progress-bar -->
                </div><!-- /.progress -->
            </div> <!-- end card-body-->
        </div> <!-- end card-->
    </div> <!-- end col -->

<?php endforeach; else: ?>
    <option value="0">No existen datos</option>
<?php endif; ?>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">



      
 <!--<script src="../assets/js/vendor.min.js"></script>-->
<script src="../assets/js/app.min.js"></script>
<script src="../assets/vendor/proj4-src.js"></script>

<!-- plugin js -->
<script src="../assets/js/vendor/dropzone.min.js"></script>
<!-- init js -->
<script src="../assets/js/ui/component.fileupload.js"></script>




<!--  <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
  crossorigin=""></script> -->

<script>
    
    
/*
    
    var edit = function() {
        $('#summernote-editmode2').summernote({focus: true});
        $('#summernote-edit2').toggle();
        $('#summernote-save2').toggle();
        
    };
    $( "#summernote-save2" ).click(function() {
        $('#summernote-edit2').toggle();
        $('#summernote-save2').toggle();
    });

    

    var savedata = function() {
    var markup = $('#summernote-editmode2').summernote('code');
        $('#summernote-editmode2').summernote('destroy');
    };
*/

    console.log($("#latitud").val(),$("#longitud").val());
    if($("#latitud").val()=="" || $("#longitud").val()==""){
        carga_mapa(-71.7087828,-38.8518772);
    }
    else{
        carga_mapa($("#longitud").val(),$("#latitud").val());
        
        
        
    }
    

    $('.savedatauser').on('click',function(){
        //var ID = $(this).closest("tr").attr('id');
        

        var inputData = $( "form" ).serialize();
        console.log(inputData);
        if(insert==true){
            $.ajax({
                type:'POST',
                url:'./configuracion/updata.php',
                dataType: "json",
                data:'action=insert&'+inputData,
                success:function(response){
                    if(response.status == 'ok'){
                        $("#scrollable-modal").modal('toggle');
                        console.log(response.data,"ok"); 
                        /*loaduserdata()*/
                        location.reload();
                    }else{
                        
                        console.log(response.data); 
                    }
                }
            });

           
        }
        else{
            $.ajax({
                type:'POST',
                url:'./configuracion/updata.php',
                dataType: "json",
                data:'action=edit&'+inputData,
                success:function(response){
                    if(response.status == 'ok'){
                        $("#scrollable-modal").modal('toggle');
                        console.log(response.data,"ok"); 
                        //loaduserdata();
                        location.reload();
                    }else{
                        
                        console.log(response.data); 
                    }
                }
            });
        }
        insert=false;

    });
    

</script>
