<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();
  $organizaciones = $db->getRows('organizaciones',array('order_by'=>'id_organizaciones asc'));
  ?>
  
  <?php if(!empty($organizaciones)):?>
    <?php
    for ($i = 0; $i <= count($organizaciones); $i = $i + 3) {
    $organizacion1 = $organizaciones[$i];
    $organizacion2 = $organizaciones[$i+1];
    $organizacion3 = $organizaciones[$i+2];?>
    <tr>
        <td>
            
            <div class="card rounded p-4" data-id="<?php echo $organizacion1['id_organizaciones'];?>">
                <h4><?php echo $organizacion1['nombre'];?></h4>
                <p class="small"><?php if($organizacion1['clasificación']==2){ echo "Organización funcional";} elseif ($organizacion1['clasificación']==2) {echo "Organización";} else {echo "Error";}?></p>
                <p><span class="font-weight-bold">Rol: </span> <?php echo $organizacion1['rol'];?></p> 
                <p><span class="font-weight-bold">Antiguedad: </span><?php echo $organizacion1['creacion'];?></p>
                <p><span class="font-weight-bold">N° personalidad juridica: </span><?php echo $organizacion1['personalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Renovación personalidad juridica: </span><?php echo $organizacion1['renovacionpersonalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Vigencia: </span><?php echo $organizacion1['vigencia'];?></p>
                <p><span class="font-weight-bold">Socios: </span><?php echo $organizacion1['socios'];?></p>
                <p><span class="font-weight-bold">Presidente/a: </span><?php echo $organizacion1['presidente'];?></p>
                <p><span class="font-weight-bold">Secretario/a: </span><?php echo $organizacion1['secretario'];?></p>
                <p><span class="font-weight-bold">Domicilio: </span><?php echo $organizacion1['domicilio'];?></p>
                <p><span class="font-weight-bold">Fono: </span><?php echo $organizacion1['contacto'];?></p>
                <div class="text-right">
                
                    <button data-id="<?php echo $organizacion1['id_organizaciones'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                </div>
            </div>
        </td>
        
        <td>
            <?php if($organizacion2){ ?>
            <div class="card rounded p-4" data-id="<?php echo $organizacion2['id_organizaciones'];?>">
                <h4><?php echo $organizacion2['nombre'];?></h4>
                <p  class="small"><?php if($organizacion2['clasificación']==2){ echo "Organización funcional";} elseif ($organizacion2['clasificación']==2) {echo "Organización";} else {echo "Error";}?></p>
                <p><span class="font-weight-bold">Rol: </span><?php echo $organizacion2['rol'];?></p>
                <p><span class="font-weight-bold">Antiguedad: </span><?php echo $organizacion2['creacion'];?></p>
                <p><span class="font-weight-bold">N° personalidad juridica: </span><?php echo $organizacion2['personalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Renovación personalidad juridica: </span><?php echo $organizacion2['renovacionpersonalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Vigencia: </span><?php echo $organizacion2['vigencia'];?></p>
                <p><span class="font-weight-bold">Socios: </span><?php echo $organizacion2['socios'];?></p>
                <p><span class="font-weight-bold">Presidente/a: </span><?php echo $organizacion2['presidente'];?></p>
                <p><span class="font-weight-bold">Secretario/a: </span><?php echo $organizacion2['secretario'];?></p>
                <p><span class="font-weight-bold">Domicilio: </span><?php echo $organizacion2['domicilio'];?></p>
                <p><span class="font-weight-bold">Fono: </span><?php echo $organizacion2['contacto'];?></p>
                <div class="text-right">
                
                    <button data-id="<?php echo $organizacion2['id_organizaciones'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                </div>
            </div>
            <?php } ?>
        </td>
        
        <td>
        <?php if($organizacion3){ ?>
            <div class="card rounded p-4" data-id="<?php echo $organizacion3['id_organizaciones'];?>">
                <h4><?php echo $organizacion3['nombre'];?></h4>
                <p  class="small"><?php if($organizacion3['clasificación']==2){ echo "Organización funcional";} elseif ($organizacion3['clasificación']==2) {echo "Organización";} else {echo "Error";}?></p>
                <p><span class="font-weight-bold">Rol: </span><?php echo $organizacion3['rol'];?></p>
                <p><span class="font-weight-bold">Antiguedad: </span><?php echo $organizacion3['creacion'];?></p>
                <p><span class="font-weight-bold">N° personalidad juridica: </span><?php echo $organizacion3['personalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Renovación personalidad juridica: </span><?php echo $organizacion3['renovacionpersonalidadjuridica'];?></p>
                <p><span class="font-weight-bold">Vigencia: </span><?php echo $organizacion3['vigencia'];?></p>
                <p><span class="font-weight-bold">Socios: </span><?php echo $organizacion3['socios'];?></p>
                <p><span class="font-weight-bold">Presidente/a: </span><?php echo $organizacion3['presidente'];?></p>
                <p><span class="font-weight-bold">Secretario/a: </span><?php echo $organizacion3['secretario'];?></p>
                <p><span class="font-weight-bold">Domicilio: </span><?php echo $organizacion3['domicilio'];?></p>
                <p><span class="font-weight-bold">Fono: </span><?php echo $organizacion3['contacto'];?></p>
                <div class="text-right">
                    
                    <button data-id="<?php echo $organizacion3['id_organizaciones'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                </div>
            </div>
        </td>
        <?php } ?>
    </tr>
<?php  } else: ?>
    <option value="0">No existen datos</option>
<?php endif; ?>
  


<script>

        

        $(".infouser").click(function() {
            
            console.log("verdatos");
            let id = $(this).data('id');
            if($(".nav-link.active" ).data('id')=="org"){ 
                $( "#scrollableModalTitle" ).html( "Información de organizaciones comunitarias" );
                loaddata(id,"data-org.php");
            }
            if($(".nav-link.active" ).data('id')=="equi"){
                $( "#scrollableModalTitle" ).html( "Información de equipos tecnicos" );
                loaddata(id,"data-comu.php");
            }
        });

        $( ".eliminar" ).click(function() {
                var iduser=$(this).data("id");
                console.log(iduser);
                $.ajax({
                    type:'POST',
                    url:'configuracion/updata-asoc.php',
                    dataType: "json",
                    data:'action=delete&id_organizaciones='+iduser,
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
    </script>