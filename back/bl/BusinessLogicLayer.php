<?php
    error_reporting(0);

    require_once '../dal/Connection.php';
    require_once '../dal/PDO_Parm.php';

    class BusinessLogicLayer {

        private $dbName;
        
        function __construct($dbName) {
            $this->set_dbName($dbName);
        }

        public function set_dbName($dbName){
            $this->dbName = $dbName;
        }

        public function get_dbName(){
            return $this->dbName;
        }
        
        public function update($db, $spName, $SP_parms) {
            try {
                    $con = new Connection($db);  
                    $con->executeSP($spName, $SP_parms);
            }
            catch (Exception $error) {
                throw $error;
            }
        }

        public function get($db, $spName, $SP_parms) {
            try {
                    $con = new Connection($db);  
                    return $con->executeSP($spName, $SP_parms);
            }
            catch (Exception $error) {
                throw $error;
            }
        }
    }
    
?>

