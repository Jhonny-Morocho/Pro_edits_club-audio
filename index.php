



<!-- ///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA///////////////////////////
///////////////////////////CABEZERA/////////////////////////// -->
<?php include_once'Vista/template/head.php'; ?>
  


  <div id="preloader"></div>

  
<!-- ///////////////////////////MENU///////////////////////////
///////////////////////////MENU///////////////////////////
///////////////////////////MENU/////////////////////////// -->
<?php
include_once'Vista/modal/modal_cliente.php';
include_once'Vista/modal/modal_registro.php';
include_once'Vista/modal/modal_admin.php';  
include_once'Vista/template/header.php';
include_once'Vista/template/animacion_espera.php'; 

?>


  <!-- Start Slider Area -->
  <div id="home" class="slider-area">
    <div class="bend niceties preview-2">
      <div id="ensign-nivoslider" class="slides">
        <img src="Vista/img_dj/Fondo.png" alt="" title="#slider-direction-1" />
        <img src="Vista/img_dj/Fondo2.png" alt="" title="#slider-direction-2" />
        <img src="Vista/img_dj/Fondo3.png" alt="" title="#slider-direction-3" />
      </div>

    <!-- ///////////////////////////////////DIRECCIONES////////////////////
    ///////////////////////////////////DIRECCIONES////////////////////
    ///////////////////////////////////DIRECCIONES//////////////////// -->

    <?php 
    include_once'Vista/template/direccion_1.php';
    include_once'Vista/template/direccion_2.php';
    include_once'Vista/template/direccion_3.php';   
    ?>

  </div>


<!-- AddToAny END -->

  <!-- End Slider Area -->

  <!-- Start About area -->

<!-- <script async src="https://static.addtoany.com/menu/page.js"></script> -->
<!-- AddToAny END -->
  <?php 

    /////////////AUDIO////////////////
    include_once'Vista/template/abaut.php';
    /*include_once'Vista/template/video.php';*/
   ?>
  <!-- End About area -->

  <!-- Start Service area -->
  <?php 
    include_once'Vista/template/servicios.php';
   ?>
  <!-- End Service area -->

  <!-- our-skill-area start -->
  <?php 
    /*include_once'Vista/template/porcentaje.php';*/
   ?>
  <!-- our-skill-area end -->

  <!-- Faq area start -->
  <?php 
    /*include_once'Vista/template/preguntas.php';*/
   ?>
  <!-- End Faq Area -->

  <!-- Start Wellcome Area -->
  <?php 
    /*include_once'Vista/template/bienvenido.php';*/

   ?>
  <!-- End Wellcome Area -->

  <!-- Start team Area -->
  <?php 
    include_once'Vista/template/integrantes.php';

   ?>
  <!-- End Team Area -->

  <!-- Start reviews Area -->
  <?php 
   /* include_once'Vista/template/trabajando.php';*/
   ?>
  <!-- End reviews Area -->

  <?php 
    include_once'Vista/template/portafolio.php';
   ?>
  <!-- start pricing area -->
  <?php 
  /*  include_once'Vista/template/tabla.php';*/
   ?>
  <!-- Start portfolio Area -->
  <!-- End pricing table area -->



  <!-- Start Testimonials -->
    <?php 
/*    include_once'Vista/template/testimoniales.php';*/

   ?>
  <!-- End Testimonials -->
<!--   <div class="col-md-3">
                        <button class="btn btn-info btn-block example-the-2">Supervan</button>
                    </div>
<script type="text/javascript">
  console.log("supervisar");
  
             $('.example-the-2').on('click', function(){
                        $.confirm({
                            icon: 'fa fa-question-circle-o',
                            theme: 'supervan',
                            closeIcon: true,
                            animation: 'scale',
                            type: 'orange',
                        });
                    });
</script> -->
  <!-- Start Blog Area -->
  <?php 
   /*include_once'Vista/template/noticias.php';*/

   ?>
  <!-- End Blog -->

  <!-- Start Suscrive Area -->
<!--   <div class="suscribe-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs=12">
          <div class="suscribe-text text-center">
            <h3>Welcome to our eBusiness company</h3>
            <a class="sus-btn" href="#">Get A quate</a>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <!-- End Suscrive Area -->





  <!-- Start contact Area -->
  <div id="contact" class="contact-area">
    <div class="contact-inner area-padding">
      <div class="contact-overly"></div>
      <div class="container ">
        <div class="row">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="section-headline text-center">
              <h2>Contact us</h2>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- Start contact icon column -->
          <!-- <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="fa fa-mobile"></i>
                <p>
                  Call: +1 5589 55488 55<br>
                  <span>Monday-Friday (9am-5pm)</span>
                </p>
              </div>
            </div>
          </div> -->
          <!-- Start contact icon column -->
<!--           <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="fa fa-envelope-o"></i>
                <p>
                  Email: info@example.com<br>
                  <span>Web: www.example.com</span>
                </p>
              </div>
            </div>
          </div> -->
          <!-- Start contact icon column -->
<!--           <div class="col-md-4 col-sm-4 col-xs-12">
            <div class="contact-icon text-center">
              <div class="single-icon">
                <i class="fa fa-map-marker"></i>
                <p>
                  Location: A108 Adam Street<br>
                  <span>NY 535022, USA</span>
                </p>
              </div>
            </div>
          </div> -->
        </div>


        <div class="row">
          <!-- Start Google Map -->
          <div class="col-md-8 col-sm-8 col-xs-12">
                <div class="mapa" id="mapa" style="color: red;background: red">
                </div>
          </div>
          <!-- End Google Map -->




          <div class="col-md-4 col-xl-12 col-sm-4">
            <div id="fb-root"></div>
              <script>(function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v3.1';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              </script>

              <div class="fb-page" data-href="https://www.facebook.com/Proeditsclub-702404853464740/?modal=admin_todo_tour" data-tabs="timeline" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="https://www.facebook.com/Proeditsclub-702404853464740/?modal=admin_todo_tour" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Proeditsclub-702404853464740/?modal=admin_todo_tour">Proeditsclub</a></blockquote>
              </div>
            </div>
          </div>


        </div> <!--   end row -->

      </div>
    </div>
  </div>



<!-- <style type="text/css">
.boton {
height: 25px;
width: 100px;
background-color: #64D448;
    float:left;
    margin:0px 5px;
}
.boton a {

text-transform: capitalize;
font-weight: bold;
font-family: Tahoma, Geneva, sans-serif;
line-height: 25px;
color: #FFF;
text-decoration: none;
background-image: url(https://tutorialesenlinea.es/images/whatsapp.png);
background-repeat: no-repeat;
background-position: 5px 3px;
padding-left: 30px;
display: block;
}
.boton a:hover {
background-color: #48BA2C;
    color: #FFF;
}
</style>
 -->
<!-- <div class="boton"><a href="whatsapp://send?text=(titulo-de-tu-website) - (url -de-tu-website)" data-action="share/whatsapp/share" >Compartir</a></div> -->

  <!-- Start Footer bottom Area -->


  <!-- Flecha hacia arrido -->
  <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

  <!-- Wassap -->
<?php 
  include_once'Vista/template/wasap.php';
 ?>

<!--   <a title="Click para chatear" href="https://api.whatsapp.com/send?phone=56987654321&text=Me%20gustaría%20saber%20el%20precio%20del%20sitio%20web" target="_blank" rel="noopener">Envíanos un mensaje por WhatsApp con un mensaje</a> -->

<!-- Footer -->


<?php 
  include_once'Vista/template/footer.php';
  include_once'Vista/template/scrip.php';

 ?>







