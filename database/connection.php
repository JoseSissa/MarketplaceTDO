<?php 

class Connection {
    public function obtDatos() {
        $server = "localhost";
        $user = "root";
        $password = "";
        $database = "marketplace";

        $con = mysqli_connect($server, $user, $password, $database);

        if ($con->connect_error) {
            die("Error al conectar con la db: " . $con->connect_error);
        }
        $query = "SELECT * FROM emprendimientos";
        $datos = mysqli_query($con, $query);

        while($row = mysqli_fetch_assoc($datos)){
            $json[] = $row;
        };

        return json_encode($json);
    }
};

