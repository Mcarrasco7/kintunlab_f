<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  $sql= "SELECT E.*, C.comuna_nombre FROM emprendedor E, comunas C WHERE E.id_comuna = C.comuna_id  order by nombres;";

 $result = $mysqli->query($sql);

 $customers = $result->fetch_all(MYSQLI_ASSOC);



?>

<?php /*foreach($customers as $customer) {  */
    
    for ($i = 0; $i <= count($customers); $i = $i + 2) {
        
?>
<?php $customer = $customers[$i];
      var_dump($customer);
      $customer2 = $customers[$i+1];
        
?>


    <tr class="candidates-list" data-id="<?php echo $customer['rut'];?>">
        <td class="title row">
        <!-- 
        <div class="thumb col-12 col-sm-1 mx-auto">
            <img class="img-fluid" src="https://cdn3.iconfinder.com/data/icons/3d-characters/213/man-3d-avatar-8svg-512.png" alt="">
        </div>
        -->
            <div class="col-12 col-md-6">
                <div class="row p-2 ">
                    <div class="bg-white rounded col-12 p-4">
                        <div class="row">
                            <div class="candidate-list-details col-12 col-lg-12 mx-auto mb-4 p-0">
                                <div class="candidate-list-info">
                                <div class="candidate-list-title">
                                    <h5 class="mb-0"><a class="block"><?= $customer['nombres']." ".$customer['apellidos']; ?></a></h5>
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
                            <div class="candidate-list-details col-12 col-lg-6 mx-auto " id="divchartv<?php echo $customer['rut'];?>">
                                <div id="chartv<?php echo $customer['rut'];?>" class="apex-charts cuadra" data-colors="#FF4560" value="chartv<?php echo $customer2['rut'];?>" data-name="<?= $customer['nombres']." ".$customer['apellidos']; ?>"></div>
                                <div class="leyenda mt-2"></div>
                            </div>
                            <div class="col-12 col-lg-6 mx-auto  mb-4 px-0">
                                <div id="chart<?php echo $customer['rut'];?>" class="apex-charts v2 arania" data-colors="#000" value="chart<?php echo $customer2['rut'];?>"></div>
                                
                            </div>
                            <div class="col-12 col-lg-12 mx-auto text-right">
                                <button class="btn btn-secondary pull-right w-100 ver-data-users" data-id="<?php echo $customer['rut'];?>">Ver detalle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            
            <!-- 
            <div class="thumb col-12 col-sm-1 mx-auto">
                <img class="img-fluid" src="https://cdn3.iconfinder.com/data/icons/3d-characters/213/man-3d-avatar-8svg-512.png" alt="">
            </div>
            -->
            <?php if ($customer2!=null){  ?>
            <div class="col-12 col-md-6">
                <div class="row p-2 ">
                    <div class="bg-white rounded col-12 p-4">
                        <div class="row">
                            <div class="candidate-list-details col-12 mx-auto mb-4 p-0">
                                <div class="candidate-list-info">
                                <div class="candidate-list-title">
                                    <h5 class="mb-0"><a class="block"><?= $customer2['nombres']." ".$customer2['apellidos']; ?></a></h5>
                                </div>
                                <div class="candidate-list-option"> 
                                    <ul class="list-unstyled">
                                    <li><i class="dripicons-arrow-right pr-1"></i><?php if($customer2['regularizado']==1){echo "Regularizado";}else{echo "No Regularizado";} ?></li>
                                    <li><i class="mdi mdi-map-marker-down pr-1"></i><?= $customer2['comuna_nombre']; ?></li>
                                    <li><i class="dripicons-phone pr-1"></i><?= $customer2['telefono']; ?></li>
                                    <li><i class="dripicons-mail pr-1"></i><?= $customer2['email']; ?></li>

                                    
                                    </ul>
                                </div>
                                </div>
                            </div>
                            <div class="candidate-list-details col-12 col-lg-6 mx-auto " id="divchartv<?php echo $customer2['rut'];?>">
                                <div id="chartv<?php echo $customer2['rut'];?>" class="apex-charts cuadra" data-colors="#FF4560" value="chartv<?php echo $customer2['rut'];?>" data-name="<?= $customer2['nombres']." ".$customer2['apellidos']; ?>"></div>
                                <div class="leyenda mt-2"></div>
                                
                            </div>
                            <div class="col-12 col-lg-6 mx-auto mb-4 ">
                                <div id="chart<?php echo $customer2['rut'];?>" class="apex-charts v2 arania" data-colors="#000" value="<?php echo $customer2['rut'];?>"></div>
                                
                            </div>
                            <div class="col-12 col-lg-12 mx-auto text-right">
                                <button class="btn btn-secondary w-100 ver-data-users" data-id="<?php echo $customer2['rut'];?>">Ver detalle</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <?php }  ?>
        </td>

    </tr>
    <?php }?>  






<script>
    $( ".ver-data-users" ).click(function() {
        var iduser=$(this).data("id");
        loaddata(iduser);
    });
</script>


        <!-- third party:js -->
        <script src="../assets/js/vendor/apexcharts.min.js"></script>
        <script src="../assets/js/pages/demo.apex-radar2.js"></script>
        <!-- third party end -->

        <!-- demo:js -->

        
        
        
        <script>
            
        </script>
        

