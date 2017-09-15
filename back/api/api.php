<?php

    require_once 'movies-api.php';
    require_once 'directors-api.php';
    require_once '../share/ErrorHandling.php';
    
    try { 
            $method = $_SERVER['REQUEST_METHOD']; // verb
            $request = isset($_REQUEST['ctrl']) ?  $_REQUEST['ctrl'] : '';
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
    }
    catch (Exception $error) {
        ErrorHandling::HandleError($error); 
    }

    function Build_Params(&$params, $clientVars, $requestData) {
        $params[$requestData] = 
                        //  isset($_REQUEST[$requestData]) ? trim($_REQUEST[$requestData]) : null; 
            isset($clientVars[$requestData]) ? trim($clientVars[$requestData]) : null; 
            
    }


?>