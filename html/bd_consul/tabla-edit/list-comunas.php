<?php

$completarurl="../..";
include '../../consultas_bd/validar.php';


$error="";
include '../../consultas_bd/conexion.php';  

require_once '../../consultas_bd/DB.class.php';

  $db = new DB();

    //get users from database
  $com1s = $db->getRows('comunas',array('where'=> array('provincia_id' => '41'),'order_by'=>'comuna ASC'));
  $com2s = $db->getRows('comunas',array('where'=> array('provincia_id' => '42'),'order_by'=>'comuna ASC'));

    //get status message from session
  if(!empty($sessData['status']['msg'])){
      $statusMsg = $sessData['status']['msg'];
      $statusMsgType = $sessData['status']['type'];
      unset($_SESSION['sessData']['status']);
  }
?>

<div class="card-body px-0 pt-0 mt-0 pb-0">
    <div class="input-group mb-0">
        <input type="text" id="buscar2" name="buscar" class="form-control border-right-0 border" placeholder="Buscar">
        <div class="input-group-append">
          <button class="btn btn-secondary p-0 px-1 border-left-0 border" type="button">
            <i class="fa fa-search fa-xs"></i>
          </button>
        </div>
    </div>

        
        <div class="list-group list-group-com" role="tablist">
        <?php if(!empty($com2s)): foreach($com2s as $com2): ?>                                          
            <a class="list-group-item list-group-item-action" data-com="<?php echo $com2['comuna']; ?>" data-id="<?php echo $com2['id'];?>" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><?php echo $com2['comuna'];?></a>      

          <?php endforeach; else: ?>
          <span></span>
          <?php endif; ?> 
        <?php if(!empty($com1s)): foreach($com1s as $com1): ?>                                          
            <a class="list-group-item list-group-item-action" data-com="<?php echo $com1['comuna']; ?>" data-id="<?php echo $com1['id'];?>" data-toggle="list" href="#list-home" role="tab" aria-controls="home"><?php echo $com1['comuna'];?> </a>      

          <?php endforeach; else: ?>
          <span></span>
          <?php endif; ?> 
    </div>
</div>

<script>

$("#buscar2").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".list-group-com a").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1 )
        });
    });
    $( ".list-group-com a" ).click(function() {
        var id= $(this).data("id");
        load_data(id);
    });
    
    


</script>

