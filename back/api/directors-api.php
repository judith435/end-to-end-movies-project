<?php
    require_once 'abstract-api.php';
    require_once '../controllers/DirectorController.php';

    class DirectorApi extends Api{

        function Create($params) {
            return $this->create_update($params, "Create");  
        }

        function Read($params) {
            $dc = new DirectorController;
            if (array_key_exists("director_name", $params)) {
                return  $dc->getDirectorByName($params); //used to check if director by same name  already exists in remote js validations
            }
            else {
                return $dc->getAll_Directors();
            }
        }
         function Update($params) {

         }

         function Delete($params) {

            $dc = new DirectorController;
            $dc->delete_Director($params);
            $response_array['status'] = 'ok'; 
            $response_array['action'] = 'Delete director';
            $response_array['message'] = 'director deleted successfully'; 
            return $response_array;
         }

         function create_update($params, $function) {

            //used to return the following kind of errors to client: errors in input data, creating director that already exists etc. 
            $applicationError = ""; 
            $dc = new DirectorController;
            $dc->create_update_Director($params, $function, $applicationError);

            if ($applicationError != "") {
                $response_array['status'] = 'error';  
                $response_array['action'] = $function . ' director';
                $response_array['message'] =  $applicationError; 
            }
            else {
                $response_array['status'] = 'ok'; 
                $response_array['action'] = $function . ' director';
                $response_array['message'] = 'director ' . ($function == "Create" ? 'added' : 'updated') . ' successfully'; 
            }

            return $response_array;
        }

    }
?>