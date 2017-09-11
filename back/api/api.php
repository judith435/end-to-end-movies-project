<?php
    require_once 'movies-api.php';
    require_once 'directors-api.php';
    require_once '../share/ErrorHandling.php';
    
    try { 
            $method = $_SERVER['REQUEST_METHOD']; // verb
            $request = isset($_REQUEST['ctrl']) ?  $_REQUEST['ctrl'] : '';

            $params = array();
            Build_Params($params, 'movie_id');
            Build_Params($params, 'movie_name');
            Build_Params($params, 'director_id');
            Build_Params($params, 'director_name');
            
            switch ($_REQUEST['ctrl']) {
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

    function Build_Params(&$params, $requestData) {
        $params[$requestData] = 
            isset($_REQUEST[$requestData]) ? trim($_REQUEST[$requestData]) : null; 
    }


?>