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




	if(localStorage.getItem("cantidad_cesta")!=null){//si lcal es diferente  a vacio
		$(".cantidad_cesta").html(localStorage.getItem("cantidad_cesta"));
		console.log($(".cantidad_cesta").html(localStorage.getItem("cantidad_cesta")));
		$(".suma_cesta").html(localStorage.getItem("suma_cesta"));
		console.log($(".suma_cesta").html(localStorage.getItem("suma_cesta")));
		
		
	}else{
		$(".cantidad_cesta").html("0");
		$(".suma_cesta").html("0");
		$(".tablita").html('<div class="well">NO EXISTE PRODUCTOS EN TU CARRITO</div>');
		$(".sumaCarrito").hide();

	}

	///-------------------------------VISUALIZAR LOS PRODUCTOS DEL CARRITO--------/////
	///-------------------------------VISUALIZAR LOS PRODUCTOS DEL CARRITO--------/////
	///-------------------------------VISUALIZAR LOS PRODUCTOS DEL CARRITO--------/////
	///-------------------------------VISUALIZAR LOS PRODUCTOS DEL CARRITO--------/////
	///-------------------------------VISUALIZAR LOS PRODUCTOS DEL CARRITO--------/////

		var array_id=[];

		var carrito_compras=[];
		var contador_carrito=1;

		console.log(localStorage.getItem("listado_Productos"));

		if(localStorage.getItem("listado_Productos")!= null){// convierto el jason en objeto para volver a llenar al carrito
				var carrito_compras=JSON.parse(localStorage.getItem("listado_Productos"));//si el local estora venia lleno o si no esta vacio
				console.log(carrito_compras);
				carrito_compras.forEach(functionForEeachCarrito);
				 
				function functionForEeachCarrito(item,index){
					/*console.log("item->: ",item.id_Producto);
					console.log("item",item);*/
					//agregamos los nodos
					$(".tablita")
					.append(
	                        '<tr>'+
	                         ' <TD>'+contador_carrito+'</TD>'+//bootn para quitar productos carrito

	                         ' <TD>'+
	                         '<button  class="quitar_Item_Carrito button_carrito btn btn-danger" id_Producto='
	                         +item.id_Producto+' precio_cancion='+item.precio+'><i class="fa fa-trash-o" aria-hidden="true"></i></button>'
	                         +'</TD>'+

	                          '<TD class="class_nombre_cancion" nombre_cancion='+item.nombre_cancion+'>'+item.nombre_cancion+'</TD>'+
	                          '<TD class="class_precio_cancion"><p classs="subtotales"><span>'+item.precio+'</span></p></TD>'+
	                        '</tr>'
	                        );

				
				contador_carrito++;
				
				}
			}else{//no esta lllenado el carrito
				$(".tablita").html('<div class="well">NO EXISTE PRODUCTOS EN TU CARRITO</div>');
				$(".sumaCarrito").hide();
		}

 	/////////////////////////AGREGAR AL CARRITO///////////////////////
 	/////////////////////////AGREGAR AL CARRITO///////////////////////
 	/////////////////////////AGREGAR AL CARRITO///////////////////////
 	/////////////////////////AGREGAR AL CARRITO///////////////////////
		
		$('.agregar-carrito').on('click',function(e){


		e.preventDefault();// es para q cuando haga click no brinque 
		var id=$(this).attr('data-id');//obtengo el id
		var nombre=$(this).attr('data-nombre');// pueden venir n nombre de dara nombre
		var precio=$(this).attr('precio');//precio

		console.log("nombre",nombre);
		console.log("id",id);
		console.log("precio",precio);

		contador_carrito=0;

		//----------------------RECUPERAR ALMACENAMIENTO DEL LOCALSOTORE CUANDO CMABIO DE PAGINA//
		
		if(localStorage.getItem("listado_Productos")==null){// 

			carrito_compras=[];
		}else{// se sighue agregando los productos
			carrito_compras.concat(localStorage.getItem("listado_Productos"));
		}

		//---agregar productos al carrito
		carrito_compras.push({"id_Producto":id,
								"nombre_cancion":nombre,
								"precio":precio
							});
		//guardo en el localstorage 
		console.log("Lisra carrito: ",carrito_compras);
		localStorage.setItem("listado_Productos",JSON.stringify(carrito_compras));//guardar en el local store
		
		//////////////////////////////////actulizar cesta carrito//////////////////////////////
		//////////////////////////////////actulizar cesta carrito//////////////////////////////
		//////////////////////////////////actulizar cesta carrito//////////////////////////////
		var cantidad_cesta=Number($(".cantidad_cesta").html())+1;//cada vez q garego un producto agrego a la cesta
		console.log($('.suma_cesta').html());
		var suma_cesta=Number($(".suma_cesta").html())+ Number(precio);
		$(".cantidad_cesta").html(carrito_compras.length);
		/*$(".suma_cesta").html(suma_cesta.toFixed(2));*/

		localStorage.setItem("cantidad_cesta",cantidad_cesta);
		localStorage.setItem("suma_cesta",suma_cesta.toFixed(2));
		swal({
		  position: 'center',
		  type: 'success',
		  title: 'Tu Cancion Selecionada es: '+nombre,
		  showConfirmButton: false,
		  timer: 3000
			})
	});



///////////////////------------Quitar productos del carrito----------------/////////////////////
///////////////////------------Quitar productos del carrito----------------/////////////////////
///////////////////------------Quitar productos del carrito----------------/////////////////////
///////////////////------------Quitar productos del carrito----------------/////////////////////

 	$(".quitar_Item_Carrito").on('click',function(){
 		//e.preventDefault();
 		/*alert("Soy el prod");*/
 		$(this).parent().parent().remove();//quitamos visualmente
 		var id_Producto=$(".button_carrito");//caputuramos todos el boton
 		var nombre_cancion=$(".class_nombre_cancion");//todos los nodos
 		//var precio_cancion=$(".class_precio_cancion");//todos los nodos
 	/*	console.log("id_cancion_ ",id_Producto);
 		console.log("nombre_cancion: ",nombre_cancion);
 		console.log(id_Producto.length);*/


 		////si ahun quedan productos volverlos agregar al carrito (LOCALSTORE)
 		////si ahun quedan productos volverlos agregar al carrito (LOCALSTORE)
 		////si ahun quedan productos volverlos agregar al carrito (LOCALSTORE)
 		carrito_compras=[]; //vacio el array para vlver a cargar el array
 		if(id_Producto.length!=0){// i su lonitud es difernete de cero

 			var contar=0;
 			var precio=0;
 			while(contar<id_Producto.length){
 				console.log("conbtar es "+contar);
 				var id_ProductoArray=$(id_Producto[contar]).attr("id_Producto");
 				var nombre_ProductoArray=$(nombre_cancion[contar]).text();//obtengo nombre cancion
 				var precio_ProductoArray=$(id_Producto[contar]).attr("precio_cancion");
 	/*			console.log("id__array",id_ProductoArray);
 				console.log("nombre_array",nombre_ProductoArray);
 				console.log("precio__array",precio_ProductoArray);*/
 				//---agregar productos al carrito
				carrito_compras.push({"id_Producto":id_ProductoArray,
										"nombre_cancion":nombre_ProductoArray,
										"precio":precio_ProductoArray
								});
 				contar++;
 				
 			}

		localStorage.setItem("listado_Productos",JSON.stringify(carrito_compras));//guardar en

				///////////////////cesta/////////////////////
				cestaCarrito(id_Producto.length);

		///////////////////////////////////////////ACTULIZAR EL PRECIO EN LA TABLA///////////////

				var subtotales_canciion=$('.class_precio_cancion p span');
				console.log(subtotales_canciion);
				var array_suma_subtotal=[];
				for(var i=0;i<subtotales_canciion.length;i++){

					var suma_array=$(subtotales_canciion[i]).html();
					array_suma_subtotal.push(Number(suma_array));
				}

				console.log(array_suma_subtotal);
				function sumaArraySubtotal(total,numero){
					return total+numero;
				}

				var sumato_toal_funcion=array_suma_subtotal.reduce(sumaArraySubtotal);//ete metodo sirve suma los valores entre sii
				console.log(sumato_toal_funcion.toFixed(2));
				//actualizo el locla tore y el hatml
				$(".suma_sub_total").html('<strong>USD $<span>'+sumato_toal_funcion.toFixed(2)+'</span></strong>');
				$(".suma_cesta").html(sumato_toal_funcion.toFixed(2));
				localStorage.setItem("suma_cesta",sumato_toal_funcion.toFixed(2));


 		}else{
 			////si ya no qquedan productos hay q remover todo 
 			////si ya no qquedan productos hay q remover todo 
 			localStorage.removeItem("listado_Productos");
 			localStorage.setItem("cantidad_cesta","0");
			localStorage.setItem("suma_cesta","0");
			//despues en el html
			$(".cantidad_cesta").html("0");
			$(".suma_cesta").html("0");
			$(".tablita").html('<div class="well">NO EXISTE PRODUCTOS EN TU CARRITO</div>');
			$(".sumaCarrito").hide();
 		}

 	});



 	//////////////////////------------------BOTON PAGAR AJAX----///////////
	//////////////////////------------------BOTON PAGAR AJAX----///////////
	//////////////////////------------------BOTON PAGAR AJAX----///////////
	//////////////////////------------------BOTON PAGAR AJAX----///////////
	$("#id_carrito_form").on('submit',function(e){
		e.preventDefault();
		////////////////ANIMACION ///////////////////
		var screen = $('#loading-screen');
	    configureLoadingScreen(screen);
	    $.get('http://jsonplaceholder.typicode.com/posts')
             .done(function(result){

             })
             .fail(function(error){

             })

		var datos_opcion_pago=$(this).serializeArray();//obtengo valores de radios

		console.log("nome_radio",datos_opcion_pago[0].name);
		console.log("value_radio",datos_opcion_pago[0].value);

		
		var class_nombre_cancion=$(".tablita .class_nombre_cancion");
		var class_precio_cancion=$(".tablita .class_precio_cancion");
		var class_id_producto=$(".tablita button");
		var class_tota_cancelar=$(".suma_sub_total .total_span").text();
		console.log("class_tota_cancelar",class_tota_cancelar);
/*		console.log("class_nombre_cancion: ",class_nombre_cancion);
		console.log("class_nombre_cancion_longitud: ",class_nombre_cancion);
		console.log("class_precio_cancion: ",class_precio_cancion);
		console.log("class_id_cancion: ",class_id_producto);*/

		///creamoss array
		var nombre_cancion_Array=[];
		var precio_cancion_Array=[];
		var id_cancion_Array=[];

		for(var i=0;i< class_id_producto.length;i++){
			 nombre_cancion_Array[i]=$(class_nombre_cancion[i]).text();
			 precio_cancion_Array[i]=$(class_precio_cancion[i]).text();
			 id_cancion_Array[i]=$(class_id_producto[i]).attr("id_Producto");
		}
		console.log(id_cancion_Array);
		console.log(nombre_cancion_Array);
		console.log(precio_cancion_Array);

		//creamos la variable data que va a enviar la informacion por ajax
		var datos=new FormData();
		datos.append("id_cancion",id_cancion_Array);//adicionamo cada valor por q es un objeto
		datos.append("nombre_cancion",nombre_cancion_Array);
		datos.append("precio_cancion",precio_cancion_Array);
		datos.append("opcion_compra",datos_opcion_pago);
		datos.append("name_radio",datos_opcion_pago[0].name);
		datos.append("value_radio",datos_opcion_pago[0].value);
		datos.append("total_cancelar",class_tota_cancelar);

		$.ajax({
			url:"Pay_Pal/paypal_controlador.php",
			method:"POST",
			data:datos,
			cache:false,
			contentType:false,
			processData:false,
			dataType:'json',//json
			success:function(respuesta){
/*				window.location="paypal/carrito_pagar.php";*/
				console.log("respuesta",respuesta);
				////////////////PREGUNTO SI EXITE UNA SESSION PARA Q PUEDA COMPRAR
				if(respuesta.respuesta_session=='no_exite_session'){
					console.log("respuesta respuesta_session=>-",respuesta.respuesta_session);
							swal(
								  'Antes de comprar Inicia tu Session en la Pagina?',
								  'Recuerda si no tienes cuenta en la pagina puedes registrarte?',
								  'question'
								)
				}else{
					console.log("en la session no presenta mensaje");
				}

				///////////ssi es admin o proveedor no puede comprar
				if(respuesta.respuesta_session=='no_cliente'){
					console.log("respuesta respuesta_session=>-",respuesta.respuesta_session);
							swal(
								  'No puedes comprar por que tu eres Administrador?',
								  'Recuerda si quieres comprar tienes que registrarte como cliente?',
								  'question'
								)
				}



				if(respuesta.respuesta=='exito'){
					/*swal('Tu solicitud ha sido  procesada')*/
						swal({
						  position: 'center',
						  type: 'success',
						  title: 'Tu solicitud ha sido  procesada Tu selecionastes ',
						  showConfirmButton: false,
						  timer: 3000
							})
					console.log(respuesta);
					window.location=respuesta.url_paypal;
				}


				/////////////////////////PAGAR CON SALDO//////////////////
				/////////////////////////PAGAR CON SALDO//////////////////
				/////////////////////////PAGAR CON SALDO//////////////////
				if(respuesta.respuesta_saldo=='saldo_disponible'){
					/*swal('Tu solicitud ha sido  procesada')*/
/*					swal({
					  position: 'center',
					  type: 'success',
					  title: 'Tu solicitud ha sido procesada cuantas con '+respuesta.total_saldo+ '$ en saldo',
					  showConfirmButton: false,
					  timer: 6000
						})*/
					console.log(respuesta);

		
						swal({
						  title: 'Confirma la adquisición de los Rmx ?',
						  text: "Recuerda sera debitado de tu saldo ! cuentas con "+respuesta.total_saldo+ '$ en saldo',
						  type: 'warning',
						  showCancelButton: true,
						  confirmButtonColor: '#3085d6',
						  cancelButtonColor: '#d33',
						  confirmButtonText: 'Si, deseo los productos!'
						}).then((result) => {
						  if (result.value) {
						    swal(
						      'Has confirmado la compra, se esta procesando tu solicitud ....!',
						      'Recuerda pudes revisar tus productos en tu session cliente .',
						      'success'
						    )
						    setTimeout(function(){
								window.location.href=respuesta.url_pago_finalizado_saldo;
							},3000);//tiempo de espera
						  }
							
						})
				}//fin if saldo diposnible
				console.log();
				if(respuesta.respuesta_saldo=='saldo_insuficiente'){
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'No cuentas con suficiente saldo para realizar esta compra! '+respuesta.total_saldo+ '$',
					  footer: 'Puedes recargas tu saldo con nostros mas informacion en nuestras redes sociales'
					})

				}

			}
		});

		 			

	});




		/////////////////////////SUMA DE TODOS LOS SUBTOTALES///////////////////////////////
	/////////////////////////SUMA DE TODOS LOS SUBTOTALES///////////////////////////////
	/////////////////////////SUMA DE TODOS LOS SUBTOTALES///////////////////////////////

	var subtotales_canciion=$('.class_precio_cancion p span');
	console.log(subtotales_canciion);
	var array_suma_subtotal=[];

		for(var i=0;i<subtotales_canciion.length;i++){

		var suma_array=$(subtotales_canciion[i]).html();
		array_suma_subtotal.push(Number(suma_array));
	}

	console.log(array_suma_subtotal);
	function sumaArraySubtotal(total,numero){
		return total+numero;
	}

	var sumato_toal_funcion=array_suma_subtotal.reduce(sumaArraySubtotal);//ete metodo sirve suma los valores entre sii
	console.log(sumato_toal_funcion);
	$(".cantidad_cesta").html(sumato_toal_funcion);

	$(".suma_sub_total").html('<strong>USD $<span  class="total_span">'+sumato_toal_funcion.toFixed(2)+'</span></strong>');
	$(".suma_cesta").html(sumato_toal_funcion.toFixed(2));
	localStorage.setItem("suma_cesta",sumato_toal_funcion.toFixed(2));

	cestaCarrito(subtotales_canciion.length);
	


	////////////////////////////////////ACTULIZAR CESTA AL CAMBIAR CANTIDAD///////////////////////////////////
	////////////////////////////////////ACTULIZAR CESTA AL CAMBIAR CANTIDAD///////////////////////////////////
	////////////////////////////////////ACTULIZAR CESTA AL CAMBIAR CANTIDAD///////////////////////////////////
	////////////////////////////////////ACTULIZAR CESTA AL CAMBIAR CANTIDAD///////////////////////////////////

	function cestaCarrito(cantidad_productos){
		//////////////////preguntamoos si hay productos en el carrito/////////////

		if(cantidad_productos!=0){
			console.log("cantidad_productos ",cantidad_productos);
			localStorage.setItem("cantidad_cesta",cantidad_productos);
			$(".cantidad_cesta").html(cantidad_productos);

		}
	}	
