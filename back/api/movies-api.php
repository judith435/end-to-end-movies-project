<?php
    require_once 'abstract-api.php';
    require_once '../controllers/movieController.php';

    class MovieApi extends Api{

        function Create($params) {

            $errorInInput = "";
            $mc = new MovieController;
            $mc->create_update_Movie($params, "Create", $errorInInput);

            if ($errorInInput != "") {
                $response_array['status'] = 'error';  
                $response_array['action'] = 'create movie';
                $response_array['message'] = 'Error from Server: ' . $errorInInput; 
            }
            else {
                $response_array['status'] = 'ok'; 
                $response_array['action'] = 'create movie';
                $response_array['message'] = 'movie added successfully'; 
            }

            return $response_array;
        }

        function Read($params) {

            $mc = new MovieController;

            //if (array_key_exists("id", $params)) {
            if (false) {
                $customer = $c->getCustomerById($params["id"]);
                return json_encode($customer, JSON_PRETTY_PRINT);
            }
            else {
                return $mc->getAll_Movies();
            }
        }
         function Update($params) {

         }
         function Delete($params) {
         }
    }
?>