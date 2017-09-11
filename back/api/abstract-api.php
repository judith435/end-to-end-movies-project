<?php
    abstract class Api {
        abstract function Create($params, $errorInInput);
        abstract function Read($params);
        abstract function Update($params, $errorInInput);
        abstract function Delete($params);

        protected $errorInInput;
        
        public function gateway($method, $params) {
            switch ($method) {
                case "POST":
                    return $this->Create($params, $errorInInput);
                case "GET":
                    return  $this->Read($params);
                case "PUT":
                    return $this->Update($params, $errorInInput);
                case "DELETE":
                    return $this->Delete($params);
            }
        }
    }
?>