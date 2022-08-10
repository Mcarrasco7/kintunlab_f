<?php
$completarurl="./";
include 'bd_consul/validar.php';

include 'bd_consul/conexion.php';


?>

<!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="utf-8" />
        <title>KintunLab - Inicio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <!-- App favicon -->
        <link rel="shortcut icon" href="assets/images/favicon.ico">

        <!-- third party css -->
        <link href="assets/css/vendor/jquery-jvectormap-1.2.2.css" rel="stylesheet" type="text/css" />
        <!-- third party css end -->

        <!-- App css -->
        <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
        <!--<link href="assets/css/app.min.css" rel="stylesheet" type="text/css" id="light-style" />-->
        <link href="assets/css/app.css" rel="stylesheet" type="text/css" id="light-style" />
        <link href="assets/css/app-dark.min.css" rel="stylesheet" type="text/css" id="dark-style" disabled="disabled" />
        
    </head>
    <body class="loading" data-layout-config='{"leftSideBarTheme":"light","layoutBoxed":false, "leftSidebarCondensed":true, "leftSidebarScrollable":false,"darkMode":false, "showRightSidebarOnStart": false}'  data-leftbar-theme="light" data-leftbar-compact-mode="condensed" cz-shortcut-listen="true">
        <!-- Begin page -->
        <div class="wrapper mm-active">
            <?php include "./partials/left-sidebar.php" ?>
       

            <!-- ============================================================== -->
            <!-- Start Page Content here -->
            <!-- ============================================================== -->

            <div class="content-page">
                <div class="content">
                    <?php include "./partials/topbar.php" ?>
                    
                    <!-- Start Content-->
                    <div class="container-fluid">

                        <div class="row pt-2 mb-4">
                            <div class="col-xl-8 col-lg-8 ">
                                <div class="card">
                                    <div class="card-body py-0 px-0">

                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179e7dcd6d8%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179e7dcd6d8%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.9140625%22%20y%3D%22217.7%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="First slide">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179e7dcd6d9%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179e7dcd6d9%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3125%22%20y%3D%22217.7%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Second slide">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-100" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_179e7dcd6d9%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_179e7dcd6d9%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.9921875%22%20y%3D%22217.7%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Third slide">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                        <!--<iframe width="100%" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                                        src="https://experience.arcgis.com/experience/9d8f688a6808470c84fad092d6075b3e/9"></iframe>
                                        <div id="world-map-markers" style="height: 360px"></div>-->
                                    </div>
                                    <div class="card-body">
                                    <div class="table-responsive">
                                            <table class="table table-centered table-borderless table-hover w-100 dt-responsive nowrap" id="products-datatable">
                                                <thead class="thead-light">
                                                    <tr>
                                                        <th style="width: 20px;">
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck1">
                                                                <label class="custom-control-label" for="customCheck1">&nbsp;</label>
                                                            </div>
                                                        </th>
                                                        <th>Nombre</th>
                                                        <th>Indice</th>
                                                        <th>Encargado</th>
                                                        <th>Balance</th>
                                                        <th>Fecha de creacción</th>
                                                        <th>Valor</th>
                                                        <th style="width: 75px;">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck2">
                                                                <label class="custom-control-label" for="customCheck2">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-4.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Paul J. Friend</a>
                                                        </td>
                                                        <td>
                                                            Homovee
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">128</span>
                                                        </td>
                                                        <td>
                                                            $128,250
                                                        </td>
                                                        <td>
                                                            07/07/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck3">
                                                                <label class="custom-control-label" for="customCheck3">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-3.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Bryan J. Luellen</a>
                                                        </td>
                                                        <td>
                                                            Execucy
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">09</span>
                                                        </td>
                                                        <td>
                                                            $78,410
                                                        </td>
                                                        <td>
                                                            09/12/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 41, 45, 63, 25, 66, 12, 45, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck4">
                                                                <label class="custom-control-label" for="customCheck4">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-3.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Kathryn S. Collier</a>
                                                        </td>
                                                        <td>
                                                            Epiloo
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">78</span>
                                                        </td>
                                                        <td>
                                                            $89,458
                                                        </td>
                                                        <td>
                                                            06/30/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 41, 34, 63, 25, 34, 12, 434, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck5">
                                                                <label class="custom-control-label" for="customCheck5">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-1.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Timothy Kauper</a>
                                                        </td>
                                                        <td>
                                                            Uberer
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">847</span>
                                                        </td>
                                                        <td>
                                                            $258,125
                                                        </td>
                                                        <td>
                                                            09/08/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 41, 34, 33, 25, 34, 50, 65, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck6">
                                                                <label class="custom-control-label" for="customCheck6">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-5.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Zara Raws</a>
                                                        </td>
                                                        <td>
                                                            Symic
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">235</span>
                                                        </td>
                                                        <td>
                                                            $56,210
                                                        </td>
                                                        <td>
                                                            07/15/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 45, 34, 33, 34, 34, 50, 55, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck7">
                                                                <label class="custom-control-label" for="customCheck7">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-6.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Annette P. Kelsch</a>
                                                        </td>
                                                        <td>
                                                            Insulore
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">485</span>
                                                        </td>
                                                        <td>
                                                            $330,251
                                                        </td>
                                                        <td>
                                                            09/05/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 30, 67, 33, 25, 34, 56, 65, 9, 54]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck8">
                                                                <label class="custom-control-label" for="customCheck8">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-7.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Jenny C. Gero</a>
                                                        </td>
                                                        <td>
                                                            Susadmin
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">38</span>
                                                        </td>
                                                        <td>
                                                            $12,000
                                                        </td>
                                                        <td>
                                                            08/02/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 66, 30, 45, 33, 25, 44, 56, 33, 9, 33]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck9">
                                                                <label class="custom-control-label" for="customCheck9">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-8.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Edward Roseby</a>
                                                        </td>
                                                        <td>
                                                            Hyperill
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">77</span>
                                                        </td>
                                                        <td>
                                                            $45,216
                                                        </td>
                                                        <td>
                                                            08/23/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 43, 30, 67, 34, 25, 34, 56, 43, 9, 56]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck10">
                                                                <label class="custom-control-label" for="customCheck10">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-9.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Anna Ciantar</a>
                                                        </td>
                                                        <td>
                                                            Vicedel
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">347</span>
                                                        </td>
                                                        <td>
                                                            $7,815
                                                        </td>
                                                        <td>
                                                            05/06/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 23, 30, 67, 34, 56, 34, 56, 85, 9, 56]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck11">
                                                                <label class="custom-control-label" for="customCheck11">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-10.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Dean Smithies</a>
                                                        </td>
                                                        <td>
                                                            Circumous
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">506</span>
                                                        </td>
                                                        <td>
                                                            $68,143
                                                        </td>
                                                        <td>
                                                            04/09/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 82, 30, 67, 65, 25, 34, 56, 44, 9, 22]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck12">
                                                                <label class="custom-control-label" for="customCheck12">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-1.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Labeeb Ghali</a>
                                                        </td>
                                                        <td>
                                                            Laudent
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">121</span>
                                                        </td>
                                                        <td>
                                                            $17,514
                                                        </td>
                                                        <td>
                                                            06/19/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 54, 30, 44, 65, 25, 34, 33, 44, 9, 23]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <div class="custom-control custom-checkbox">
                                                                <input type="checkbox" class="custom-control-input" id="customCheck13">
                                                                <label class="custom-control-label" for="customCheck13">&nbsp;</label>
                                                            </div>
                                                        </td>
                                                        <td class="table-user">
                                                            <img src="assets/images/users/avatar-2.jpg" alt="table-user" class="mr-2 rounded-circle">
                                                            <a href="javascript:void(0);" class="text-body font-weight-semibold">Rory Seekamp</a>
                                                        </td>
                                                        <td>
                                                            Centinte
                                                        </td>
                                                        <td>
                                                            <span class="font-weight-semibold">89</span>
                                                        </td>
                                                        <td>
                                                            $14,384
                                                        </td>
                                                        <td>
                                                            03/24/2018
                                                        </td>
                                                        <td>
                                                            <div class="spark-chart" data-dataset="[25, 82, 23, 67, 65, 67, 65, 56, 32, 19, 22]"></div>
                                                        </td>
                    
                                                        <td>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-square-edit-outline"></i></a>
                                                            <a href="javascript:void(0);" class="action-icon"> <i class="mdi mdi-delete"></i></a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>


                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            </div>
                            <div class="col-xl-4 col-lg-4">
                                <div class="card">
                                    <div class="card-body">
                                        <select class="custom-select mb-3">
                                            <option selected>Lista de usuarios</option>
                                            <option value="1">Marco Carrasco</option>
                                            <option value="2">Rodrigo Diaz</option>
                                            <option value="3">Eduardo Fernandez</option>
                                        </select> 
                                        <h4 class="header-title">Grafico 1</h4>
                                        <div id="basic-bar" class="apex-charts mb-3" data-colors="#39afd1"></div>
                                        <h4 class="header-title mb-3">Grafico 2</h4>
                                        <div id="high-performing-product" class="apex-charts mb-3" data-colors="#727cf5,#e3eaef"></div>
                                        <h4 class="header-title">Grafico 3</h4>
                                        <div id="full-stacked-bar" class="apex-charts mb-3" data-colors="#ffbc00,#39afd1,#6c757d,#e3eaef,#727cf5"></div>
                                        
                                        <h4 class="header-title">Grafico 4</h4>
                                        <div class="chart-content-bg">
                                            <div class="row text-center">
                                                <div class="col-md-6">
                                                    <p class="text-muted mb-0 mt-3">Esta Semana</p>
                                                    <h2 class="font-weight-normal mb-3">
                                                        <small class="mdi mdi-checkbox-blank-circle text-primary align-middle mr-1"></small>
                                                        <span>$58.254</span>
                                                    </h2>
                                                </div>
                                                <div class="col-md-6">
                                                    <p class="text-muted mb-0 mt-3">Semana Pasada</p>
                                                    <h2 class="font-weight-normal mb-3">
                                                        <small class="mdi mdi-checkbox-blank-circle text-success align-middle mr-1"></small>
                                                        <span>$69.524</span>
                                                    </h2>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="dash-item-overlay d-none d-md-block">
                                            <h5>Valores diarios</h5>
                                            <p class="text-muted font-13 mb-3 mt-2">Esta semana las ganancias...</p>
                                            <a href="javascript: void(0);" class="btn btn-outline-primary">Ver Resumen
                                                <i class="mdi mdi-arrow-right ml-2"></i>
                                            </a>
                                        </div>

                                        <div id="revenue-chart" class="apex-charts mt-3" data-colors="#727cf5,#0acf97"></div>




                                    </div> <!-- end card-body-->
                                </div> <!-- end card-->
                            

                            

                               

                            </div> <!-- end col -->

                            
                        </div>
                        <!-- end row -->

                        

                        

                    </div>
                    <!-- container -->

                </div>
                <!-- content -->
                

              
                <?php include "./partials/footer.php" ?>

            </div>

            <!-- ============================================================== -->
            <!-- End Page content -->
            <!-- ============================================================== -->


        </div>
        <!-- END wrapper -->

 
        <?php //include "../partials/right-sidebar.php" ?>

        <!-- bundle -->
        <script src="assets/js/vendor.min.js"></script>
        <script src="assets/js/app2.js"></script>

        <!-- third party js -->
        <script src="assets/js/vendor/apexcharts.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-1.2.2.min.js"></script>
        <script src="assets/js/vendor/jquery-jvectormap-world-mill-en.js"></script>
        <!-- third party js ends -->

        <!-- demo app -->
        <script src="assets/js/pages/demo.dashboard.js"></script>
        <!-- end demo js-->
        <!-- third party:js -->
        <script src="assets/js/vendor/jquery.dataTables.min.js"></script>
        <script src="assets/js/vendor/dataTables.bootstrap4.js"></script>
        <script src="assets/js/vendor/dataTables.responsive.min.js"></script>
        <script src="assets/js/vendor/responsive.bootstrap4.min.js"></script>
        <script src="assets/js/vendor/dataTables.checkboxes.min.js"></script>
        <!-- third party end -->

        <!-- demo:js -->
        <script src="assets/js/pages/demo.apex-bar.js"></script>
        <script src="assets/js/pages/demo.sellers.js"></script>
        <!-- demo end -->
        
    </body>
</html>