<?php
    require_once 'abstract-api.php';
    require_once '../controllers/movieController.php';

    class MovieApi extends Api{

        function Read($params) {
            $applicationError = ""; //use to check no problems in movies data retrieved from db -> if yes send error back to client
            $mc = new MovieController;

            if (array_key_exists("movie_name", $params) && array_key_exists("director_id", $params)) {
                $tot = $params["movie_name"];
                $tote = $params["director_id"];
                // $customer = $c->getCustomerById($params["id"]);
                // return json_encode($customer, JSON_PRETTY_PRINT);
            }
            else {
                return $mc->getAll_Movies($applicationError);
            }
        }

        function Create($params) {
            return $this->create_update($params, "Create");  
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

            //used to return the following kind of errors to client: errors in input data, creating movie that talralready exists etc. 
            $applicationError = ""; 
            $mc = new MovieController;
            $mc->create_update_Movie($params, $function, $applicationError);

            if ($applicationError != "") {
                $response_array['status'] = 'error';  
                $response_array['action'] = $function . ' movie';
                $response_array['message'] =  $applicationError; 
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