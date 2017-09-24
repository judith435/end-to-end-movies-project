<?php
    require_once 'abstract-api.php';
    require_once '../controllers/DirectorController.php';

    class DirectorApi extends Api{

        function Create($params) {
        }

        function Read($params) {
            $dc = new DirectorController;
            if (array_key_exists("director_id", $params))  {
            }
            else {
                return $dc->getAll_Directors();
            }
        }
         function Update($params) {
         }
         function Delete($params) {
         }
    }
?>