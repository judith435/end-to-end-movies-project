<?php
    error_reporting(0);

    require_once 'BusinessLogicLayer.php';
    
    class director_BLL  extends BusinessLogicLayer{

        function __construct() {
            parent::__construct('movie_project');
        }
    
        public function get_directors() {
            $emptyParms = []; 
            return parent::get($this->get_dbName(), 'get_directors', $emptyParms);
        }
    }
    
?>

