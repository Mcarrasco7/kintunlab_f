<?php 
$completarurl="../..";
    include '../../consultas_bd/validar.php';
    include '../../consultas_bd/validar_onemi.php';
    include '../../consultas_bd/conexion.php';
 
	$limit = isset($_POST['limit']) ? $_POST['limit'] : 20;
	$page = isset($_POST['page']) ? $_POST['page'] : 1;
  $start = ($page - 1) * $limit;


  $sql= "SELECT UD.*, U.*, C.comuna FROM user_data UD, User U, comunas C
  WHERE UD.id_user_data = U.id_user_data and UD.id_comuna = C.id order by user_id LIMIT $start, $limit";

  $result = $mysqli->query($sql);
  $customers = $result->fetch_all(MYSQLI_ASSOC);


	$result1 = $mysqli->query("SELECT count(user_id) AS id FROM user");          
	$custCount = $result1->fetch_all(MYSQLI_ASSOC);    
	$total = $custCount[0]['id'];
	$pages = ceil( $total / $limit );

    $Previous = $page - 1;
    if($Previous==0){
        $Previous=1;
    }
    $Next = $page + 1;

    if($Next>$pages){
        $Next=$pages;
    }

 ?>
<style>
.ver-alfa{
    cursor: pointer;
}
</style>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>

<div class="col-xl-12 col-lg-12">
            <div class="card t-azul p-4">
            <h1 class="text-center">Lista de usuarios</h1>
                <div class="row my-4" style="overflow-y: auto;">
                    <div class="col-6 p-0">
                    <nav aria-label="Page navigation example" class="float-left w-100"  >
                        <ul class="pagination justify-content-center ">
                            <li class="page-item w-100"><a class="page-link" onclick="enviar(<?= $Previous; ?>)" >Previo</a></li>
                            <?php for($i = 1; $i<= $pages; $i++) : ?>
                              <li class="page-item w-100" ><a class="page-link" onclick="enviar(<?= $i; ?>)" ><?= $i; ?></a></li>
                            <?php endfor; ?>
                            <li class="page-item w-100"><a class="page-link" onclick="enviar(<?= $Next ?>)" >Siguiente</a></li>
                        </ul>
                        </nav>
                    </div>
                    <div class="col-3 p-0">
                        <input type="text" id="buscador"  placeholder="Buscar" title="Buscar" class="form-control border">  
                    </div>
                    <div class="col-3 p-0">
                        <form method="post" action="#" class="float-right w-100" id="limite">
                                <select name="limit-records" id="limit-records" class="form-control">
                                    <option disabled="disabled" selected>Cantidad por página</option>
                                    <?php foreach([1,50,500,1000,5000] as $limit): ?>
                                        <option <?php if( isset($_POST["limit-records"]) && $_POST["limit-records"] == $limit) echo "selected" ?> value="<?= $limit; ?>"><?= $limit; ?></option>
                                    <?php endforeach; ?>
                                </select>
                            </form>
                        </div>
                </div>
                <div style="overflow-y: auto;" >
                    <table id="tabla-alfa" class="table responsive">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Usuario</th>
                                <th scope="col">Comuna</th>
                                <th scope="col">Tipo de usuario</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Nacimiento</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Sexo</th>
                                <th scope="col">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach($customers as $customer) {  ?>
                                <tr ondblclick="window.location.href = 'configura.php?id=<?php echo $customer['user_id'];?>';" class="ver-alfa <?php if($customer['user_type']==2){echo "bg-danger text-white";}else{echo "bg-info text-white";} ?>" data-id="<?php echo $customer['user_id'];?>">
                                <div >
                                    <td scope="row"><?= $customer['user_id']; ?></td>
                                    <td><?= $customer['user_name']; ?></td>
                                    <td><?= $customer['comuna']; ?></td>
                                    <td><?php if($customer['user_type']==2){echo "ONEMI";}else{echo "Encargado Municipal";} ?></td>
                                    <td><?= $customer['name']; ?></td>    
                                    <td><?= $customer['email']; ?></td>
                                    <td><?= $customer['birthday']; ?></td>
                                    <td><?= $customer['telefono']; ?></td>
                                    <td><?php if($customer['sexo']==2){echo "Mujer";}else{ echo "Hombre";} ?></td>
                                    
                                   <td><input type="checkbox" class="activo-inactivo" data-id="<?php echo $customer['user_id'];?>" <?php if($customer['user_active']==1){echo "checked";}?>></td>
                                    
                                </tr>
                            <?php }?>
                            
                        </tbody>
                    </table>
                    <div id="vista"></div>
            </div>
          </div>
        </div>
        </div>
        

<script>
$("#limit-records").change(function(){
    limite=$("#limit-records").val();
    enviar(1);
});

/*
$(".ver-alfa").click(function(){
    id = $(this).data("id");
    $.get("./vizualizacion/ver-alfa.php","id="+id,function(data){
    $("#vista").html(data);
    });
    $('#editModal').modal('show');
});
*/

$(document).ready(function(){
  $("#buscador").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#tabla-alfa tbody tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(".ver-alfa").attr('Doble clic para editar los datos');

$(".activo-inactivo").click(function(){
    id = $(this).data("id");
    if ($(this).is(":checked")==false){
        estado=0;
    }
    else{
        estado=1;
    }
    //var estado = $(this).is(":checked");
    $.get("./visualizacion/update-activos.php","id="+id+"&estado="+estado,function(data){
        $("#vista").html(data);
    });
});

</script>