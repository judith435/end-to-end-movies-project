<?php
    require_once 'movies-api.php';
    require_once 'directors-api.php';
    require_once '../share/ErrorHandling.php';
    
    try {
            $id = isset($_REQUEST["id"]) ? ['id'=> $_REQUEST["id"]] : [];

            $method = $_SERVER['REQUEST_METHOD']; // verb
            
            switch ($_REQUEST["ctrl"]) {
                case 'movie':
                    $mv_api = new MovieApi();
                    echo $mv_api->gateway($method, ['id'=> $_REQUEST["id"]]);
                    break;
                case 'director':
                    $dir_api = new DirectorApi();
                    $directors = $dir_api->gateway($method, $id);
                    echo json_encode($directors);
                    break;
            }
    }
    catch (Exception $error) {
        ErrorHandling::HandleError($error); 
    }

?>