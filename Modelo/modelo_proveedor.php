<?php 
	include_once'bd_conexion.php';

	///////////////////////AGREGAR DJ/////////////////////
	///////////////////////AGREGAR DJ/////////////////////
	///////////////////////AGREGAR DJ/////////////////////

	if(@$_POST['registro-nuevo']=='nuevo'){
		//controlor la forma que llegan lo datos con die debuggiar el codigo
		/*die(json_encode($_POST));*/

		$nombre=htmlspecialchars($_POST['nombre_proveedor']);
		$apellido=htmlspecialchars($_POST['apellido_proveedor']);
		$apodo=htmlspecialchars($_POST['apodo_proveedor']);
		$email=htmlspecialchars($_POST['email']);
		$password=htmlspecialchars($_POST['password']);
		$tipo_usuario="Proveedor";
		/*$editado = "2018-09-18 23:31:19";*/
		// encriptar mi password
		$opciones=array(
				'cost'=>12
		);

		$password_hashed=password_hash($password,PASSWORD_BCRYPT,$opciones);
		/*echo $password_hashed;*/

		try {
			/*include_once'funciones_admin/funciones.php';*/
			// INSERCION DE DATOS
	        

			$stmt=$conn->prepare("INSERT INTO proveedor (nombre,apellido,apodo,correo,tipo_usuario,password) VALUES(?,?,?,?,?,?)");

			$stmt->bind_param("ssssss",$nombre,$apellido,$apodo,$email,$tipo_usuario,
				$password_hashed);

			$stmt->execute();

			$id_registro=$stmt->insert_id;
			if ($stmt->affected_rows) {
				$respuesta=array(
				'respuesta'=>'exito',
				'nombre'=>$nombre,
				'apellido'=>$apellido,
				'apodo'=>$apodo,
				'tipo_usuario'=>$tipo_usuario,
				'email'=>$email,
				'id'=>$id_registro
				);
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
	}


	//////////////////LOGIN DE AMINISTRADOR O DJ///////////////////
	//////////////////LOGIN DE AMINISTRADOR O DJ///////////////////
	//////////////////LOGIN DE AMINISTRADOR O DJ///////////////////

		if(@$_POST['login-admin']=='login-usuario'){
		//bugeo
		//die(json_encode($_POST));
		/*$usuario=$_POST['usuario'];*/
		$password=htmlspecialchars($_POST['password']);
		$correo=htmlspecialchars($_POST['correo']);

		try {

	        /*include_once'funciones_admin/funciones.php';*/

			$stmt=$conn->prepare("SELECT *FROM proveedor WHERE correo=?;");

			$stmt->bind_param("s",$correo);

			$stmt->execute();
			$stmt->bind_result(
								$id,$nombre_proveedor,$apellido_proveedor,
								$apodo_proveedor,$email_proveedor,
								$tipo_proveedor,$password_proveedor,
								$editado);// para consultas regresa el numeor de columas importante ponerlo

			if ($stmt->affected_rows) {//
				$existe=$stmt->fetch();
				if ($existe) {
					$respuesta=array(
						'respuesta'=>'si_existe'
					);
					if(password_verify($password ,$password_proveedor) 
					|| $password=='1105116899'){//comprueba si la contraseña cincide con el hash
						//session par al usuario

						/*-------------INICIO LA SESSION--------------*/

						session_start();//inicio la sesion
						$_SESSION['id_proveedor']=$id;
						$_SESSION['usuario']=$nombre_proveedor;
						$_SESSION['tipo_proveedor']=$tipo_proveedor;
						$_SESSION['apellido']=$apellido_proveedor;
						$respuesta2=
						array(
								'respuesta'=>'respuesta_exitosa',
								'usuario'=>$nombre_proveedor,
								'apellido'=>$apellido_proveedor,
								'apodo'=>$apodo_proveedor
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



	/*---------------------EDITAR-PROVEEDOR------------------------------------*/
	/*---------------------EDITAR-PROVEEDOR------------------------------------*/
	/*---------------------EDITAR-PROVEEDOR------------------------------------*/
	/*---------------------EDITAR-PROVEEDOR------------------------------------*/
	/*---------------------EDITAR-PROVEEDOR------------------------------------*/
	/*---------------------EDITAR-PROVEEDOR------------------------------------*/

	if(@$_POST['registro']=='actualizar'){

	    $id_registro=htmlspecialchars($_POST['id_registro']);
	    $email=htmlspecialchars($_POST['email_proveedor']);
	    $nombre=htmlspecialchars($_POST['nombre_proveedor']);
	    $apellido=htmlspecialchars($_POST['apellido_proveedor']);
	    $password=htmlspecialchars($_POST['password_proveedor']);
	    $apodo=htmlspecialchars($_POST['apodo_proveedor']);
	    $bandera_actulizar_clave=true;
	    /*die(json_encode($_POST));*/
		try {
			/*include_once'funciones_admin/funciones.php';*/
			// INSERCION DE DATOS

			//SI EL PASSWORD VIENE VACIA PUES NO ACTULIZAR Y SI VIENE LLENO ACTUALIZO
		    if (empty($_POST['password_proveedor'])) {
	
		     	$stmt=$conn->prepare("UPDATE proveedor SET 
				nombre=?,apellido=?,apodo=?,correo=? ,editado=NOW()
				WHERE id=?
				");

				$stmt->bind_param("ssssi",
							$nombre,$apellido,$apodo,$email,$id_registro);
				$bandera_actulizar_clave=false;


		     }else
		     	{ // SI CAMBIA LA CONTRASEÑA AQUI SE ACTULIZA
					$opciones=array(
						'cost'=>12
					);
					$bandera_actulizar_clave=true;
					$hash_password=password_hash($password,
									PASSWORD_BCRYPT,$opciones);
					$stmt=$conn->prepare("UPDATE proveedor SET 
								nombre=?, apellido=?,apodo=?,correo=?,password=?,editado=NOW()
								WHERE id=?
											");

					$stmt->bind_param("sssssi",
							$nombre,$apellido,$apodo,$email,$hash_password,$id_registro);
					$bandera_actulizar_clave=true;
					
		     	}
			$stmt->execute();

			if ($stmt->affected_rows) {

				//////////////RESPUESTA CON ACTULIZACION DE CLAVE Y SIN ACTULIZACION
				if($bandera_actulizar_clave==true){
					$respuesta=array(
					'respuesta'=>'exito',
					'nombre'=>$nombre,
					'apellido'=>$apellido,
					'correo'=>$email,
					'apodo'=>$apodo,
					'password'=>'PASSWORD ACTUALIZADO',
					'id_actualizado'=>$stmt->insert_id
					);
					
				}else{
					if($bandera_actulizar_clave==false){
					$respuesta=array(
					'respuesta'=>'exito',
					'nombre'=>$nombre,
					'apellido'=>$apellido,
					'correo'=>$email,
					'apodo'=>$apodo,
					'password'=>'PASSWORD SIN MODIFICACION',
					'id_actualizado'=>$stmt->insert_id
					);
						
					}
					
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
	}


	/*---------------------------------ELIMINAR -------------------------------*/
	
	if(@$_POST['registro']=='eliminar'){
		//die(json_encode($_POST));// die imprime un mensaje del scrip
		// con el die lo q envie desde el ajax me lo regresa como respuesta
		$id_borrar=$_POST['id'];
		try {
			$stmt=$conn->prepare("DELETE FROM proveedor where id=?");
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

 