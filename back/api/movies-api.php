<?php
    require_once 'abstract-api.php';
    require_once '../controllers/movieController.php';

    class MovieApi extends Api{

        function Create($params, $errorInInput) {
            $mc = new MovierController;
            $mc->create_update_Movie($param, $errorInInput);

            if ($errorInInput != "") {
                $response_array['status'] = 'error';  
                $response_array['action'] = $action;
                $response_array['message'] = 'Error from Server: ' . $errorInInput; 
            }
            else {
                $response_array['status'] = 'ok'; 
                $response_array['action'] = $action;
                $response_array['message'] = 'movie' . ($action == "AddLead" ? ' added ' : ' updated ')  . 'successfully'; 
            }
        }

        function Read($params) {
            $c = new MovieController;

            if (array_key_exists("id", $params)) {
                $customer = $c->getCustomerById($params["id"]);
                return json_encode($customer, JSON_PRETTY_PRINT);
            }
            else {
                return $c->getAllCustomers();
            }
        }
         function Update($params, $errorInInput) {

         }
         function Delete($params) {
            // TODO
         }
    }
?>