<?php
    error_reporting(0);

    require_once 'model.php';
    require_once 'Share/Validations.php';
    
    class MovieModel extends Model implements JsonSerializable {

        private $id;
        private $name;
        private $director_id;
        private $director_name;

        function __construct($params, $errorInInput) {
            parent::__construct('getMovies');
            $this->setID($params["id"]);
            $this->setName($params["name"], $errorInInput);
            $this->setDirector_ID($params["director_id"], $errorInInput); 
            $this->setDirector_Name($params["director_name"]); 
        }

        public function setID($mv_id){
            $this->id = $mv_id;
        }

        public function setName($mv_name, &$errorInInput){
            if(!Validations::nameOK($ld_name)){
                $errorInInput .= " Movie Name cannot be empty\n";
            }
            $this->lead_name = $ld_name;
        }

        public function setDirector_ID($director_id, &$errorInInput){
            if(!Validations::optionSelected($director_id)){
                $errorInInput .= " Please select director\n";
            }
            $this->director_id = $director_id;
        }

        public function setDirector_Name($director_name){
            $this->director_name = $director_name;
        }

        public function getID(){
            return $this->id;
        }

        public function getName(){
            return $this->name;
        }

        public function getDirector_ID(){
            return $this->director_id;
        }

        public function getDirector_Name(){
            return $this->director_name;
        }

        public function jsonSerialize() {
            try {
                    return  [
                                'id' => $this->getID(),
                                'name' => $this->getName(),
                                'director_id' => $this->getDirector_ID(),
                                'director_name' => $this->getDirector_Name()
                            ];
                }
            catch (Exception $error) {
                throw $error;
            }
    }
    }

?>
