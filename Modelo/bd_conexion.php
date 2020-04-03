<?php

   $conn=new mysqli('127.0.0.1','jhonnydj','ky4lkexwbsc8','pro_edit');


    if($conn->connect_error){
        echo $error->$conn->connect_error;
        echo "<br>.existe un error ".$error->$conn->connect_error;
    }

?>