/*$(document).ready(function(){*/


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


	/*---------------------AGREGAR PROVEEDOR----------------------*/
	/*---------------------AGREGAR PROVEEDOR----------------------*/
	/*---------------------AGREGAR PROVEEDOR----------------------*/
	/*---------------------AGREGAR PROVEEDOR----------------------*/

	$('#agregar-proveedor').on('submit',function(e){
	e.preventDefault();
	console.log("Click en agregar proveeedor");
	// obtnemos los datos del formulario
	var datos=$(this).serializeArray();
	console.log(datos);

		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json
			success:function(data){
				var resultado_proveedor=data;
				console.log(data);
				console.log(resultado_proveedor.respuesta);

				var nombre=resultado_proveedor.nombre;
				var pellido=resultado_proveedor.apellido;
				var correo=resultado_proveedor.correo;
				var apodo=resultado_proveedor.apodo;
				var id=resultado_proveedor.id;
				if(resultado_proveedor.respuesta=='exito'){
					swal(
						  'Registro Exitoso! '+nombre+" "+pellido+" Apodo "+apodo,
						  'Correo ! '+correo +"id :"+id,
						  'success'
						)
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




	/*---------------------EDITAR PROVEEDOR----------------------*/
	/*---------------------EDITAR PROVEEDOR----------------------*/
	/*---------------------EDITAR PROVEEDOR----------------------*/
	/*---------------------EDITAR PROVEEDOR----------------------*/
	$('#editar-proveedor').on('submit',function(e){
	e.preventDefault();
	console.log("Click en editar proveeedor");
	// obtnemos los datos del formulario
	var datos=$(this).serializeArray();
	console.log(datos);

		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json
			success:function(data){
				var resultado_proveedor=data;
				console.log(data);
				console.log(resultado_proveedor.respuesta);
				var nombre=resultado_proveedor.nombre;
				var pellido=resultado_proveedor.apellido;
				var correo=resultado_proveedor.correo;
				var apodo=resultado_proveedor.apodo;
				var password=resultado_proveedor.password;
				if(resultado_proveedor.respuesta=='exito'){
					swal(
						  'Registro Exitoso! '+nombre+" "+pellido+" "+password+" Apodo "+apodo,
						  'Correo ! '+correo,
						  'success'
						)
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

/*------------------------LOGIN PROVEEDOR-----------------------*/
/*------------------------LOGIN PROVEEDOR-----------------------*/
/*------------------------LOGIN PROVEEDOR-----------------------*/
/*------------------------LOGIN PROVEEDOR-----------------------*/
		$('#login-admin').on('submit',function(e){
		e.preventDefault();

		////////////////ANIMACION ///////////////////
		var screen = $('#loading-screen');
	    configureLoadingScreen(screen);
	    $.get('http://jsonplaceholder.typicode.com/posts')
             .done(function(result){

             })
             .fail(function(error){

             })
             
		console.log("Click en el login");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		console.log(datos);//imprimr los valores



        ////////////////////////////VALIDAR CORREO//////////////////////////
        ////////////////////////////VALIDAR CORREO//////////////////////////
        ////////////////////////////VALIDAR CORREO//////////////////////////
        ////////////////////////////VALIDAR CORREO//////////////////////////
		console.log(datos[0].value);
        var correo_validar=datos[0].value;

        if(validar_email(correo_validar)==true){
        	/////////////SI EL CORREO ES CORRECTO DEJAR ACCEDER
        	/////////////SI EL CORREO ES CORRECTO DEJAR ACCEDER
        	/////////////SI EL CORREO ES CORRECTO DEJAR ACCEDER



						$.ajax({
							type:$(this).attr('method'),
							data:datos,
							url:$(this).attr('action'),
							dataType:'json',//json

							success:function(data){
								console.log(data);//el usuario si existe
								var resultado_login=data;
								console.log(resultado_login.respuesta);
								if(resultado_login.respuesta=='respuesta_exitosa'){
									swal(
										  'Hola:  !'+resultado_login.usuario,
										  'Bienvenido a ProEditsClub.com ! ',
										  'success'
										)
									setTimeout(function(){
										window.location.href='Vista/admin_area.php';
									},2000);//tiempo de espera
								}else{
									swal({
									  type: 'error',
									  title: 'Oops...',
									  text: 'Revisa Tu Contraseña o tu Nombre!',
									  footer: '<a href>Ingresastes correctamente lo datos?</a>'
									})
								}
							}
						});

        }else{
        	////////////////////CORREO FALSO NO DEJAR ENTRAR//////////////
        	////////////////////CORREO FALSO NO DEJAR ENTRAR//////////////
        	////////////////////CORREO FALSO NO DEJAR ENTRAR//////////////
        	swal({
				  type: 'error',
				  title: 'Oops...',
				  text: 'Correo no valido!',
				  footer: '<a href>Ingresastes correctamente lo datos?</a>'
				})

        }


	});


/*___________________________ELIMINAR REGISTRO_________________________________*/

// este caso es x que no uno un formulario aqui enviio los datos desde ajax
// cuando hay un formulario el formulario lo envia a lo datos
	$('.borrar_registro_proveedor').on('click',function(e){
		console.log("soy borrar mi administrador");
		e.preventDefault();// es para q cuando haga click no brinque 
		var id=$(this).attr('data-id');
		var tipo=$(this).attr('data-tipo');// pueden venir n tipo de dara tipo
/*		console.log("ID :"+ id);
		console.log("Tipo: "+ tipo);*/
				
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
						'registro':'eliminar',
						'nombre':'hola mundo'

					},
						url:'modelo_'+tipo+'.php',// mando al servidor con la opcion que sea(modelo_proveedor.php)
						success:function(data){// si el llamado es correcto nos regresa uno datos
						//console.log(data);// me regresa un string y solo con convierto
						var resultado=JSON.parse(data);// lo convierto en objeto
						console.log("Todo el resultado :"+resultado);
						console.log("EL bojeto ahora el id :"+resultado.soy_Obj);
						console.log("EL ID EN JSON ES id :"+resultado.id_eliminado);
						/*			console.log("EL bojeto ahora el id :"+resultado.id_eliminado);*/
						if(resultado.respuesta=='exito'){
						jQuery('[data-id="'+resultado.id_eliminado +'"]').parents('tr').remove();	

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
		      'Tu archivo ha sido eliminado.',
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




//});// fin document


