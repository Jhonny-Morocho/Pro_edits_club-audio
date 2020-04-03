<?php 

	include_once'../Modelo/bd_conexion.php';
	/////////////////////////////AGREGAR GENERO MUSICAL//////////////////////
	/////////////////////////////AGREGAR GENERO MUSICAL//////////////////////
	/////////////////////////////AGREGAR GENERO MUSICAL//////////////////////
	/////////////////////////////AGREGAR GENERO MUSICAL//////////////////////
	if(isset($_POST['agregar-bibloteca'])){
		/*die(json_encode($_POST));*/
		$biblioteca=$_POST['biblioteca'];
		$estado=1;

		try {	        
			$stmt=$conn->prepare("INSERT INTO biblioteca (genero,estado) VALUES(?,?)");
			$stmt->bind_param("si",$biblioteca,$estado);
			$stmt->execute();
			
			$id_registro=$stmt->insert_id;
			if ($stmt->affected_rows) {
				$respuesta=array(
				'respuesta'=>'exito',
				'genero'=>$biblioteca,
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


	/////////////////////////////EDITAR  GENERO MUSICAL//////////////////////
	/////////////////////////////EDITAR  GENERO MUSICAL//////////////////////
	/////////////////////////////EDITAR  GENERO MUSICAL//////////////////////
	/////////////////////////////EDITAR  GENERO MUSICAL//////////////////////

	if(@$_POST['editar-bibloteca']=='editar-genero'){
		/*die(json_encode($_POST));*/

	    $biblioteca=$_POST['biblioteca'];
	    $id_bibloteca=$_POST['id-bibloteca'];


	    	try{
			$stmt=$conn->prepare("UPDATE biblioteca SET
				genero=?
				WHERE id=?
				");

				$stmt->bind_param("si",
					$biblioteca,$id_bibloteca);
				$stmt->execute();
				$id_insertado=$stmt->insert_id;

				if ($stmt->affected_rows) {
					$respuesta=array(
					'respuesta'=>'exito',
					'genero'=>$biblioteca
					);

				}else{
					$respuesta=array(
						'respuesta'=>'error al actulizar'
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

 