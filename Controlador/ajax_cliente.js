



/*$(document).ready(function(){*/ // comento esto por q me da problemas con a tabla al querer borrar un cliente

	/////////////////MOVER CARRITO DE COMPRAS////////////
/*	var altura=$("#id_carrito").offset().top;
	console.log("altura ",altura);
	$(window).on('scroll',function(){
		if($(window).scrollTop()>altura){
			$('#id_carrito').addClass('menu-fixed');
		}else{
			$('#id_carrito').removeClass('menu-fixed');
		}
	});*/


		///////confguracion de la animacion
	function configureLoadingScreen(screen){

    $(document)
        .ajaxStart(function () {
            screen.fadeIn();
        })
        .ajaxStop(function () {
            screen.fadeOut();
        });
	}

	function animacion_espera(){
		/////////////////ANIMACION ESPERA////////////
		/////////////////ANIMACION ESPERA////////////
		/////////////////ANIMACION ESPERA////////////
		console.log("Soy la animacion");
		var screen = $('#loading-screen');
	    configureLoadingScreen(screen);
	    $.get('http://jsonplaceholder.typicode.com/posts')
             .done(function(result){

             })
             .fail(function(error){

             })
	}




	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////
	///////////////////////////////REGISTRO CLIENTE/////////////////////////////////////////////////////////////////

	
	$("#guadar-registro-cliente").on('submit',function(e){
		e.preventDefault();

		/////////////Animacion/////////
		animacion_espera();



		console.log("soy tu formulario registro cliente");

		var datos_cliente=$(this).serializeArray();

		console.log("daots_formulaio",datos_cliente);

		console.log("nombre_cliente",datos_cliente[0].value);
		console.log("apellido_cliente",datos_cliente[1].value);
		console.log("correo_cliente",datos_cliente[2].value);
		console.log("password_cliente",datos_cliente[3].value);
		console.log("password_cliente_confirmacion",datos_cliente[4].value);

        var nombre_validar=datos_cliente[0].value;
        var apellido_validar=datos_cliente[1].value;
        var correo_validar=datos_cliente[2].value;
        var password_validar=datos_cliente[3].value;
        var password_validar_confirmacion=datos_cliente[4].value;

        var bandera_nombre=true;
        var bandera_apellido=true;
        var bandera_correo=true;
        var bandera_password=true;

        var bandera_password_coinciden=true;

        /////////////////////////////CONFIRMAR SI EL PASSWORD SON LOS MISMOS///////////////////////
        /////////////////////////////CONFIRMAR SI EL PASSWORD SON LOS MISMOS///////////////////////
        /////////////////////////////CONFIRMAR SI EL PASSWORD SON LOS MISMOS///////////////////////
        if(password_validar==password_validar_confirmacion){
        	console.log("SI SON IGAULES");
        	$(".mensaje_contraseña").html('<p style="color: green">Si Coinciden los password</p>');
        	bandera_password_coinciden=true;
        }else{
        	console.log("NO SON IGAULES");
        	$(".mensaje_contraseña").html('<p style="color: red">Los password no Coinciden</p>');
        	bandera_password_coinciden=false;
        }


        ////////////////////////VALIDAR CAMPOS VACIOS nombre y apellido, correo y contraseña ////////////////
        ////////////////////////VALIDAR CAMPOS VACIOS nombre y apellido, correo y contraseña ////////////////
        ////////////////////////VALIDAR CAMPOS VACIOS nombre y apellido, correo y contraseña ////////////////
        ////////////////////////VALIDAR CAMPOS VACIOS nombre y apellido, correo y contraseña ////////////////
        if(validar_campos_vacio(nombre_validar)!=true){///nombre
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El nombre esta vacio ',
				  footer: 'Debes completar el campo'
				})

        	bandera_nombre=false;
        }

        if(validar_campos_vacio(apellido_validar)!=true){///apellido
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El apellido esta vacio ',
				  footer: 'Debes completar el campo'
				})
        	bandera_apellido=false;
        }

        if(validar_campos_vacio(correo_validar)!=true){///correo
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El correo esta vacio ',
				  footer: 'Debes completar el campo'
				})
        	bandera_correo=false;
        }

        if(validar_campos_vacio(password_validar)!=true){///password
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El password esta vacio ',
				  footer: 'Debes completar el campo'
				})
        	bandera_password=false;
        }




        /////////////////////////// BANDERAS DE CONFIRMACION DE DATOS SIN VACIO//////////////////////
        /////////////////////////// BANDERAS DE CONFIRMACION DE DATOS SIN VACIO//////////////////////
        /////////////////////////// BANDERAS DE CONFIRMACION DE DATOS SIN VACIO//////////////////////
        /////////////////////////// BANDERAS DE CONFIRMACION DE DATOS SIN VACIO//////////////////////
        if(bandera_nombre==true && bandera_apellido==true && bandera_correo==true && bandera_password==true && bandera_password_coinciden==true){
	        ////////////////////////////VALIDAR CORREO//////////////////////////
	        ////////////////////////////VALIDAR CORREO//////////////////////////
	        ////////////////////////////VALIDAR CORREO//////////////////////////
	        ////////////////////////////VALIDAR CORREO//////////////////////////
	        if(validar_email(correo_validar)==true){//true

	        	/////////////si es true el correo es valido
	        	/////////////si es true el correo es valido
	        	/////////////si es true el correo es valido
					$.ajax({
						type:$(this).attr('method'),
						data:datos_cliente,
						url:$(this).attr('action'),
						dataType:'json',//json
						success:function(data){
							var resultado_proveedor=data;
							console.log(data);
							if(resultado_proveedor.respuesta=='exito'){
								swal(
									  'Registro Exitoso!'+resultado_proveedor.nombre,
									  'Correo ! '+resultado_proveedor.email,
									  'success'
									)

								setTimeout(function(){
									window.location.href='vista/admin_cliente_area.php';
								},2000);//tiempo de espera
								

							}else{

								if(resultado_proveedor.respuesta=='error' && resultado_proveedor.peligro=='estas_intenado_jakearme_puto' ){
									console.log("Ubo un error esta ingresandoc aratetres no aptos");
									swal({
									  type: 'error',
									  title: 'Oops...',
									  text: 'Estas ingresando cadigo maligno o caracteres no permitidos',
									  footer: '<a href>Ingresastes correctamente lo datos?</a>'
									})

								}else{///entonces el correo esta repetido
									console.log("Ubo un error el correo esta repetidoo ya existe");
									swal({
									  type: 'error',
									  title: 'Oops...',
									  text: 'Este usuario ya existe con este correo, prueba con otro',
									  footer: 'Olvidastes tu cuenta o tu contraseña? Escribe a nuestro Wassap o Facebook'
									})
									
								}
							}
						}
					});

	        }else{
	        	//////////////correo no valido quieren jakear
	        	//////////////correo no valido quieren jakear
	        	//////////////correo no valido quieren jakear
	        	swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Este correo no es valido ',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
	        }

        }
        




	});

	//////////////////////////////////EDITAR CLIENTE//////////////////////////////////
	//////////////////////////////////EDITAR CLIENTE//////////////////////////////////
	//////////////////////////////////EDITAR CLIENTE//////////////////////////////////
	//////////////////////////////////EDITAR CLIENTE//////////////////////////////////
	//////////////////////////////////EDITAR CLIENTE//////////////////////////////////
		$("#editar-registro-cliente").on('submit',function(e){
		e.preventDefault();
		console.log("soy tu formulario editar");

		var datos_cliente=$(this).serializeArray();
		console.log("daots_formulaio",datos_cliente);

		$.ajax({
			type:$(this).attr('method'),
			data:datos_cliente,
			url:$(this).attr('action'),
			dataType:'json',//json
			success:function(data){
				var resultado_proveedor=data;
				console.log(data);

				//////////////////mensaje si se cambio el password
				if(resultado_proveedor.respuesta=='exito'){

					
						swal(
							  'Registro Editado !'+resultado_proveedor.nombre_actual+" "+resultado_proveedor.apellido_actual,
							  ' Existosamente ! ',
							  'success'
							)

						setTimeout(function(){
							//window.location.href='admin_area.php';
						},2000);//tiempo de espera
						
					

				}else{
					console.log("Ubo un error");
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Revise bien los datos ingresado!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})

				}
			}
		});


	});



	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////
	///////////////////////////////////   LOGIN      CLIENTE//////////////////////////////////////////////////////////

	$('#login-cliente').on('submit',function(e){
		e.preventDefault();
		////////////////ANIMACION ///////////////////
		/////////////Animacion/////////
		/*animacion_espera();*/


		animacion_espera();
		
		console.log("soy login usuario");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();

		///////////////////////////VERIFIACION DEL CORREO///////////////////
		///////////////////////////VERIFIACION DEL CORREO///////////////////
		///////////////////////////VERIFIACION DEL CORREO///////////////////
		console.log(datos);//imprimr los valores
	    console.log("correo",datos[0].value);
	    console.log("password",datos[1].value);
        var correo_validar=datos[0].value;
        var password_validar=datos[1].value;
        console.log("Longitud del password",password_validar.length);
        console.log("Longitud del correo",correo_validar.length);


        ////////////////////////////VALIDAR SI LO DATOS LLEGAN VACIOS////////////
        ////////////////////////////VALIDAR SI LO DATOS LLEGAN VACIOS////////////
        ////////////////////////////VALIDAR SI LO DATOS LLEGAN VACIOS////////////
        if(validar_campos_vacio(correo_validar)==true && validar_campos_vacio(password_validar)==true){

        	
        	//////////////////////VALIDAR LONGITUD DE CAMPOS///////////////////
        	//////////////////////VALIDAR LONGITUD DE CAMPOS///////////////////
        	//////////////////////VALIDAR LONGITUD DE CAMPOS///////////////////

        	if(validar_longitude_correo(correo_validar)==true && validar_longitude_password(password_validar)==true){

			       	if(validar_email(correo_validar)==true){
			       		///////////////////SI EL CORREO ES VALIDO O TRUE ACCEDER
			       		///////////////////SI EL CORREO ES VALIDO O TRUE ACCEDER
			       		///////////////////SI EL CORREO ES VALIDO O TRUE ACCEDER
								$.ajax({
									type:$(this).attr('method'),
									data:datos,
									url:$(this).attr('action'),
									dataType:'json',//json

									success:function(data){
										console.log(data);//el usuario si existe
										var resultado_login=data;
										console.log("respuesst= :",resultado_login.respuesta);
										if(resultado_login.respuesta=='respuesta_exitosa'){
											swal(
												  'Hola:  !'+resultado_login.usuario,
												  'Bienvenido a ProEditClub.com ! ',
												  'success'
												)
											setTimeout(function(){
											window.location.href='Vista/admin_cliente_area.php';
											},2000);//tiempo de espera
										}else{
											swal({
											  type: 'error',
											  title: 'Oops...',
											  text: 'Revisa Tu Contraseña o tu Nombre!',
											  footer: 'Olvidastes tu Contraseña? Escribe en linea a nuestro Wassap o Facebook'
											})
										}
									}
								});

			       	}else{
			       		///////////////////EL CORREO NO ES VALIDO NO PERMITIR ACCEDER
			       		///////////////////EL CORREO NO ES VALIDO NO PERMITIR ACCEDER
			       		///////////////////EL CORREO NO ES VALIDO NO PERMITIR ACCEDER
			       		///////////////////EL CORREO NO ES VALIDO NO PERMITIR ACCEDER
			       		console.log("EL CORREO NO ES VALIDO");
			       		swal({
							  type: 'error',
							  title: 'Oops...',
							  text: 'Correo no valido!',
							  footer: 'Olvidastes tu Contraseña? Escribe en linea a nuestro Wassap o Facebook'
							})
			       	}
        		
        	}
        	else{
        	///fin del if de longitud de los campos
        	///fin del if de longitud de los campos
        	///fin del if de longitud de los campos
        	///fin del if de longitud de los campos
        		console.log("LAS LONGITUD ES MUY LARGA");
        		swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'La Contraseña o el Correo son demasiado largo verifica tus datos!',
					  footer: 'Olvidastes tu Contraseña? Escribe en linea a nuestro Wassap o Facebook'
					})
        	}


        }///////FIN DEL IF validar campos vacios
        ///////FIN DEL IF validar campos vacios
        ///////FIN DEL IF validar campos vacios
        ///////FIN DEL IF validar campos vacios
        else{
        	console.log("LOS CAMPOS ESTAN VACIOS");
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'El Password o el Correo estan vacios debes COMPLETAR!',
				  footer: 'Olvidastes tu Contraseña? Ayuda en linea Wassap o Facebook'
				})
        }



        



	});





	///////////////////////////////////RECARGA CLIENTE///////////////////////////////
	///////////////////////////////////RECARGA CLIENTE///////////////////////////////
	///////////////////////////////////RECARGA CLIENTE///////////////////////////////
	///////////////////////////////////RECARGA CLIENTE///////////////////////////////

	$('#id-recarga').on('submit',function(e){
		e.preventDefault();
		console.log("soy la recarga");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		//console.log(datos);//imprimr los valores
		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json

			success:function(data){
				console.log(data);//el usuario si existe
				var resultado_recarga=data;
				console.log("respuesta= :",resultado_recarga.respuesta);
				var id_cliente=resultado_recarga.id_cliente;
				if(resultado_recarga.respuesta=='exito'){
					swal(
						  'Recarga Efectuada de: '+resultado_recarga.monto,
						  ' Transaccion Efectuada con Exito! ',
						  'success'
						)
					setTimeout(function(){
						//window.location.href='recarga.php?id='+id_cliente;
					},1000);//tiempo de espera
				}else{
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'No se Puede Realizar la Recarga!',
					  footer: '<a href> Revisar ajax_cliente o modelo_proveedor?</a>'
					})
				}
			}
		});
	});


	/////////////////////////////////BORRAR DEFINITIVO/////////////////////////////////
	/////////////////////////////////BORRAR DEFINITIVO/////////////////////////////////
	/////////////////////////////////BORRAR DEFINITIVO/////////////////////////////////


// este caso es x que no uno un formulario aqui enviio los datos desde ajax
// cuando hay un formulario el formulario lo envia a lo datos
	$('.borrar_registro_cliente').on('click',function(e){
		console.log("soy borrar cliente");
		e.preventDefault();// es para q cuando haga click no brinque 
		var id=$(this).attr('data-id');
		var tipo=$(this).attr('data-tipo');// pueden venir n tipo de dara tipo
		console.log("ID :"+ id);
		console.log("Tipo: "+ tipo);
				
		//BOTON DE ALERTA
		swal({
		  title: 'Estás seguro?',
		  text: "No podrass revertir esto!",
		  type: 'warning',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: 'Si, Eliminar!'
		}).then((result) => {
		  if (result.value) {

				$.ajax({
					type:'post',// si no hay formulario entonces seria por pos
					data:{
						//aqui envio los datos al servidor
						'id':id,
						'registro':'eliminar'

					},
						url:'modelo_'+tipo+'.php',// mando al servidor con la opcion que sea(modelo_proveedor.php)
						success:function(data){// si el llamado es correcto nos regresa uno datos
						console.log(data);// me regresa un string y solo con convierto
						var resultado=JSON.parse(data);// lo convierto en objeto
						console.log(resultado);
						//impirmir
						console.log("Todo el resultado :",resultado.respuesta);
						console.log("EL bojeto ahora el id :",resultado.id_producto);
						/*console.log("EL ID EN JSON ES id :"+resultado.id_eliminado);*/
						/*			console.log("EL bojeto ahora el id :"+resultado.id_eliminado);*/
						if(resultado.respuesta=='exito'){
						jQuery('[data-id="'+resultado.id_producto +'"]').parents('tr').remove();	

						}else{// si no se puede elimnar presenta este mensaje
							// presenta eset mensaje si no se elimina de la base de datos
							swal({
							  type: 'error',
							  title: 'Oops...',
							  text: 'Algo salió mal!',
							  footer: '<a href>Why do I have this issue?</a>'
							})
						}				
					}
				});/// fin ajaxa
		    swal(// si se elimno presenta el mensaje de confirmacion

		      'Eliminado!',
		      'Tu archivo ha sido eliminado. id_cancion',
		      'success'
		    )
		  }
		})

			
	});



	//////////////////////////////////VALIDAR CORREO//////////////////////
	//////////////////////////////////VALIDAR CORREO//////////////////////
	//////////////////////////////////VALIDAR CORREO//////////////////////
	//////////////////////////////////VALIDAR CORREO//////////////////////
	//////////////////////////////////VALIDAR CORREO//////////////////////
	function validar_email( email ){
    var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email) ? true : false;
	}

	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR LONGITUD DE CORREO Y PASSWORD////////////////////
	function validar_longitude_correo(correo_longitud){
		if(correo_longitud.length<=40){
    		///////////////////////CORREO MUY LARGO/////////////
    		///////////////////////CORREO MUY LARGO/////////////
    		///////////////////////CORREO MUY LARGO/////////////
    		///////////////////////CORREO MUY LARGO/////////////
    	return true;

    	}else{
    		return false;
    	}
	}


	function validar_longitude_password(password_longitud){
		if(password_longitud.length<=16){

		///////////////////////PASSWORD MUY LARGO/////////////
		///////////////////////PASSWORD MUY LARGO/////////////
		///////////////////////PASSWORD MUY LARGO/////////////
		///////////////////////PASSWORD MUY LARGO/////////////
		return true;

        }else{
        	return false;
        }

	}


	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////
	////////////////////////////////////////VALIDAR CAMPOS VACIOS DE CORREO Y PASSWORD////////////////////

	function validar_campos_vacio(campo_vacio){
		    if(campo_vacio==""){
        	/////////////////LOS CAMPOS ESTAN VACIOS DEBES COMPLETAR///////////
        	/////////////////LOS CAMPOS ESTAN VACIOS DEBES COMPLETAR///////////
        	/////////////////LOS CAMPOS ESTAN VACIOS DEBES COMPLETAR///////////
        	return false;

        }else{
        	return true;
        }
	}










//});// fin document
