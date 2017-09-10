<?php
    require_once 'abstract-api.php';
    require_once '../controllers/movieController.php';

    class MovieApi extends Api{

        function Create($params) {
            $c = new MovierController;
            $c->CreateCustomer($param);
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
         function Update($params) {
             // TODO
         }
         function Delete($params) {
            // TODO
         }
    }
?>