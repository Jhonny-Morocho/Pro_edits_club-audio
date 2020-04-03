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

	
	function animacion(){
		var screen = $('#loading-screen');
	    configureLoadingScreen(screen);
	    $.get('http://jsonplaceholder.typicode.com/posts')
             .done(function(result){

             })
             .fail(function(error){

             })
	}
	



	$('#id_filtrar').on('submit',function(e){

		e.preventDefault();

		////////////////ANIMACION ///////////////////
		////////////////ANIMACION ///////////////////
/*		animacion();*/

		console.log("soy el botn del filtro");
		var dato=$(this).serializeArray();
		console.log(dato);
		/*$('#loading-screen').remove();*/
		//removemos el nodo del tbdy
		$('#contenedor_filtro').remove();//removemos todo el tbody con los tr inlcuyendo REMUEVO DESDE DONDE IUNIIA LA TABLA
/*		$('#query-script-menu').remove();*/
	/*	$('#mensaje').remove();*/
		//creamo un nuevo nodo dspues de remver el tbody 

			$.ajax({
			type:$(this).attr('method'),
			data:dato,
			url:$(this).attr('action'),
			dataType:'text',//json
			success:function(data){
			console.log(data);

			$("#cont_main").append("<div id='contenedor_filtro'></div>");
		/*	$("#cont_main").append("<div id='loading-screen' style='width: 100%; display: none;'><img src='Vista/img_dj/spinning-circles.svg'></div>");*/
			$("#contenedor_filtro").append(data);

			}
		});
	});
	

