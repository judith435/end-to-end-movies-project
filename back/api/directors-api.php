<?php
    require_once 'abstract-api.php';
    require_once '../controllers/DirectorController.php';

    class DirectorApi extends Api{

        function Create($params,$errorInInput) {
            $c = new DirectorController;
            $c->CreateCustomer($param);
        }

        function Read($params) {
            $dc = new DirectorController;

            if (array_key_exists("id", $params)) {
                // $customer = $dc->getCustomerById($params["id"]);
                // return json_encode($customer, JSON_PRETTY_PRINT);
            }
            else {
                return $dc->getAll_Directors();
            }
        }
         function Update($params, $errorInInput) {
             // TODO
         }
         function Delete($params) {
            // TODO
         }
    }
?>