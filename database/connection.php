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
        $query = "SELECT * FROM data";
        $datos = mysqli_query($con, $query);

        while($row = mysqli_fetch_assoc($datos)){
            echo json_encode($row);
            $json[] = $row;
        };

        return json_encode($json);
    }
};

