/*$(document).ready(function(){*/

	console.log("SDoy la Bliblioteca");



	/*------------------------------AGREGAR BIBLIOTECA----------------------*/
	/*------------------------------AGREGAR BIBLIOTECA----------------------*/
	/*------------------------------AGREGAR BIBLIOTECA----------------------*/
	/*------------------------------AGREGAR BIBLIOTECA----------------------*/
	$('#crear-biblioteca').on('submit',function(e){
		e.preventDefault();
		console.log("Click en crar BIBLIOTECA");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		console.log(datos);
		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',
			success:function(data){
				console.log(data);
				var resultado=data;
				console.log(data.respuesta);
				if(resultado.respuesta==('exito')){
					swal(
						  'Registro Exitoso!'+resultado.genero,
						  'Nuevo Genero ingresado A la Bliblioteca! ',
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



///////////////////////////////////EDITAR BIBLIOTECA/////////////////////////////////////////
///////////////////////////////////EDITAR BIBLIOTECA/////////////////////////////////////////
///////////////////////////////////EDITAR BIBLIOTECA/////////////////////////////////////////
///////////////////////////////////EDITAR BIBLIOTECA/////////////////////////////////////////
///////////////////////////////////EDITAR BIBLIOTECA/////////////////////////////////////////

	$('#editar-bibloteca').on('submit',function(e){
		e.preventDefault();
		console.log("Click en editar BIBLIOTECA");
		// obtnemos los datos del formulario
		var datos=$(this).serializeArray();
		console.log(datos);
		$.ajax({
			type:$(this).attr('method'),
			data:datos,
			url:$(this).attr('action'),
			dataType:'json',//json
			success:function(data){
				console.log(data);
				var resultado=data;
				console.log(data.respuesta);
				if(resultado.respuesta==('exito')){
					swal(
						  'Registro Exitoso!'+resultado.genero,
						  'Genero Actualizado A la Bliblioteca! ',
						  'success'
						)
				}else{
					console.log("Ubo un error");
					swal({
					  type: 'error',
					  title: 'Oops...',
					  text: 'Revise bien los datos ingresado o es el mismo datos no lo as cambiado!',
					  footer: '<a href>Ingresastes correctamente lo datos?</a>'
					})
				}
			}
		});
	});


//});// fin document


