<?php 
	include_once'bd_conexion.php';
	date_default_timezone_set('America/Guayaquil');
    $fecha_actual=date("Y-m-d");


	/////////////////////////////////////////AGREGAR CANCION//////////////////////
	/////////////////////////////////////////AGREGAR CANCION//////////////////////
	/////////////////////////////////////////AGREGAR CANCION//////////////////////
	/////////////////////////////////////////AGREGAR CANCION//////////////////////

	if(@$_POST['registro_cancion']=='nuevo'){

		$id_genero=$_POST['id_genero'];
		$enlace_descarga=$_POST['enlace_descarga'];
		$id_proveedor=$_POST['id_proveedor'];
		$activo=1;
		$dolares=$_POST['dolares'];
		$centavos=$_POST['centavo'];
		$precio=$dolares.".".$centavos;
		
		//trabajamo con archivos

		/*$respuesta=array('post'=> $_POST , 
							'file'=> $_FILES );*/
		/*die(json_encode($_POST));*/

		$directorio="../biblioteca/";// la direecion donde quiero q se guarde

		if(!is_dir($directorio)){// revisamos si el directoro exista
			//si no existe crea un direectorio
			mkdir($directorio,0755,true);//(entonce crealo /dale los permisso/ y aslo recursivo)// siempre en un directorio para la web
		}
		// esto datos los tomo cuando imprime x consola el objeto
		if(move_uploaded_file($_FILES['archivo_musica']['tmp_name'], $directorio.$_FILES['archivo_musica']['name'])){
			// para acceder al archiv q se alamceno con el siguiente comando
			$musica_url=$_FILES['archivo_musica']['name'];
			$musica_resultado="Se cargo correctameten";
		}else{
			$respuesta=array('respuesta'=>error_get_last());// imprime el ultimo error que haya registrado al intentar subi este archivo
		}


		try{
		$stmt=$conn->prepare("INSERT INTO productos (
			precio, url_descarga,url_directorio, id_biblioteca,id_proveedor,activo,fecha_producto) VALUES(?,?,?,?,?,?,?)");

			$stmt->bind_param("sssiiis",
				$precio,$enlace_descarga,$musica_url,$id_genero,$id_proveedor,
				$activo,$fecha_actual);
			$stmt->execute();
			$id_insertado=$stmt->insert_id;

			if ($stmt->affected_rows) {
				$respuesta=array(
				'respuesta'=>'exito',
				'id_insertado'=>$id_insertado,
				'resultado_cancion'=>$musica_resultado
				);

			}else{
				$respuesta=array(
					'respuesta'=>'error'
				);
			}
			$stmt->close();
			$conn->close();
		} catch (Exception $e) {
			$respuesta=array('respuesta'=> $e->getMessage());
		}

		die(json_encode($respuesta));
	}// fin  ingresar produto


	///////////////////////////////////////////EDITAR PRODUCTOS/////////////////////
	///////////////////////////////////////////EDITAR PRODUCTOS/////////////////////
	///////////////////////////////////////////EDITAR PRODUCTOS/////////////////////
	///////////////////////////////////////////EDITAR PRODUCTOS/////////////////////
	///////////////////////////////////////////EDITAR PRODUCTOS/////////////////////

	if(@$_POST['editar_cancion']=='edicion-cancion'){
		/*var_dump($_POST);*/
		/*die(json_encode($_POST));*/

		$id_genero=$_POST['id_genero'];
		$enlace_descarga=$_POST['enlace_descarga'];
		$id_producto=$_POST['id_producto'];
		$activo=1;
		$dolares=$_POST['dolares'];
		$centavos=$_POST['centavo'];
		$precio=$dolares.".".$centavos;

		$directorio="../biblioteca/";// la direecion donde quiero q se guarde

		if(!is_dir($directorio)){// revisamos si el directoro exista
			//si no existe crea un direectorio
			mkdir($directorio,0755,true);//(entonce crealo /dale los permisso/ y aslo recursivo)// siempre en un directorio para la web
		}
		// esto datos los tomo cuando imprime x consola el objeto
		if(move_uploaded_file($_FILES['archivo_musica']['tmp_name'], $directorio.$_FILES['archivo_musica']['name'])){
			// para acceder al archiv q se alamceno con el siguiente comando
			$musica_url=$_FILES['archivo_musica']['name'];
			$musica_resultado="Se cargo correctameten";
		}else{
			$respuesta=array('respuesta'=>error_get_last());// imprime el ultimo error que haya registrado al intentar subi este archivo
		}


		//PREGUNTO SI HAY CAMBIO ARCHIVO DE MUSICA NUEVO//
		//PREGUNTO SI HAY CAMBIO ARCHIVO DE MUSICA NUEVO//
		//PREGUNTO SI HAY CAMBIO ARCHIVO DE MUSICA NUEVO//
		if(isset($musica_url)){
			//se va a editar tambien el archivo de audio
			try{
			$stmt=$conn->prepare("UPDATE productos SET
				precio=?, url_descarga=?,url_directorio=?, id_biblioteca=?
				WHERE id=?
				");

				$stmt->bind_param("sssii",
					$precio,$enlace_descarga,$musica_url,$id_genero,$id_producto);
				$stmt->execute();
				$id_insertado=$stmt->insert_id;

				if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'id_insertado'=>$id_insertado,
					'id_producto'=>$id_producto,
					'resultado_cancion'=>$musica_resultado,
					'resultado_cancion'=>'El archivo de Audio fue cambiado'
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error dato-archivo '
					);
				}
				$stmt->close();
				$conn->close();
			} catch (Exception $e) {
				$respuesta=array('respuesta'=> $e->getMessage());
			}
			
		}else{
			////////////solo los datos de informacion del archivo ser van a editar
			////////////solo los datos de informacion del archivo ser van a editar
			////////////solo los datos de informacion del archivo ser van a editar
			try{
				
			$stmt=$conn->prepare("UPDATE productos SET
				precio=?, url_descarga=?, id_biblioteca=? 
				WHERE id=?  ");

				$stmt->bind_param("ssii",
					$precio,$enlace_descarga,$id_genero,$id_producto);
				$stmt->execute();
				$id_insertado=$stmt->insert_id;

				if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'id_insertado'=>$id_insertado,
					'id_producto'=>$id_producto,
					'resultado_cancion'=>'El archivo de Audio es el Mismo'
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error-solo los datos '
					);
				}
				$stmt->close();
				$conn->close();
			} catch (Exception $e) {
				$respuesta=array('respuesta'=> $e->getMessage());
			}
		}

		die(json_encode($respuesta));

	}// fin  ingresar produto


	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////
	///////////////////////////ELIMNAR PRODUCTOS BORRADO LOGICO//////////////////


	if(@$_POST['registro']=='eliminar'){
		//die(json_encode($_POST));// die imprime un mensaje del scrip


		try{
			$id_borrar=$_POST['id'];
			$stmt=$conn->prepare("UPDATE productos SET activo=? WHERE id=?
				");
			$estado=0;
				$stmt->bind_param("ii",$estado,$id_borrar);
				$stmt->execute();

				$id_insertado=$stmt->insert_id;

				if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'id_insertado'=>$id_insertado,
					'id_producto'=>$id_borrar,
					'resultado_cancion'=>'Borrado_Logico'
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error'
					);
				}
				$stmt->close();
				$conn->close();
			} catch (Exception $e) {
				$respuesta=array('respuesta'=> $e->getMessage());
			}
		die(json_encode($respuesta));			
	}



?>

 