<?php
   
   $completarurl="../";
   include $completarurl.'bd_consul/validar.php';
   
   include $completarurl.'bd_consul/conexion.php';
   
   require_once $completarurl.'bd_consul/DB.class.php';

?>

<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8" />
        <title>Agenda | KintunLab</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="../assets/images/favicon.ico">

        <!-- third party css -->
        <link href="../assets/css/vendor/frappe-gantt.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="../assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <link href="../assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="../assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" />
        <style>
        .bar-label{
            fill: #000 !important;
            font-size:0.8rem!important;
        }
        .gantt .bar, .gantt .bar-wrapper:hover .bar {
            fill: #e2f5fc;
        }
        .bar-label{
            font-weight: bold!important;
        }
        </style>
    </head>

    <body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":true,"darkMode":false, "showRightSidebarOnStart": true}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed">
        <!-- Begin page -->
        <div class="wrapper">
            <?php include "../partials/left-sidebar.php" ?>
            

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <?php include "../partials/topbar.php" ?>
                   

                    <!-- Start Content-->
                    <div class="container-fluid">

                        <!-- start page title -->
                        
                        <div class="row">
                            <div class="col-12">
                                <div class="page-title-box">
                                    <div class="page-title-right">
                                        <ol class="breadcrumb m-0">
                                            <li class="breadcrumb-item"><a href="javascript: void(0);">KintunLab</a></li>
                                            <li class="breadcrumb-item active">Agenda</li>
                                        </ol>
                                    </div>
                                    <h4 class="page-title">Agenda</h4>
                                </div>
                            </div>
                        </div>
                        
                         <!-- end page title -->
                            
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <!-- start projects-->
                                    <!--  <div class="col-xl-3">
                                        <div class="pr-xl-3">
                                            <h5 class="mt-0 mb-3">Projects</h5>-->
                                            <!-- start search box -->
                                            <!--  <div class="app-search">
                                                <form>
                                                    <div class="form-group position-relative">
                                                        <input type="text" class="form-control"
                                                            placeholder="search by name..." />
                                                        <span class="mdi mdi-magnify search-icon"></span>
                                                    </div>
                                                </form>
                                            </div>-->
                                            <!-- end search box -->

                                            <!--  <div class="row">
                                                <div class="col">
                                                    <div data-simplebar style="max-height: 535px;">
                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-2 p-2">
                                                                <div class="avatar-sm">
                                                                    <span class="avatar-title bg-success-lighten rounded-circle text-success">
                                                                        <i class='uil uil-moonset font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Lunar
                                                                        <span class="badge badge-success-lighten ml-1">On Track</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj101
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media bg-light p-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-success-lighten rounded-circle text-success">
                                                                        <i class='uil uil-moon-eclipse font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Dark Moon
                                                                        <span class="badge badge-success-lighten ml-1">On
                                                                            Track</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj102
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-1 px-2 py-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-warning-lighten rounded-circle text-warning">
                                                                        <i class='uil uil-mountains font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Aurora
                                                                        <span class="badge badge-warning-lighten ml-1">Locked</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj103
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-1 px-2 py-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-warning-lighten rounded-circle text-warning">
                                                                        <i class='uil uil-moon font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Blue Moon
                                                                        <span
                                                                            class="badge badge-warning-lighten ml-1">Locked</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj104
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-1 px-2 py-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-danger-lighten rounded-circle text-danger">
                                                                        <i class='uil uil-ship font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Casanova
                                                                        <span
                                                                            class="badge badge-danger-lighten ml-1">Delayed</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj106
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-1 px-2 py-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-success-lighten rounded-circle text-success">
                                                                        <i class='uil uil-subway-alt font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Darwin
                                                                        <span class="badge badge-success-lighten ml-1">On
                                                                            Track</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj107
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>

                                                        <a href="javascript:void(0);" class="text-body">
                                                            <div class="media mt-1 px-2 py-2">
                                                                <div class="avatar-sm">
                                                                    <span
                                                                        class="avatar-title bg-danger-lighten rounded-circle text-danger">
                                                                        <i class='uil uil-gold font-24'></i>
                                                                    </span>
                                                                </div>
                                                                <div class="media-body ml-2">
                                                                    <h5 class="mt-0 mb-0">
                                                                        Eagle
                                                                        <span class="badge badge-danger-lighten ml-1">Delayed</span>
                                                                    </h5>
                                                                    <p class="mt-1 mb-0 text-muted">
                                                                        ID: proj108
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>-->
                                    <!-- end projects -->

                                    <!-- gantt view -->
                                    <div class="col-xl-12 mt-4 mt-xl-12">
                                        <div class="pl-xl-3">
                                            <div class="row">
                                                <div class="col-auto">
                                                    <a data-toggle="modal" data-target="#info-header-modal" id="selectoption" class="btn btn-success btn-sm mb-2 text-light">Agregar Tarea</a>
                                                </div>
                                                <div class="col text-sm-right">
                                                    <div class="btn-group btn-group-sm btn-group-toggle mb-2" data-toggle="buttons" id="modes-filter">
                                                        
                                                        <label class="btn btn-light">
                                                            <input type="radio" name="modes" id="day" value="Day"> Dia
                                                        </label>
                                                        <label class="btn btn-light active">
                                                            <input type="radio" name="modes" id="week" value="Week" > Semana
                                                        </label>
                                                        <label class="btn btn-light">
                                                            <input type="radio" name="modes" id="month" value="Month" checked> Mes
                                                        </label>
                                                        <label class="btn btn-light">
                                                            <input type="radio" name="modes" id="year" value="Year" > Año
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="row">
                                                <div class="col mt-3">
                                                    <svg id="tasks-gantt"></svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- end gantt view -->
                                </div>
                            </div>
                        </div>

                    </div> <!-- container -->

                </div> <!-- content -->

                <?php include "../partials/footer.php" ?>

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->

        <div id="info-header-modal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="info-header-modalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header modal-colored-header bg-info">
                        <h4 class="modal-title" id="info-header-modalLabel">Nuevo registro</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    </div>
                    <div class="modal-body">
                        <form id="agenda-data">
                            <div class="form-group d-none">
                                <input type="text" class="form-control" id="id" name="id" placeholder="" value="20">
                            </div>
                            <div class="form-group">
                                <label for="accion">Nueva actividad</label>
                                <input type="text" class="form-control" id="accion" name="accion" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="dependencies">Linea de acción</label>
                                <select class="form-control" id="dependencies" name="dependencies">
                                    <option value=""></option>
                                    <option value="1">Construcción y reposición de Infraestructura como punto de venta de productos locales</option>
                                    <option value="2">Definición y ordenamiento de los grupos cuando corresponda</option>
                                    <option value="6">Orientación de asociatividad, y calidad de servicio, formalización, temas legales</option>
                                    <option value="7">Construcción, de pozo , inscripción de agua, financiamiento de infraestructura de riego</option>
                                    <option value="8">Alianza de fomento a la comercialización</option>
                                    <option value="9">Recurso agua</option>
                                    <option value="10">Compra de equipamiento para los locales</option>
                                    <option value="11">Acreditación del los grupos</option>
                                    <option value="12">Coordinación protección de las aguas en sectores degradados</option>
                                    <option value="13">Protección de los cursos de agua en sectores degradados (Cuencas)</option>
                                    <option value="14">Articulación para la regularización de predios</option>
                                    <option value="15">Solicitar a Bienes Nacionales el listado de carpetas ingresadas a programa de regularización de predio agrícola de la Comuna de Melipeuco.</option>
                                    <option value="16">Asesorar de manera integral a los usuarios PDTI o PRODESAL</option>
                                    <option value="17">Asesorar de manera integral a los usuarios PDTI o PRODESAL, no solo en el ámbito económico, sino que también en el empoderamiento , autoestima y otras dimensiones.</option>
                                    <option value="18">Procesar los productos de los agricultores en una sala con resolución sanitaria.</option>
                                    <option value="19">Articulación para la instalación de salas de proceso comunitarias</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="name">Fecha de inicio</label>
                                <input type="text" class="form-control" data-provide="datepicker" id="name" name="name" data-date-format="yyyy-mm-dd" data-date-autoclose="true">
                            </div>

                            <div class="form-group">
                                <label for="end">Fecha de termino</label>
                                <input type="text" class="form-control" data-provide="datepicker" id="end" name="end" data-date-format="yyyy-mm-dd" data-date-autoclose="true">
                            </div>
                            <div class="form-group">
                                <label>Porcentaje de avance</label>
                                <input data-toggle="touchspin" value="0" type="text" name="progress" id="progress" data-bts-button-down-class="btn btn-danger" data-bts-button-up-class="btn btn-info">
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-light" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" id="newtaks">Agregar</button>
                    </div>
                </div><!-- /.modal-content -->
            </div><!-- /.modal-dialog -->
        </div><!-- /.modal -->

        </div>
        <!-- END wrapper -->


        <!-- bundle -->
        <script src="../assets/js/vendor.min.js"></script>
        <script src="../assets/js/app2.js"></script>

        <!-- gantt js-->
        <script src="../assets/js/vendor/frappe-gantt.min.js"></script>

        <!-- demo app -->
        <script src="../assets/js/pages/demo.project-gantt.js"></script>
        <!-- end demo js-->
        <script>

        var data = [{ id: "1", name: "Definir la acción 1", start: "2019-07-16", end: "2020-07-20", progress: 55 },
            { id: "2", name: "Ajustar los documentos", start: "2019-07-19", end: "2019-07-21", progress: 85, dependencies: "1" },
            { id: "3", name: "Reunirse con las asociaciones", start: "2019-07-21", end: "2019-07-22", progress: 80, dependencies: "2" },
            { id: "4", name: "Desarrollo rural", start: "2019-07-15", end: "2019-07-17", progress: 80 },
            { id: "5", name: "Planificar metodos", start: "2019-07-18", end: "2019-07-22", progress: 65, dependencies: "4" },
            { id: "6", name: "seleccionar emprendedores", start: "2019-07-20", end: "2019-07-31", progress: 15 },
            { id: "7", name: "Reuniones sectoriales", start: "2019-07-25", end: "2019-07-26", progress: 99, dependencies: "6" },
            { id: "8", name: "Coordinar desarrollo turistico", start: "2019-07-28", end: "2019-07-30", progress: 35, dependencies: "7" },
            { id: "9", name: "Diseñar plan 2021", start: "2019-08-01", end: "2019-08-03", progress: 25, dependencies: "8" },
            { id: "10", name: "habilitar datos estadisticos", start: "2019-08-05", end: "2019-08-07", progress: 60, dependencies: "9" },
            { id: "11", name: "Definir la acción 64", start: "2019-07-16", end: "2019-07-20", progress: 55, dependencies: "null" },
        ];
        var s;

        $(document).ready(function(e) {

        $(".eliminar-dato").click(function() {
            var dato=$(this).data("id");
            console.log(dato);
            data[0].splice(dato, 1);
            s.refresh(data[0]);
            $('#info-header-modal').modal('toggle');
        });
        

        $.ajax({
            url: 'get-data/agendabd.php',
            type: 'get',
            dataType: 'JSON',
            success: function(response) {
                
                data[0] = response;
                
                loaddatagantt(data);
            }
        });


        });

        $( "#newtaks" ).click(function() {
            console.log(data[0]);
            
            var formd=$("#agenda-data").serialize();
            //var formd=JSON.parse(formd);
            var formd=$("#agenda-data").serializeArray();
            var temp = {id:formd[0].value,
                name:formd[1].value,
                start:formd[3].value,
                end:formd[4].value,
                progress:formd[5].value,
                dependencies:formd[2].value
            }; 
            data[0].push( temp );
            
            s.refresh(data[0]);
            $('#info-header-modal').modal('toggle');
            console.log(data[0]);
        });
        
        


        
        
        

        function loaddatagantt(data) {
        
        s = new Gantt(
            "#tasks-gantt", data[0], {
                view_modes: ["Day", "Week", "Month", "Year"],
                bar_height: 20,
                padding: 18,
                view_mode: "Month",
                custom_popup_html: function(e) {
                    e.end, 60 <= e.progress || (30 <= e.progress && e.progress);
                    console.log(e);
                    return '<div class="popover fade show bs-popover-right gantt-task-details" role="tooltip"><div class="arrow"></div><div class="popover-body"><h5>' + e.name + '</h5><p class="mb-2">Se espera finalizar el ' + e.end + '</p><div class="progress mb-2" style="height: 10px;"><div class="progress-bar ${progressCls}" role="progressbar" style="width: ' + e.progress + '%;" aria-valuenow="${task.progress}" aria-valuemin="0" aria-valuemax="100">' + e.progress + '</div></div><div class="btn btn-sm w-100 btn-danger eliminar-dato" data-id="'+ e._index +'">Eliminar</div></div></div>';
                },
            }
        );
        $("#modes-filter :input").change(function() {
            s.change_view_mode($(this).val());
        });
        }

       
            
        </script>
    </body>

</html>
