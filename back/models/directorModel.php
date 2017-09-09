<?php
    error_reporting(0);
    require_once '../share/Validations.php';

    class DirectorModel implements JsonSerializable {
            
        private $id;
        private $name;

        function __construct($params, $errorInInput) {
            $this->setID($params["id"]);
            $this->setName($params["name"], $errorInInput);
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
            try {
                    return  [
                                'id' => $this->getID(),
                                'name' => $this->getName()
                            ];
                }
            catch (Exception $error) {
                throw $error;
            }
        }
    }

?>
