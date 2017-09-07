<?php 
    require_once '../models/customerModel.php';

    class MovieController {
        private $db;

        function __construct() {
            // $this->db = new BL();
        }
        
        function CreateCustomer($param) {
            $c = new MovieModel($param);
            return "hi";
            //$this->db->CreateEntity($c);

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