<?php
    require_once 'customers-api.php';

    $method = $_SERVER['REQUEST_METHOD']; // verb
    
    switch ($_REQUEST["ctrl"]) {
        case 'customer':
            $capi = new CustomerApi();
            echo $capi->gateway($method, ['id'=> $_REQUEST["id"]]);
            break;
        case 'lead':
            break;
    }
?>