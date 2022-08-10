<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  $sql= "SELECT E.*, C.comuna_nombre FROM emprendedor E, comunas C WHERE E.id_comuna = C.comuna_id  order by apellidos;";

 $result = $mysqli->query($sql);

 $customers = $result->fetch_all(MYSQLI_ASSOC);



?>

<?php /*foreach($customers as $customer) {  */
    
    for ($i = 0; $i <= count($customers); $i = $i + 1) {
        
?>
<?php $customer = $customers[$i];


if($customers[$i]!=null){
?>




    <tr class="candidates-list " data-id="<?php echo $customer['id_emprendedor'];?>">
        <td class="title row">
        <!-- 
        <div class="thumb col-12 col-sm-1 mx-auto">
            <img class="img-fluid" src="https://cdn3.iconfinder.com/data/icons/3d-characters/213/man-3d-avatar-8svg-512.png" alt="">
        </div>
        -->
            <div class="col-12 col-md-12">
                <div class="row p-2 ">
                    <div class="bg-white rounded col-12 p-4 clicdetalle">
                        <div class="row">
                            <div class="col-12">
                                <div class="row">
                                    <div class="candidate-list-details col-7 col-lg-7 mx-auto p-0 "  >
                                        <div class="candidate-list-info">
                                        <div class="candidate-list-title">
                                            <h5 class="mb-0"><a class="block"><?= $customer['apellidos']." ".$customer['nombres']; ?></a></h5>
                                        </div>
                                        <div class="candidate-list-option"> 
                                            <ul class="list-unstyled">
                                            <li><i class="dripicons-arrow-right pr-1"></i><?php if($customer['regularizado']==1){echo "Regularizado";}else{echo "No Regularizado";} ?></li>
                                            <li><i class="mdi mdi-map-marker-down pr-1"></i><?= $customer['comuna_nombre']; ?></li>
                                            <li><i class="dripicons-phone pr-1"></i><?= $customer['telefono']; ?></li>
                                            <li><i class="dripicons-mail pr-1"></i><?= $customer['email']; ?></li>

                                            
                                            </ul>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col-5 col-lg-5 mx-auto text-right">
                                        <div class="row">
                                            <button class="btn btn-primary pull-right w-75 ver-data-grafica col-4 px-1" data-toggle="collapse" data-target="#collapse<?php echo $customer['id_emprendedor'];?>" aria-expanded="false" aria-controls="collapse<?php echo $customer['id_emprendedor'];?>" data-toggle="tooltip" data-placement="right" title="Hacer clic, para ver detalles">Mas información </button>
                                            <div class="col-1"></div>
                                            <button class="btn btn-secondary pull-right w-75 ver-data-users col-4 px-1" data-id="<?php echo $customer['id_emprendedor'];?>">Ver ficha</button>
                                            <div class="col-1"></div>
                                            <button class="btn btn-danger pull-right w-75 eliminar-data-users col-2 px-1" data-id="<?php echo $customer['id_emprendedor'];?>">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="row collapse pt-3" id="collapse<?php echo $customer['id_emprendedor'];?>">
                                    <div class="candidate-list-details col-12 col-md-6 col-xl-4 mx-auto " id="divchartv<?php echo $customer['id_emprendedor'];?>">
                                        <div id="chartv<?php echo $customer['id_emprendedor'];?>" data-id="<?php echo $customer['id_emprendedor'];?>" class="apex-charts cuadra" data-colors="#FF4560" value="chartv<?php echo $customer2['id_emprendedor'];?>" data-name="<?= $customer['nombres']." ".$customer['apellidos']; ?>"></div>
                                        <div class="leyenda mt-2"></div>
                                    </div>
                                    
                                    <div class="col-12 col-md-6 col-xl-4 mx-auto  mb-4 px-0">
                                        <div id="chart<?php echo $customer['id_emprendedor'];?>" data-id="<?php echo $customer['id_emprendedor'];?>"  class="apex-charts v2 arania" data-colors="#000" value="chart<?php echo $customer2['id_emprendedor'];?>"></div>
                                        
                                    </div>
                                    <!--
                                    <div class="col-md-12 col-xl-12 px-4 contenido ">
                                        <div class="row">
                                            <div class="col-6 my-2 px-0 ">
                                            <p class="h4 text-info font-weight-bold mb-3 d-block"><b>Fondos Postulables</b></p>
                                            <div class="fondos" >
                                                <table class="table table-centered  table-hover mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p class="font-14 my-1 h5"><a  class="text-body">Crea y Valida Rápida Implementación- Reactívate</a></p>
                                                                <span class="text-muted font-13">Cierre de Postulación el Jueves 07 de Abril del 2022</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted font-13">2022</span> <br/>
                                                                <span class="badge badge-success-lighten">Abierto</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="font-14 my-1 h5"><a  class="text-body">Ley Incentivo Tributario a la I+D</a></p>
                                                                <span class="text-muted font-13">Cierre de Postulación el Sábado 31 de Diciembre del 2022</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted font-13">2022</span> <br/>
                                                                <span class="badge badge-success-lighten">Abierto</span>
                                                            </td>                    
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="font-14 my-1 h5"><a  class="text-body">Fondo de Fomento Audiovisual</a></p>
                                                                <span class="text-muted font-13">Cierre de Postulación el Jueves 14 de Abril del 2022</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted font-13">2022</span> <br/>
                                                                <span class="badge badge-success-lighten">Abierto</span>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <p class="font-14 my-1 h5"><a  class="text-body">Fondo de Innovación para la Competitividad Regional (FIC-R)</a></p>
                                                                <span class="text-muted font-13">Cierre de Postulación el Miércoles 28 de Diciembre del 2022</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted font-13">2022</span> <br/>
                                                                <span class="badge badge-warning-lighten">Por abrir</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>
                                        <div class="col-6 px-4 ">
                                            <p class="h4 text-info font-weight-bold mb-3 d-block"><b>Fondos Adjudicados</b></p>
                                            <div class="fondos" >
                                                <table class="table table-centered  table-hover mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <p class="font-14 my-1 h5"><a  class="text-body">fondo nacional de desarrollo regional medio ambiente</a></p>
                                                                <span class="text-muted font-13">Empresa</span>
                                                            </td>
                                                            <td>
                                                                <span class="text-muted font-13">2019</span> <br/>
                                                                <span class="badge badge-primary-lighten">Adjudicado</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            
                                        </div>

                                        </div>
                                    </div>
                                    -->


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            
            
        </td>

    </tr>
    <?php }
    
    
}

?>  






<script>
    $.fn.extend({
        toggleText: function(a, b){
            return this.html(this.html() == b ? a : b);
        }
    });



    $( ".ver-data-users" ).click(function() {
        var iduser=$(this).data("id");
        loaddata(iduser);
    });

    $( ".eliminar-data-users" ).click(function() {
        var iduser=$(this).data("id");
        $.ajax({
            type:'POST',
            url:'./configuracion/updata.php',
            dataType: "json",
            data:'action=delete&id_emprendedor='+iduser,
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
        
    });

    $( ".ver-data-grafica" ).click(function() {
        $(this).toggleText('Mas información', 'Menos información ');


        
        var esto =this;
        if( $( this ).closest( ".clicdetalle" ).hasClass( "datoabierto" )){
            console.log("abierto");
            setTimeout(function(){ 
                $( esto ).closest( ".clicdetalle" ).toggleClass( "datoabierto" );
            }, 360);
             
        }
        else{
            
            console.log("cerrando");
            
                $( this ).closest( ".clicdetalle" ).toggleClass( "datoabierto" );
            
           
        }
            
        });
        
</script>



