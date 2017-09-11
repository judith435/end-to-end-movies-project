<?php 

    require_once 'controller.php';
    require_once '../models/movieModel.php';

    class MovieController  extends Controller{
        private $db;

        function __construct() {
            parent::__construct('movies');
        }
        
        function create_update_Movie($param, &$errorInInput) {
            try {
                    $Movie = new MovieModel($param, $errorInInput);
                    if ($errorInInput != "") { //error found in data members of movie object
                        return;
                    }
    }
            catch (Exception $error) {
                throw $error;
            }

        }

        function getAllCustomers() {
            
        }

        function getCustomerById($id) {
            // CONNECT BL
            $array = [
                "id" => $id,
                "name" => MD5($id)
            ];
           
            $c = new CustomerModel($array);
            return $c->jsonSerialize();
        }


    }