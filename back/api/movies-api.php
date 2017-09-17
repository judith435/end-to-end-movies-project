<?php
    require_once 'abstract-api.php';
    require_once '../controllers/movieController.php';

    class MovieApi extends Api{

        function Create($params) {
            // try {
                return $this->create_update($params, "Create");  
            // } 
            // catch (Exception $error) {
            //     throw $error;
            // }
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

            return $this->create_update($params, "Update");  
        }

         function Delete($params) {

            $mc = new MovieController;
            $mc->delete_Movie($params);
            $response_array['status'] = 'ok'; 
            $response_array['action'] = 'Delete movie';
            $response_array['message'] = 'movie deleted successfully'; 
            return $response_array;

        }

        function create_update($params, $function) {

            $errorInInput = "";
            $mc = new MovieController;
            $mc->create_update_Movie($params, $function, $errorInInput);

            if ($errorInInput != "") {
                $response_array['status'] = 'error';  
                $response_array['action'] = $function . ' movie';
                $response_array['message'] = 'Error from Server: ' . $errorInInput; 
            }
            else {
                $response_array['status'] = 'ok'; 
                $response_array['action'] = $function . ' movie';
                $response_array['message'] = 'movie ' . ($function == "Create" ? 'added' : 'updated') . ' successfully'; 
            }

            return $response_array;
        }
            


    }
?>