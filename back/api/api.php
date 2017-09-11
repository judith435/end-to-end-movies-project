<?php
    require_once 'movies-api.php';
    require_once 'directors-api.php';
    require_once '../share/ErrorHandling.php';
    
    try {   // $id = isset($_REQUEST["id"]) ? ['id'=> $_REQUEST["id"]] : [];
            $method = $_SERVER['REQUEST_METHOD']; // verb
            $request = isset($_REQUEST['ctrl']) ?  $_REQUEST['ctrl'] : '';

            $params = array();
            Build_Params($params, 'mv_id');
            Build_Params($params, 'mv_name');
            Build_Params($params, 'dir_id');
            
            switch ($_REQUEST['ctrl']) {
                case 'movie':
                    $mv_api = new MovieApi();
                    $response = $mv_api->gateway($method, $params);
                    echo json_encode($response);
                    break;
                case 'director':
                    $dir_api = new DirectorApi();
                    $directors = $dir_api->gateway($method, $params);
                    echo json_encode($directors);
                    break;
            }
    }
    catch (Exception $error) {
        ErrorHandling::HandleError($error); 
    }

    function Build_Params($params, $requestData) {
        if(isset($_REQUEST[$requestData])){
            $params[$requestData] = trim($_REQUEST[$requestData]); 
        }
}


?>