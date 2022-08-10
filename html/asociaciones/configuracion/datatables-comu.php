<?php
  
  $completarurl="../../";
  include '../../bd_consul/validar.php';

  include '../../bd_consul/conexion.php';
  
  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();
  $comunidades = $db->getRows('comunidades',array('order_by'=>'id_comunidades asc'));
  ?>
  
    <?php if(!empty($comunidades)):?>
        <?php
        for ($i = 0; $i <= count($comunidades); $i = $i + 3) {
        $comunidad1 = $comunidades[$i];
        $comunidad2 = $comunidades[$i+1];
        $comunidad3 = $comunidades[$i+2];?>
        <tr>
            <td class="row">
                <div class="col-12 col-md-4">
                    <div class="card rounded p-4" data-id="<?php echo $comunidad1['id_comunidades'];?>">
                        <h5><?php echo $comunidad1['nombre'];?></h5>
                        <p class="small"><?php if($comunidad1['programa']==1){ echo "PRODESAL";} elseif ($comunidad['programa']==2) {echo "PDTI, UPT Cordillera";} elseif ($comunidad['programa']==3) {echo "PDTI, UPT El Valle 1";} elseif ($comunidad['programa']==4) {echo "PDTI, UPT Santa María de Llaima";} else{ echo "PDTI, UPT El Valle 2";}?></p>
                        <p><span class="font-weight-bold">Sector: </span><?php echo $comunidad1['sector'];?></p>
                        <p><span class="font-weight-bold">Socios: </span><?php echo $comunidad1['socios'];?></p>
                        <p><span class="font-weight-bold">Presidente: </span><?php echo $comunidad1['presidente'];?></p>
                        <p><span class="font-weight-bold">Rubro: </span><?php echo $comunidad1['rubroprincipal'];?></p>
                        <p><span class="font-weight-bold">Autoridades an: </span><?php echo $comunidad1['autoridadancestral'];?></p>
                        <p><span class="font-weight-bold">Liderazgos: </span><?php echo $comunidad1['liderazgos'];?></p>
                        <p><span class="font-weight-bold">Comunidades: </span><?php echo $comunidad1['comunidadescol'];?></p>
                        
                        <div class="text-right">
                            <button data-id="<?php echo $comunidad1['id_comunidades'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                        </div>
                    </div>
                </div>


                <div class="col-12 col-md-4 ">
                    <?php if($comunidad2){ ?>
                        <div class="card rounded p-4" data-id="<?php echo $comunidad2['id_comunidades'];?>">
                            <h5><?php echo $comunidad2['nombre'];?></h5>
                            <p class="small"><?php if($comunidad2['programa']==1){ echo "PRODESAL";} elseif ($comunidad2['programa']==2) {echo "PDTI, UPT Cordillera";} elseif ($comunidad['programa']==3) {echo "PDTI, UPT El Valle 1";} elseif ($comunidad['programa']==4) {echo "PDTI, UPT Santa María de Llaima";} else{ echo "PDTI, UPT El Valle 2";}?></p>
                            <p><span class="font-weight-bold">Sector: </span><?php echo $comunidad2['sector'];?></p>
                            <p><span class="font-weight-bold">Socios: </span><?php echo $comunidad2['socios'];?></p>
                            <p><span class="font-weight-bold">Presidente: </span><?php echo $comunidad2['presidente'];?></p>
                            <p><span class="font-weight-bold">Rubro: </span><?php echo $comunidad2['rubroprincipal'];?></p>
                            <p><span class="font-weight-bold">Autoridades an: </span><?php echo $comunidad2['autoridadancestral'];?></p>
                            <p><span class="font-weight-bold">Liderazgos: </span><?php echo $comunidad2['liderazgos'];?></p>
                            <p><span class="font-weight-bold">Comunidades: </span><?php echo $comunidad2['comunidadescol'];?></p>
                            
                            <div class="text-right">
                                <button data-id="<?php echo $comunidad2['id_comunidades'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                            </div>
                        </div>
                    <?php } ?>
                </div>

                <div class="col-12 col-md-4 ">
                    <?php if($comunidad3){ ?>
                        <div class="card rounded p-4" data-id="<?php echo $comunidad3['id_comunidades'];?>">
                            <h5><?php echo $comunidad3['nombre'];?></h5>
                            <p class="small"><?php if($comunidad3['programa']==1){ echo "PRODESAL";} elseif ($comunidad3['programa']==2) {echo "PDTI, UPT Cordillera";} elseif ($comunidad['programa']==3) {echo "PDTI, UPT El Valle 1";} elseif ($comunidad['programa']==4) {echo "PDTI, UPT Santa María de Llaima";} else{ echo "PDTI, UPT El Valle 2";}?></p>
                            <p><span class="font-weight-bold">Sector: </span><?php echo $comunidad3['sector'];?></p>
                            <p><span class="font-weight-bold">Socios: </span><?php echo $comunidad3['socios'];?></p>
                            <p><span class="font-weight-bold">Presidente: </span><?php echo $comunidad3['presidente'];?></p>
                            <p><span class="font-weight-bold">Rubro: </span><?php echo $comunidad3['rubroprincipal'];?></p>
                            <p><span class="font-weight-bold">Autoridades an: </span><?php echo $comunidad3['autoridadancestral'];?></p>
                            <p><span class="font-weight-bold">Liderazgos: </span><?php echo $comunidad3['liderazgos'];?></p>
                            <p><span class="font-weight-bold">Comunidades: </span><?php echo $comunidad3['comunidadescol'];?></p>
                            
                            <div class="text-right">
                                <button data-id="<?php echo $comunidad3['id_comunidades'];?>" type="button" class="btn col-6 btn-primary small infouser">Mas información</button>
                            </div>
                        </div>
                    <?php } ?>
                </div>
            </td>
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
    </script>