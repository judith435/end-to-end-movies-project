<?php
    require_once 'abstract-api.php';
    require_once '../controllers/DirectorController.php';

    class DirectorApi extends Api{

        function Create($params) {
            // $c = new DirectorController;
            // $c->CreateCustomer($param);
        }

        function Read($params) {
            $dc = new DirectorController;

            //if (array_key_exists("director_id", $params)) {
            if (false) {
                // $customer = $dc->getCustomerById($params["id"]);
                // return json_encode($customer, JSON_PRETTY_PRINT);
            }
            else {
                return $dc->getAll_Directors();
            }
        }
         function Update($params) {
             // TODO
         }
         function Delete($params) {
            // TODO
         }
    }
?>