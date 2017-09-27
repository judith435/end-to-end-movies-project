<?php
    error_reporting(0);
    require_once '../share/Validations.php';

    class DirectorModel implements JsonSerializable {
            
        private $id;
        private $name;

        function __construct($params, &$errorInInput) {
            $this->setID
             (array_key_exists("director_id", $params) ? $params["director_id"] : 0); 
            $this->setName($params["director_name"], $errorInInput);
        }

        public function setID($dir_id){
            $this->id = $dir_id;
        }

        public function setName($dir_name, &$errorInInput){
            if(!Validations::nameOK($dir_name)){
                $errorInInput .= " Director Name cannot be empty\n";
            }

            $this->name = $dir_name;
        }

        public function getID(){
            return $this->id;
        }

        public function getName(){
            return $this->name;
        }

        public function jsonSerialize() {
            return  [
                        'id' => $this->getID(),
                        'name' => $this->getName()
                    ];
        }
    }

?>
