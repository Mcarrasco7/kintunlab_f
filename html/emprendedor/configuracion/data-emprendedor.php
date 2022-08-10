<?php
  header('Content-Type: text/html; charset=utf-8');
  $completarurl="../../";
  
  include '../../bd_consul/validar.php';
  $error="";
  include '../../bd_consul/conexion.php';

  
  
  require_once '../../bd_consul/DB.class.php';
  $db = new DB();

  //get users from database
  $comunas = $db->getRows('comunas',array('order_by'=>'comuna_nombre asc'));
  $programas = $db->getRows('programa',array('order_by'=>'Nombre asc'));
  $actividad_economica = $db->getRows('actividad_economica',array('order_by'=>'nombre asc'));

  $userid = $_POST['id']; 
  
  
  $sqlid = "SELECT E.*,C.*, P.Nombre as programanombre, P.id_programa as pid FROM emprendedor E, comunas C, programa P where P.id_programa = E.id_programa and  E.id_comuna = C.comuna_id  and E.id_emprendedor = ".$userid;
 
  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);
  if($_POST['id']!=0){
    echo "<script>var com_id = ".$rowdata['id_comuna'].";var id = ".$userid.";</script>";
  }

  

/*
  $sqlid = "SELECT UD.*, U.*, C.id as id_comuna, P.id as id_provincia, R.id as id_region FROM user_data UD, user U, comunas C, provincias P, regiones R
  WHERE UD.id_user_data = U.id_user_data and UD.id_comuna = C.id and C.provincia_id = P.id and P.region_id = R.id and U.user_id = ".$userid;


  $resultid = mysqli_query($mysqli,$sqlid);
  $rowdata = mysqli_fetch_array($resultid,MYSQLI_ASSOC);

  $iddata=$rowdata['id_user_data'];
  $contraseniaori= $rowdata['user_password'];
  $user_type=$rowdata['user_type'];

  $name=$rowdata['name'];
  $email=$rowdata['email'];
  $birthday=$rowdata['birthday'];
  $telefono=$rowdata['telefono'];
  $sexo=$rowdata['sexo'];
 */  

?>



<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<ul class="nav nav-tabs nav-bordered mb-3">
    <li class="nav-item">
        <a href="#info-map" data-toggle="tab" aria-expanded="false" class="nav-link active">
            Información Basica
        </a>
    </li>
    <!--
    <li class="nav-item">
        <a href="#indicadores" data-toggle="tab" aria-expanded="true" class="nav-link">
            Proyectos
        </a>
    </li>
    <li class="nav-item">
        <a href="#analisis" data-toggle="tab" aria-expanded="true" class="nav-link">
            Bitacora
        </a>
        
    </li>
    <li class="nav-item">
        <a href="#comunidades" data-toggle="tab" aria-expanded="true" class="nav-link">
            Organizaciones
        </a>
    </li>
    <li class="nav-item">
        <a href="#equipos" data-toggle="tab" aria-expanded="true" class="nav-link">
            Equipos Tecnicos
        </a>
    </li>
    -->
</ul> <!-- end nav-->
<form id="form-datos" >   
<div class="tab-content px-4">
    <div class="tab-pane show active" id="info-map">
        <div class="row">
            
            <div class="col-lg-6">     
                    <div class="form-group">
                        <label for="nombres">Nombres</label>
                        <input type="text" id="nombres" name="nombres" class="form-control" value="<?php echo $rowdata['nombres']; ?>">
                        <label for="apellidos" class="mt-2">Apellidos</label>
                        <input type="text" id="apellidos" name="apellidos" class="form-control" value="<?php echo $rowdata['apellidos']; ?>">
                    </div>
                    <hr>
                    <div class="form-group d-none">
                        <label for="id_emprendedor">Rut</label>
                        <input type="text" id="id_emprendedor" name="id_emprendedor" class="form-control" placeholder="" value="<?php echo $rowdata['id_emprendedor']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="rut">Rut</label>
                        <input type="text" id="email" name="rut" class="form-control" placeholder="18856454-4" value="<?php echo $rowdata['rut']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="edad" >Fecha de Nacimiento</label>
                        <input type="text" id="edad" name="edad" class="form-control"  data-provide="datepicker"  value="<?php 
                        //echo $rowdata['edad'];
                        $var = $rowdata['edad'];
                        $date = str_replace('-', '/', $var);
                        echo date('d/m/Y', strtotime($date));

                        ?>">
                        
                    </div>
                    </hr>
                    <div class="form-group">
                        <label for="telefono" >Telefono</label>
                        <input type="text" id="telefono" name="telefono" class="form-control" data-toggle="input-mask" data-mask-format="00000000" value="<?php echo $rowdata['telefono']; ?>">
                        <span class="font-13 text-muted">e.g "+569328473"</span>
                    </div>
                    </hr>
                    <div class="form-group">
                        <label for="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion" class="form-control" value="<?php echo $rowdata['direccion']; ?>">
                        <span class="font-13 text-muted">e.g "Avenida Bandurrias #1346"</span>
                    </div>
                    <hr>
                    <!-- sector donde vive
                    <div class="form-group">
                        <label for="sector">Sector</label>
                        <select id="sector" class="form-control select2" data-toggle="select2">
                            <option>Sector</option>
                            <optgroup label="Sector 1">
                                <option value="0">Lugar 1</option>
                                <option value="1">Lugar 2</option>
                            </optgroup>
                            <optgroup label="Sector 2">
                                <option value="2">Lugar 3</option>
                                <option value="3">Lugar 4</option>
                                <option value="4">Lugar 5</option>
                                <option value="5">Lugar 6</option>
                            </optgroup>
                        </select>
                    </div>
                    -->
                <hr>
                    <div class="form-group">
                        <label for="simpleinput">Comuna</label>
                        <select class="form-control select2" data-toggle="select2" id="comunas" name="id_comuna">
                            
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
                    <!--<div class="form-group">
                        <label for="simpleinput">Coordenadas</label>
                        <a href="#" class="side-nav-link">
                            <i class="dripicons-map"></i>
                        </a>
                    </div>
                    <hr>--> 
                    <div class="form-group">
                        <label for="simpleinput">Grupo Familiar</label>
                        <div class="mt-2">
                            
                            <div class="form-group">
                                <label for="gfamiliaradultos">Adultos</label>
                                <input data-toggle="touchspin" type="text" name="gfamiliaradultos" value="<?php if($rowdata['gfamiliaradultos']=='') echo  "0"; else{ echo $rowdata['gfamiliaradultos']; }?>">
                            </div>
                            
                            <div class="form-group">
                                <label for="gfamiliarmenores">Menores</label>
                                <input data-toggle="touchspin" type="text" name="gfamiliarmenores" value="<?php if($rowdata['gfamiliarmenores']=='') echo  "0"; else{ echo $rowdata['gfamiliarmenores']; }?>">
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="educacion">Nivel Educacional</label>
                        <select class="form-control select2" data-toggle="select2" id="educacion" name="educacion">
                            
                            <optgroup label="educacion">
                                
                                <option value="0" <?php if($rowdata['educacion'] ==0) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>">Basica</option>
                                <option value="1" <?php if($rowdata['educacion'] ==1) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>">Media</option>
                                <option value="2" <?php if($rowdata['educacion'] ==2) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>">Universitaria</option>
                               
                            </optgroup>
                        </select>
                    </div>
                    <div class="form-group">

                                    
                        <!-- File Upload -->
                        <div class="file-upload w-100">
                            <button class="file-upload-btn w-100" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Subir Archivo</button>
                                    
                            <div class="image-upload-wrap">
                                <input class="file-upload-input" type='file' onchange="readURL(this);" accept="application/pdf, application/vnd.ms-excel, image/*" />
                                <div class="drag-text">
                                <h3>Seleccionar un archivo</h3>
                                </div>
                            </div>
                            <div class="file-upload-content w-100">
                                <img class="file-upload-image" src="#" alt="your image" />
                                <div class="image-title-wrap">
                                <button type="button" onclick="removeUpload()" class="remove-image">Eliminar <span class="image-title">Archivo subido</span></button>
                                </div>
                            </div>
                        </div>
                         <!-- -->
                       
                        



                    </div> 
            </div>
            

            <div class="col-lg-6">
                    
                       
                    
                    <div id="map" class="w-100" style="position:relative; height:300px;">
                        
                    </div>
                    <div class="form-group mt-2 row">
                        <div class="col-6">
                            <label for="latitud">Latitud</label>
                            <input type="text" id="latitud" name="latitud" class="form-control" value="<?php echo $rowdata['latitud']; ?>" >
                        </div>
                        <div class="col-6">
                            <label for="longitud">Longitud</label>
                            <input type="text" id="longitud" name="longitud" class="form-control" value="<?php echo $rowdata['longitud']; ?>" >
                        </div>
                        
                    </div>
                    <div class="form-group">
                        <label for="emprendimientodir">Dirección empredimiento</label>
                        <input type="text" id="emprendimientodir" name="emprendimientodir" class="form-control" value="<?php echo $rowdata['emprendimientodir']; ?>">
                    </div>
                    <div class="form-group">
                        <label for="emprendimiento">Nombre empresa/empredimiento</label>
                        <input type="text" id="emprendimiento" name="emprendimiento" class="form-control" value="<?php echo $rowdata['emprendimiento']; ?>">
                    </div>
                    
                    
                    <div class="form-group">
                        <label for="simpleinput">Inicio de actividades</label>
                        <div class="mt-2">
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="iniciacion_actividadsi" name="iniciacion_actividad" value="0" class="custom-control-input" <?php if($rowdata['iniciacion_actividad']==0) echo "checked" ; ?>>
                                <label class="custom-control-label" for="iniciacion_actividadsi">Sin iniciación de actividades </label>
                            </div>
                            <div class="custom-control custom-radio custom-control-inline">
                                <input type="radio" id="iniciacion_actividadno" name="iniciacion_actividad" value="1" class="custom-control-input" <?php if($rowdata['iniciacion_actividad']==1) echo "checked" ; ?>>
                                <label class="custom-control-label" for="iniciacion_actividadno">Con iniciación de actividades</label>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="simpleinput">Area</label>
                        <select class="form-control select2" data-toggle="select2" id="claridad" name="claridad">
                            <option>Area</option>
                            <optgroup label="La Araucania">
                                <option value="0" <?php if($rowdata['claridad'] ==0) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>" >INDAP</option>
                                <option value="1" <?php if($rowdata['claridad'] ==1) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>" >SERCOTEC</option>
                                <option value="2" <?php if($rowdata['claridad'] ==2) {echo "selected";}?> value="<?php echo $rowdata['educacion'];?>">MUNICIPALIDAD</option>
                            </optgroup>
                        </select>
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="ejecutivo">Ejecutivo</label>
                        <input type="text" id="ejecutivo" name="ejecutivo" class="form-control" value="<?php echo $rowdata['ejecutivo']; ?>">
                    </div>
                    <hr>
                    <div class="form-group">
                        <label for="simpleinput">Programa</label>
                        <select class="form-control select2" data-toggle="select2" id="programa" name="id_programa">
                            
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
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="simpleinput">Electricidad</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="electricidadsi" name="electricidad" value="0" class="custom-control-input" <?php if($rowdata['electricidad']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="electricidadsi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="electricidadno" name="electricidad" value="1" class="custom-control-input" <?php if($rowdata['electricidad']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="electricidadno">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Agua potable rural</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="aguasi" name="agua" value="0" class="custom-control-input" <?php if($rowdata['agua']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="aguasi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="aguano" name="agua" value="1" class="custom-control-input" <?php if($rowdata['agua']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="aguano">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Tipo de vivienda(subsidio)</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="subsidiosi" name="subsidio" value="0" class="custom-control-input" <?php if($rowdata['subsidio']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="subsidiosi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="subsidiono" name="subsidio" value="1" class="custom-control-input" <?php if($rowdata['subsidio']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="subsidiono">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="nivel_ventas">Nivel de ventas</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="ventasb" name="nivel_ventas" value="0" class="custom-control-input" <?php if($rowdata['nivel_ventas']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="ventasb">Bajo</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="ventasm" name="nivel_ventas" value="1" class="custom-control-input" <?php if($rowdata['nivel_ventas']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="ventasm">Medio</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="ventasa" name="nivel_ventas" value="2" class="custom-control-input" <?php if($rowdata['nivel_ventas']==2) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="ventasa">Alto</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Sector Productivo</label>
                                <select class="form-control select2" data-toggle="select2" id="actividad" name="actividad_economica">
                                    
                                    <optgroup label="actividad">
                                        <?php if(!empty($actividad_economica)): foreach($actividad_economica as $actividad): ?>
                                        <?php if($rowdata['actividad_economica']==$actividad['id_actividad']){?>
                                            <option selected value="<?php echo $actividad['id_actividad'];?>"><?php echo utf8_decode($actividad['nombre']);?></option>
                                        <?php }
                                        else{
                                        ?>
                                            <option value="<?php echo $actividad['id_actividad'];?>"><?php echo utf8_decode($actividad['nombre']);?></option>
                                        <?php }?>
                                        <?php endforeach; else: ?>
                                            <option value="0">No existen datos</option>
                                        <?php endif; ?>
                                    </optgroup>
                                </select>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Innovación</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="innovacionsi" name="innovacion" value="0" class="custom-control-input" <?php if($rowdata['innovacion']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="innovacionsi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="innovacionno" name="innovacion" value="1" class="custom-control-input" <?php if($rowdata['innovacion']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="innovacionno">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </div>
                        <div class="col-lg-6">
                            <div class="form-group">
                                <label for="simpleinput">Pertenece a un pueblo indigena</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="Indigenasi" name="indigena" value="0" class="custom-control-input" <?php if($rowdata['indigena']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="Indigenasi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="Indigenano" name="indigena" value="1" class="custom-control-input" <?php if($rowdata['indigena']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="Indigenano">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Otros ingresos</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="oingresossi" name="otrosingresos" value="0" class="custom-control-input" <?php if($rowdata['otrosingresos']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="oingresossi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="oingresosno" name="otrosingresos" value="1" class="custom-control-input" <?php if($rowdata['otrosingresos']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="oingresosno">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Ventas (esta vendiendo)</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="ventassi" name="ventas" value="0" class="custom-control-input" <?php if($rowdata['ventas']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="ventassi">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="ventasno" name="ventas" value="1" class="custom-control-input" <?php if($rowdata['ventas']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="ventasno">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Estapa de desarrollo</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="etapa_desarrollo1" name="etapa_desarrollo" value="0" class="custom-control-input" <?php if($rowdata['etapa_desarrollo']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="etapa_desarrollo1">Idea</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="etapa_desarrollo2" name="etapa_desarrollo" value="1" class="custom-control-input" <?php if($rowdata['etapa_desarrollo']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="etapa_desarrollo2">Desarrollo</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="etapa_desarrollo3" name="etapa_desarrollo" value="2" class="custom-control-input" <?php if($rowdata['etapa_desarrollo']==2) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="etapa_desarrollo3">Producción</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Capacidad de escalamiento</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="escalamientono" name="escalamiento" value="0" class="custom-control-input" <?php if($rowdata['escalamiento']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="escalamientono">Si</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="escalamientosi" name="escalamiento" value="1" class="custom-control-input" <?php if($rowdata['escalamiento']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="escalamientosi">No</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <div class="mt-2">
                                    <div class="form-group">
                                        <label for="numero_trabajadores">Cuantos trabajadores tiene</label>
                                        <input data-toggle="touchspin" type="text" name="numero_trabajadores" value="<?php if($rowdata['numero_trabajadores']=='') echo  "0"; else{ echo $rowdata['numero_trabajadores']; }?>">
                                    </div>
                                </div>
                            </div>
                            <hr>
                            <div class="form-group">
                                <label for="simpleinput">Jornada Laboral</label>
                                <div class="mt-2">
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="jornadac" name="jornada" value="0" class="custom-control-input" <?php if($rowdata['jornada']==0) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="jornadac">Completo</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="jornadap" name="jornada" value="1" class="custom-control-input" <?php if($rowdata['jornada']==1) echo "checked" ; ?>>
                                        <label class="custom-control-label" for="jornadap">Parcial</label>
                                    </div>
                                </div>
                            </div>
                            <hr>
                            
                        </div>
                    </div>


        
                </div>
            </div>
        </div>            

<!-- 
    <div class="tab-pane show w-100" id="indicadores">
        <table id="row-callback-datatable2" class="table dt-responsive nowrap w-100">
            <thead>
                <tr>
                    <th>Año</th>
                    <th>institución</th>
                    <th>Iniciativa</th>
                    <th>Aporte externo</th>
                    <th>Aporte Usuario</th>
                    <th>Estado</th>
                </tr>
            </thead>


            <tbody>
                <tr>
                    <td>2020</td>
                    <td>INDAP</td>
                    <td>Huerta de arandanos</td>
                    <td>4.235.447</td>
                    <td>7.645.112</td>
                    <td>Activo</td>
                </tr>
                <tr>
                    <td>2020</td>
                    <td>INDAP</td>
                    <td>Turismo</td>
                    <td>2.356.342</td>
                    <td>4.235.447</td>
                    <td>Inactivo</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div class="tab-pane" id="analisis">
        <label for="descripcion" class="h3">Descripción del proyecto actual</label>
        <div id="summernote-editmode">
            <h5>Emprendedor Marco Carrasco, </h5>
            <p>Se visitó el nuevo sector que se establecerá el nuevo proyecto equivalente a 0,5 Hás. De Arandanos variedad...</p>
            <p class="lead">Actualizado 30-11-2020.</p>
        </div>
        <button id="summernote-edit" class="btn btn-primary btn-sm"><i class="mdi mdi-pencil mr-1"></i>Editar</button>
        <button id="summernote-save" class="btn btn-success btn-sm mt-2" style="display: none;"><i class="mdi mdi-content-save-outline mr-1"></i>Guardar Cambios</button>
        </br>

        <label for="descripcion" class=" mt-4 h3">Descripción de la actividad economica</label>
        <div id="summernote-editmode2">
            <p>Huerto de Arandanos antiguo de variedad diversa, se encuentra plantado en el sector de  </p>
            <p class="lead">Actualizado 30-11-2020.</p>
        </div>
        <button id="summernote-edit2" onclick="edit()" class="btn btn-primary btn-sm"><i class="mdi mdi-pencil mr-1"></i>Editar</button>
        <button id="summernote-save2" onclick="savedata()" class="btn btn-success btn-sm mt-2" style="display: none;"><i class="mdi mdi-content-save-outline mr-1"></i>Guardar Cambios</button>
        </hr>
    </div>


<div class="tab-pane" id="comunidades">                                        
<div class="row">
        <div class="col-lg-12">
                <div class="form-group">
                    <label for="name">Organización</label>
                    <select class="form-control select2" data-toggle="select2">
                        <optgroup label="Organización">
                            <option value="0" selected>Taller de Mujeres Cumcumllaque (rayenco)</option>
                            <option value="0">Grupo de Mujeres Los Morros</option>
                            <option value="0">Agrupacion  las Colmenitas de Melipeuco</option>
                            <option value="0">Agrupación Soldados Del Reino</option>
                        </optgroup>
                    </select>
                    
                </div>
                <hr>
                <div class="form-group">
                    <label for="email">Clasificación</label>
                    <input type="email" id="email" name="email" class="form-control" placeholder="Organización Funcional">
                </div>
                <hr>
                <div class="form-group">
                    <label for="tel" >Rol</label>
                    <input type="text" id="tel" name="tel" class="form-control" data-toggle="input-mask" data-mask-format="00000000">
                    <span class="font-13 text-muted">e.g "65.425.230-0"</span>
                </div>
                </hr>
                <div class="form-group">
                    <label for="dir">Nº Personalidad Juridica</label>
                    <input type="text" id="dir" name="dir" class="form-control">
                    <span class="font-13 text-muted">e.g "30/96"</span>
                </div>
                <hr>
                <div class="form-group">
                    <label for="dir">Nº Socios</label>
                    <input data-toggle="touchspin" type="text" value="4">
                </div>
                <hr>
            
        </div>
    </div>
</div>


<div class="tab-pane" id="equipos">                                        
    <div class="row">
        <div class="col-lg-12">
                <div class="form-group">
                    <label for="name">Programa</label>
                    <select class="form-control select2" data-toggle="select2" name="select">
                        <optgroup label="Programa">
                            <option value="0" selected>PRODESAL</option>
                            <option value="1">PDTI, UPT El Valle 1</option>
                            <option value="2">PDTI, UPT El VAlle 2</option>
                        </optgroup>
                    </select>
                    
                </div>
                <hr>
                <div class="form-group">
                    <label for="email">Nombre Comunidad, grupo o Comité</label>
                    <select class="form-control select2" data-toggle="select2">
                        <optgroup label="Nombre Comunidad, grupo o Comité">
                            <option value="0" selected>PAILE PAILE</option>
                            <option value="1">CAREN ALTO</option>
                            <option value="2">Huallerupe</option>
                        </optgroup>
                    </select>
                </div>
                <hr>
                <div class="form-group">
                    <label for="dir">Nº Usuarios</label>
                    <input data-toggle="touchspin" type="text" value="4">
                </div>
                <hr>
                <div class="form-group">
                    <label for="tel" >Presidente</label>
                    <input type="text" id="tel" name="tel" class="form-control" data-toggle="input-mask" data-mask-format="00000000">
                    <span class="font-13 text-muted">e.g "RUBEN VALLEJOS ACUÑA"</span>
                </div>
                
                
                
            
        </div>
    </div>
    -->
</div>
</form>

      
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
    
    //subir archivo
    function readURL(input) {
        if (input.files && input.files[0]) {

            var reader = new FileReader();

            reader.onload = function(e) {
            $('.image-upload-wrap').hide();

            $('.file-upload-image').attr('src', e.target.result);
            $('.file-upload-content').show();

            $('.image-title').html(input.files[0].name);
            };

            reader.readAsDataURL(input.files[0]);

        } else {
            removeUpload();
        }
        }

        function removeUpload() {
        $('.file-upload-input').replaceWith($('.file-upload-input').clone());
        $('.file-upload-content').hide();
        $('.image-upload-wrap').show();
        }
        $('.image-upload-wrap').bind('dragover', function () {
                $('.image-upload-wrap').addClass('image-dropping');
            });
            $('.image-upload-wrap').bind('dragleave', function () {
                $('.image-upload-wrap').removeClass('image-dropping');
        });
        //fin subir archivo

</script>
