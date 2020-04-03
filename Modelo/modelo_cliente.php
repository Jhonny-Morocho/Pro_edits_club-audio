<?php 

	//llamo a la base de datos
	//////////////////////FUNCION PARA VALIDAD SOLO LETRAS//////////////
	//////////////////////FUNCION PARA VALIDAD SOLO LETRAS//////////////
	//////////////////////FUNCION PARA VALIDAD SOLO LETRAS//////////////
	//////////////////////FUNCION PARA VALIDAD SOLO LETRAS//////////////
	include_once'bd_conexion.php';

	function solo_letras($cadena){ 
	$permitidos = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "; 
		for ($i=0; $i<strlen($cadena); $i++){ 
			if (strpos($permitidos, substr($cadena,$i,1))===false){ 
			//no es válido; 
			return false; 
			} 
		}  
		//si estoy aqui es que todos los caracteres son validos 
		return true; 
	}  


		////////////////////////////////REGISTRO DE NUEVO USUARIO///////
		////////////////////////////////REGISTRO DE NUEVO USUARIO///////
		////////////////////////////////REGISTRO DE NUEVO USUARIO///////
		////////////////////////////////REGISTRO DE NUEVO USUARIO///////
		
	if(@$_POST['registro-nuevo-cliente']=='nuevo_cliente'){
		$nombre_cliente=htmlspecialchars($_POST['nombre_cliente']);
		$apellido_cliente=htmlspecialchars($_POST['apellido_cliente']);
		$email_cliente=htmlspecialchars($_POST['email_cliente']);
		$password_cliente=htmlspecialchars($_POST['password_cliente']);
		$tipo_usuario="Cliente";
		$saldo_actual=0;

		///////////////////////COMPRUEBO SI LOS CARACTERES SON LETRAS//////////////
		///////////////////////COMPRUEBO SI LOS CARACTERES SON LETRAS//////////////
		///////////////////////COMPRUEBO SI LOS CARACTERES SON LETRAS/////////////
		$nombre_bolean=solo_letras($nombre_cliente);
		$apellido_bolean=solo_letras($apellido_cliente);

		/*die(json_encode($_POST));*/
		if($nombre_bolean==true and $apellido_bolean==true){//si son letras puedes registrarse
			
				$opciones=array(
							'cost'=>12
							);

				$password_hashed=password_hash($password_cliente,PASSWORD_BCRYPT,$opciones);

				try {

					$stmt=$conn->prepare("INSERT INTO cliente (nombre,apellido,correo,password,tipo_usuario,saldo_actual) VALUES(?,?,?,?,?,?)");

					$stmt->bind_param("ssssss",$nombre_cliente,$apellido_cliente,$email_cliente,$password_hashed,$tipo_usuario,$saldo_actual);

					$stmt->execute();

					$id_registro=$stmt->insert_id;
					if ($stmt->affected_rows) {


						if($id_registro==0){// si no hay fila o regitrso nuevo entonces no se inserto
							$respuesta=array('respuesta'=>'repetido',
											'correo_repetido'=>$email_cliente);
						}else{
							$respuesta=array(
							'respuesta'=>'exito',
							'nombre'=>$nombre_cliente,
							'tipo_usuario'=>$tipo_usuario,
							'email'=>$email_cliente,
							'id'=>$id_registro
							);
							session_start();//inicio la sesion
									$_SESSION['id_cliente']=$id_registro;
									$_SESSION['usuario']=$nombre_cliente;
									$_SESSION['tipo_proveedor']=$tipo_usuario;
									$_SESSION['apellido']=$apellido_cliente;
						}
						
					}else{
						$respuesta=array(
							'respuesta'=>'error'
						);
					}
					$stmt->close();
					$conn->close();
				} catch (Exception $e) {
					echo "Error".$e->getMessage();
				}

				die(json_encode($respuesta));

		}else{
		//////no son letras entonces quieres jakear//////
		//////no son letras entonces quieres jakear//////
		//////no son letras entonces quieres jakear//////
		//////no son letras entonces quieres jakear//////
			$respuesta=array(
							'respuesta'=>'error',
							'peligro'=>'estas_intenado_jakearme_puto'
						);
			die(json_encode($respuesta));

		}



	
	}



	////////////////////////////////LOGIN DE USUARIO///////
	////////////////////////////////LOGIN DE USUARIO///////
	////////////////////////////////LOGIN DE USUARIO///////


	if(@$_POST['login-cliente']=='login-cliente'){
		//bugeo
		//print_r($_POST);
		//die(json_encode($_POST));
		/*$usuario=$_POST['usuario'];*/
		$password=htmlspecialchars($_POST['password_cliente']);
		$correo=htmlspecialchars($_POST['email_cliente']);

		try {

	        /*include_once'funciones_admin/funciones.php';*/

			$stmt=$conn->prepare("SELECT *FROM cliente WHERE correo=?;");

			$stmt->bind_param("s",$correo);

			$stmt->execute();
			$stmt->bind_result(
								$id,$nombre_cliente,$apellido_cliente,
								$email_cliente,$password_proveedor,
								$tipo_usuario,$fecha_recarga,
								$saldo_actual);// para consultas regresa el numeor de columas importante ponerlo

			if ($stmt->affected_rows) {//
				$existe=$stmt->fetch();
				if ($existe) {
					$respuesta=array(
						'respuesta'=>'si_existe'
					);
					if(password_verify($password ,$password_proveedor)){//comprueba si la contraseña cincide con el hash
						//session par al usuario

						/*-------------INICIO LA SESSION--------------*/

						session_start();//inicio la sesion
						$_SESSION['id_cliente']=$id;
						$_SESSION['usuario']=$nombre_cliente;
						$_SESSION['tipo_proveedor']=$tipo_usuario;
						$_SESSION['apellido']=$apellido_cliente;
						$_SESSION['saldo_actual']=$saldo_actual;
						$respuesta2=
						array(
								'respuesta'=>'respuesta_exitosa',
								'usuario'=>$nombre_cliente,
								'apellido'=>$apellido_cliente,
								'id'=>$id
							);
					}else{
							$respuesta2=array(
							'respuesta'=>'respuesta_no_exitosa'
									);
					}

				}else{
					$respuesta2=array(
						'respuesta'=>'no_existe'
					);
				}
			}//if
			

			$stmt->close();
			$conn->close();

		} catch (Exception $e) {
			echo "Error".$e->getMessage();
		}

		die(json_encode($respuesta2));
		die(json_encode($respuesta));

	}


	////////////////////////------------EDITAR CLIENTE----/////////////////////////////////
	////////////////////////------------EDITAR CLIENTE----/////////////////////////////////
	////////////////////////------------EDITAR CLIENTE----/////////////////////////////////
	////////////////////////------------EDITAR CLIENTE----/////////////////////////////////
	////////////////////////------------EDITAR CLIENTE----/////////////////////////////////
	if(@$_POST['registro']=='actualizar'){
		
	    $nombre=htmlspecialchars($_POST['nombre_cliente_editar']);
	    $apellido=htmlspecialchars($_POST['apellido_cliente_editar']);
	    $email=htmlspecialchars($_POST['email_cliente_editar']);
	    $id_registro=htmlspecialchars($_POST['id_registro']);
	    $password=htmlspecialchars($_POST['password_cliente_editar']);
	    
	    /*echo "esto es editar";*/
	    /*var_dump($_POST);*/
		try {
			/*include_once'funciones_admin/funciones.php';*/
			// INSERCION DE DATOS

			//SI EL PASSWORD VIENE VACIA PUES NO ACTULIZAR Y SI VIENE LLENO ACTUALIZO
		    if ($password!="") {
				
		     	$stmt=$conn->prepare("UPDATE cliente SET 
				nombre=?, correo=? ,apellido=? WHERE id=? ");

				$stmt->bind_param("sssi",$nombre,$email,$apellido,$id_registro);

		    }
		    else{ // SI CAMBIA LA CONTRASEÑA AQUI SE ACTULIZA
	     		
				$opciones=array(
					'cost'=>12
				);

				$hash_password=password_hash($password,
								PASSWORD_BCRYPT,$opciones);
				$stmt=$conn->prepare("UPDATE cliente SET 
							nombre=?, correo=?,password=?,apellido=?
							WHERE id=?
										");

				$stmt->bind_param("ssssi",
						$nombre,$email,$hash_password,$apellido,$id_registro);
	     	}


			$stmt->execute();

			if ($stmt->affected_rows) {

					///si actulizamos el passorwd envia este mensaje 
						$respuesta=array(
						'respuesta'=>'exito',
						'nombre_actual'=>$nombre,
						'apellido_actual'=>$apellido,
						'id_actualizado'=>$stmt->insert_id
						);
			}else{
				$respuesta=array(
					'respuesta'=>'error'
				);

	/*		$respuesta=array(
				'respuesta'=>'exito',
				'nombre_actual'=>$nombre,
				'apellido_actual'=>$apellido,
				'password_actulizado'=>'No',
				'id_actualizado'=>$stmt->insert_id
				);*/
			}
			$stmt->close();
			$conn->close();

		} catch (Exception $e) {
			echo "Error".$e->getMessage();
		}
		die(json_encode($respuesta));
	}



		////////////////////////////////RECARGA CLIENTE/////////////////////////////////////////////////////
		////////////////////////////////RECARGA CLIENTE/////////////////////////////////////////////////////
		////////////////////////////////RECARGA CLIENTE/////////////////////////////////////////////////////
		////////////////////////////////RECARGA CLIENTE/////////////////////////////////////////////////////
	if(@$_POST['recarga-cliente']=='monto-recarga'){

		$dolares=htmlspecialchars($_POST['dolares']);
		$centavo=htmlspecialchars($_POST['centavo']);
		$id_cliente=htmlspecialchars($_POST['id-cliente']);
		$total=(double)$dolares.".".$centavo;
		date_default_timezone_set('America/Guayaquil');
        $fecha_actual=date("Y-m-d H:i:s");

		//die(json_encode($_POST));
		//////////////////////////////HISTORIAL DE RECARGAS///////////////
		//////////////////////////////HISTORIAL DE RECARGAS///////////////
		//////////////////////////////HISTORIAL DE RECARGAS///////////////
		try {

			$stmt=$conn->prepare("INSERT INTO cliente_recarga (id_cliente,valor,fecha_recarga) VALUES(?,?,?)");

			$stmt->bind_param("ids",$id_cliente,$total,$fecha_actual);

			$stmt->execute();

			$id_registro=$stmt->insert_id;
			if ($stmt->affected_rows) {
				$respuesta=array(
				'respuesta'=>'exito',
				'id_cliente'=>$id_cliente,
				'monto'=>$total
				);

			}else{
				$respuesta=array(
					'respuesta'=>'error'
				);
			}

			//////////////////////////CONSULTO EL SALDO DEL CLIENTE//////////
			//////////////////////////CONSULTO EL SALDO DEL CLIENTE//////////
			//////////////////////////CONSULTO EL SALDO DEL CLIENTE//////////
			$sql_consulta_saldo="SELECT * from cliente WHERE cliente.id= $id_cliente";
			$saldo_actual_cliente;
			$resultado_saldo=$conn->query($sql_consulta_saldo);
			while ($saldo = $resultado_saldo->fetch_assoc()) {
					$saldo_actual_cliente=$saldo['saldo_actual'];
			
			}
			/*echo "saldo_actual_cliente".$saldo_actual_cliente;*/

			$total_actulizar=$saldo_actual_cliente+$total;
			//echo "total actualizar ".$total_actulizar;

			////////////////////ACTULIZAMO EL CAMPO DE SALDO///ACTUAL
			////////////////////ACTULIZAMO EL CAMPO DE SALDO///ACTUAL
			////////////////////ACTULIZAMO EL CAMPO DE SALDO///ACTUAL
			$sql_actualizar_saldo="UPDATE cliente SET saldo_actual=$total_actulizar where id=$id_cliente ";
			$resultado_actulizar=$conn->query($sql_actualizar_saldo);

			//compruebo si se inserto
			//compruebo si se inserto
			if ($conn->query($sql_actualizar_saldo) === TRUE) {
		   /* echo "Record was updated";*/
			} else {

			    /*echo "Error: " . $sql_actualizar_saldo . "<br>" . $conn->error;*/
			    $respuesta=array(
				'respuesta'=>'no se pudo actulizar saldo',
				'id_cliente'=>$id_cliente,
				'monto'=>$total_actulizar
				);
			}



			$stmt->close();
			$conn->close();
		} catch (Exception $e) {
			echo "Error".$e->getMessage();
		}

		die(json_encode($respuesta));
	}






	///////////////////////////ELIMNAR CLIENTE BORRADO DEFINITIVO//////////////////
	///////////////////////////ELIMNAR CLIENTE BORRADO DEFINITIVO//////////////////
	///////////////////////////ELIMNAR CLIENTE BORRADO DEFINITIVO//////////////////
	///////////////////////////ELIMNAR CLIENTE BORRADO DEFINITIVO//////////////////


	if(@$_POST['registro']=='eliminar'){
		//die(json_encode($_POST));// die imprime un mensaje del scrip


		$id_borrar=$_POST['id'];
		try {
			$stmt=$conn->prepare("DELETE FROM cliente where id=?");
			$stmt->bind_param('i',$id_borrar);
			$stmt->execute();
			if($stmt->affected_rows){
				$respuesta=array('respuesta'=>'exito' , 'id_eliminado'=>$id_borrar,'soy_Obj'=>'soy tu obj');
			}else{
				$respuesta=array('respuesta'=>'No se pudo Eliminar');
			}
			
		} catch (Exception $e) {
			$respuesta= array( 'respuesta'=>getMessage());
		}
		die(json_encode($respuesta));

	}


	


 ?>
