<?php

require __DIR__ . '/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

class Connection {
    public function obtDatos() {
        $server = $_ENV["SERVER"];
        $user = $_ENV["USER"];
        $password = $_ENV["PASSWORD"];
        $database = $_ENV["DATABASE"];

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

