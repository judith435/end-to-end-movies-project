<?php
    error_reporting(0);

    require_once '../dal/Connection.php';
    require_once '../dal/PDO_Parm.php';



    class BusinessLogicLayer {
        // REFACTOR: use Builder pattern
        /*
            $table_name: string
            $arr: [field] => [value]
            $conds: [field] => []
        */
        public static function update($db, $spName, $SP_parms) {
            try {
                $con = new Connection($db);  
                $con->executeSP($spName, $SP_parms);
            }
            catch (Exception $error) {
                throw $error;
            }
        }

        public static function get($db, $spName, $SP_parms) {
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

