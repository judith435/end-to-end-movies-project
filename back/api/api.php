<?php
    require_once 'movies-api.php';
    require_once 'directors-api.php';
    require_once '../share/ErrorHandling.php';
    
    //define error handling for site
    set_exception_handler('exception_handler');
    function exception_handler($exception) {
        ErrorHandling::HandleError($exception); 
    }
      
    $method = $_SERVER['REQUEST_METHOD']; // verb
    $params = []; //contains data sent to server from client in REST protocol

    if ($method == 'GET' || $method == 'POST') {
        $params = $_REQUEST;
    }
    else
    {
        parse_str(file_get_contents("php://input"), $params);    
    }

    switch ($params['ctrl']) {
        case 'movie':
            $mv_api = new MovieApi();
            $response = $mv_api->gateway($method, $params);
            echo json_encode($response);
            break;
        case 'director':
            $dir_api = new DirectorApi();
            $response = $dir_api->gateway($method, $params);
            echo json_encode($response);
            break;
    }

?>