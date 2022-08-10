<?php
  $completarurl="..";
  include '../consultas_bd/validar.php';
  include '../consultas_bd/conexion.php';
  echo "<script>var id_user = '".$_SESSION['user_id']."';</script>";
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  

  <title>Preparación </title>

  <!-- Custom fonts for this template -->
  <link href="../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">
  <link href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="../css/sb-admin-2.min.css" rel="stylesheet">

  <!-- Custom styles for this page -->
  <link href="../vendor/datatables/dataTables.bootstrap4.min.css" rel="stylesheet">
  <link href="../css/estilogeneral.css" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.plyr.io/3.6.2/plyr.css">
  <?php
  if($_SESSION['type']==2){
      echo '<link rel="stylesheet" href="'.$completarurl.'/css/estilo-onemi.css">';
  }
  ?>
  <link rel="icon" href="../files/kimgen_favicon.png">
  <style type="text/css">
  
    .active{
      background-color: #247DE2!important;  
    } 
    .plyr__video-embed iframe {
      top: -50%;
      height: 200%;
    }
    .plyr--video {
      width: 100%;
    }
    .plyr {
      height:auto!important;
    }
    .text-muted{
      font-size: 13px!important;
    }
   .btn-sm{
      font-size: 10px!important;
    }
    h5{
      font-size: 0.8rem!important;
    }
    .talleres{
      background-color: #0073ff;
    }
    .card-header span{
      font-size: 10px!important;
    }
    .card-body p{
      font-size: 10px!important;
      color:#fff;
    }
    .collapse{
      background-color: #94defd;
    }
    .btn-sm{
      padding:.375rem .75rem!important;
    }
    #accordionvid .card-header span {
      font-size: 1rem!important;
      text-align: justify;
    }
    @media only screen and (min-width: 1200px) {
          .bottomdiv {
            height: auto;
            width: 100%;
            position:absolute;
            left:0;
            bottom:0;
        }
    }
    a{ text-decoration: none!important; }
    

  </style>
  

</head>

<body id="page-top">

  <!-- Page Wrapper -->
    <div id="wrapper">

        <?php
        
        $valor=1;
        include '../sidebar.php';
        $completarurl="";
        ?>

            <!-- Begin Page Content -->
        <div class="container-fluid">

            <!-- Page Heading -->
          <div class="row">
            <div class="col-xl-12 m-2">
              <div class="row">
                <div class="col-xl-6 text-left border-right" id="accordionvid">
                <h5 class="my-3 font-weight-bold">VIDEOS DE INDUCCIÓN</h5>
                <hr>
                  <div class="row text-center">
                    <div class="col-xl-12 col-md-12 ">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid1" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> Qué es la plataforma Kimgen Data
                              </span>
                          </h4>
                          </div>

                          <div id="vid1" class="collapse show " aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player1">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/9DudeqS34RQ?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                              </div>
                          </div>
                     </div>
                     <div class="col-xl-12 col-md-12 ">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid2" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> Utilizando la plataforma KimGen Data encargado municipal
                              </span>
                          </h4>
                          </div>

                          <div id="vid2" class="collapse" aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player2">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/iBVSrfd78eE?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>                                </div>
                              </div>
                          </div>
                     </div>
                     <div class="col-xl-12 col-md-12 ">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid3" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> ¿Cómo trabajar los formularios en KimgenData?
                              </span>
                          </h4>
                          </div>

                          <div id="vid3" class="collapse" aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player3">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/A642tbHcsso?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                              </div>
                          </div>
                     </div>

                     <div class="col-xl-12 col-md-12 ">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid4" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> Qué son los escenarios prospectivos y cómo apoyan la gestión del riesgo
                              </span>
                          </h4>
                          </div>

                          <div id="vid4" class="collapse" aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player4">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/RyH1VK0HFJg?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                              </div>
                          </div>
                     </div>

                     <div class="col-xl-12 col-md-12 accordion">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid5" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> Inducción a la gestión del riesgo
                              </span>
                          </h4>
                          </div>

                          <div id="vid5" class="collapse" aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player5">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/1XGyYYRp7pM?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                              </div>
                          </div>
                     </div>

                     <div class="col-xl-12 col-md-12 ">
                          <div class="card-header videoskimg" id="headingOne"  data-toggle="collapse" data-target="#vid6" aria-expanded="true" aria-controls="collapseOne">
                          <h4 class="mb-0 text-justify">
                            
                              <span style="color:#fff!important;" class="btn text-primary"> 
                              <i class="fas fa-tv"></i> KimGem Data | Laboratorio de Planificación Territorial UCT
                              </span>
                          </h4>
                          </div>

                          <div id="vid6" class="collapse" aria-labelledby="headingOne" data-parent="#accordionvid">
                              <div class="card-body p-0">
                                <div class="embed-responsive embed-responsive-16by9 plyr__video-embed"  id="player6">
                                  <iframe class="embed-responsive-item"  src="http://www.youtube.com/embed/QS92sj4B74Q?origin=https://plyr.io&amp;iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1" allowfullscreen allowtransparency allow="autoplay"></iframe>
                                </div>
                              </div>
                          </div>
                     </div>
 


                  </div>
                </div>
                <div class="col-xl-3 border-right" style="min-height: 600px;">
                  <div id="talleres">                    
                      <h5 class="my-3 font-weight-bold">TALLER GUIADO DE FUNCIONALIDADES</h5>
                      <hr>
                        <div class="row text-center">
                          <div class="col-xl-12 col-md-12 my-2">
                            <button type="button" class="btn btn-primary btn-sm btn-block talleres">TALLER N° 1</button>
                          </div>
                          <div class="col-xl-12 col-md-12 my-2">
                            <button type="button" class="btn btn-primary btn-sm btn-block talleres">TALLER N° 2</button>
                          </div>
                          <div class="col-xl-12 col-md-12 my-2">
                            <button type="button" class="btn btn-primary btn-sm btn-block talleres">TALLER N° 3</button>
                          </div>             
                        </div>
                      
                  </div>

                  <div id="accordion" class="bottomdiv px-2">
                          <h5 class="my-3 font-weight-bold">CURSOS</h5>
                          <hr>
                          <div class="card mb-2">
                              <div class="card-header" id="headingOne"  data-toggle="collapse" data-target="#ayuda1" aria-expanded="true" aria-controls="collapseOne">
                              <h4 class="mb-0 text-justify">
                              
                                  <span style="color:#fff!important;" class="btn text-primary"> 
                                  <i class="fas fa-tv "></i> INDUCCIÓN A KIMGENDATA
                                  </span>
                              </h4>
                              </div>

                              <div id="ayuda1" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                  <div class="card-body">
                                  <p> Para configurar su perfil de usuario debe clicar en su</p>
                                  </div>
                              </div>
                          </div>
                          <div class="card mb-2">
                              <div class="card-header" id="headingOne"  data-toggle="collapse" data-target="#ayuda2" aria-expanded="true" aria-controls="collapseOne">
                              <h4 class="mb-0 text-justify">
                                  
                                  <span style="color:#fff!important;" class="btn text-primary"> 
                                  <i class="fas fa-tv"></i> 
                                    ¿INDUCCIÓN AL SISTEMA DE RESPUESTA A LA EMERGENCIA
                                  </span>
                              </h4>
                              </div>

                              <div id="ayuda2" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                  <div class="card-body"> 
                                  <p> Para configurar su perfil de usuario debe clicar en su nombre de usuario en la esquina superior</p>
                                  </div>
                              </div>
                          </div>
                          <div class="card">
                              <div class="card-header" id="headingOne"  data-toggle="collapse" data-target="#ayuda3" aria-expanded="true" aria-controls="collapseOne">
                              <h4 class="mb-0 text-justify">
                                
                                  <span style="color:#fff!important;" class="btn text-primary"> 
                                  <i class="fas fa-tv"></i> INDUCCIÓN AL SISTEMA NACIONAL DE EMERGENCIA
                                  </span>
                              </h4>
                              </div>

                              <div id="ayuda3" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                  <div class="card-body">
                                  <p> Para configurar su perfil de usuario debe clicar en su nombre de usuario en la esquina superior derecha de </p>
                                  </div>
                              </div>
                          </div>
                      </div>              

                </div>
                <div class="col-xl-3">

                <h5 class="my-3 font-weight-bold">MATERIALES FORMATIVOS</h5>
                <hr>
                  <div class="row text-center">
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="../files/infografias/KIMGEN_DATA_INFOGRAFIA_01%20VINCULACION%20PLANES.pdf" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #0090f3;"><i class="fas fa-folder-open"></i> Vinculación de los planes</button>
                    </a>
                    </div>
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="../files/infografias/KIMGEN_DATA_INFOGRAFIA_02%20ESCENARIO%20DE%20AFECTACION.pdf" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #0090f3;"><i class="fas fa-folder-open"></i> Escenarios de afectación</button>
                    </a>
                    </div>
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="../files/infografias/KIMGEN_DATA_INFOGRAFIA_03%20NFRAESTRUCTURA%20CRITICA%20Y%20DE%20CONTEXTO.pdf" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #0090f3;"><i class="fas fa-folder-open"></i>  Infraestructura crítica y de contexto</button>
                    </a>
                    </div>       
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="../files/infografias/KIMGEN_DATA_INFOGRAFIA_04%20CRITERIOS%20PARA%20DEFINIR%20LOS%20ESCENARIO%20DE%20AFECTACION.pdf" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #0090f3;"><i class="fas fa-folder-open"></i>  Criterios de Escenario</button>
                    </a>
                    </div>     
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="#" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #0063f6;"><i class="fas fa-folder-open"></i>  POSTER 01</button>
                    </a>  
                    </div>
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="../files/infografias/KIMGEN_DATA_MURAL_01%20COMO%20LEER%20UN%20ESCENARIO%20EN%20KIMGEN%20DATA.pdf" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #8031f9;"><i class="fas fa-folder-open"></i>  Como Leer un escenario</button>
                    </a>
                    </div>   
                    <div class="col-xl-12 col-md-12 my-2">
                    <a href="#" target="_blank">
                      <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #8031f9;"><i class="fas fa-folder-open"></i>  MURAL 02</button>
                    </a>
                    </div>           
                  </div>


                <div class="bottomdiv px-2">
                    <h5 class="my-3 font-weight-bold">SISTEMAS DE AYUDAS</h5>
                    <hr>
                    <div class="row text-center">
                      <div class="col-xl-12 col-md-12 my-2">
                        <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #008a00;"><i class="fas fa-question-circle"></i>  PREGUNTAS FRECUENTES</button>
                      </div>
                      <div class="col-xl-12 col-md-12 my-2">
                        <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #00af25;"><i class="fas fa-search"></i>  GLOSARIO</button>
                      </div>
                      <div class="col-xl-12 col-md-12 my-2">
                        <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #00af25;"><i class="fas fa-comment-dots"></i>  MESA DE CONSULTAS</button>
                      </div>       
                      <div class="col-xl-12 col-md-12 my-2">
                      <a href="../files/infografias/<?php if($_SESSION['type']==1){ echo "KIMGEN DATA_TUTORIAL_ENCARGADO_MUNICIPAL.pdf";} else{ echo "KIMGEN DATA_TUTORIAL_ONEMI.pdf";}?> " target="_blank">
                        <button type="button" class="btn btn-primary btn-sm btn-block border-0" style="background-color: #00af25;"><i class="fas fa-file-download"></i>  DESCARGA MANUAL DE USUARIO</button>
                      </a>
                      </div>             
                    </div>
                </div>
                               





                  
                </div>
              </div>
            </div>
          



            </div>
        </div>
        <!-- /.container-fluid -->

    </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <footer class="sticky-footer bg-gradient-primary">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright &copy; Your Website 2019</span>
          </div>
        </div>
      </footer>

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>


  <!-- Bootstrap y JavaScript-->
  <script src="../vendor/jquery/jquery.min.js"></script>
  <script src="../js/constantes/predeteminado.js"></script>
  <script src="../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- jquery plugin-->
  <script src="../vendor/jquery-easing/jquery.easing.min.js"></script>

  <!-- Script genenral plantilla-->
  <script src="../js/sb-admin-2.min.js"></script>
  <!-- Plugins -->
  <script src="../vendor/datatables/jquery.dataTables.min.js"></script>
  <script src="../vendor/datatables/dataTables.bootstrap4.min.js"></script>
  <script src="https://cdn.plyr.io/3.6.2/plyr.js"></script>

  
</body>

<script>
  const player1 = new Plyr('#player1', {});
  const player2 = new Plyr('#player2', {});
  const player3 = new Plyr('#player3', {});
  const player4 = new Plyr('#player4', {});
  const player5 = new Plyr('#player5', {});
  const player6 = new Plyr('#player6', {});
  $( ".videoskimg" ).click(function() {
    player1.pause();
    player2.pause();
    player3.pause();
    player4.pause();
    player5.pause();
  });





</script> 
</html>
