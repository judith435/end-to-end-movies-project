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
    $clientVars = [];

    switch ($method) {
        case 'PUT':
        case 'DELETE':
            parse_str(file_get_contents("php://input"), $clientVars);    
            break;
        case 'GET':
        case 'POST':
            $clientVars = $_REQUEST;
            break;
    }

    $params = array();
    Build_Params($params, $clientVars, 'movie_id');
    Build_Params($params, $clientVars, 'movie_name');

    if($method == "PUT" || $method == "POST") {
        $director = explode(",", $clientVars["director"]);
        $clientVars["director_id"] = $director[0];
        $clientVars["director_name"] = $director[1];
        Build_Params($params, $clientVars, "director_id"); 
        Build_Params($params, $clientVars, "director_name");
    }

    function Build_Params(&$params, $clientVars, $requestData) {
        if (isset($clientVars[$requestData])) {
            $params[$requestData] =  trim($clientVars[$requestData]);
        }
    }

    switch ($clientVars['ctrl']) {
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