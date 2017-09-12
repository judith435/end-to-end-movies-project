<?php
    error_reporting(0);

    require_once 'BusinessLogicLayer.php';
    
    class movie_BLL  extends BusinessLogicLayer{

        function __construct() {
            parent::__construct('movie_project');
        }

        public function insert_update_movie($params, $method,  &$errorInInput) {
            try {
                    $spParms =  array();
                    array_push($spParms, new PDO_Parm("movie_name", $params["movie_name"], 'string')); 
                    array_push($spParms, new PDO_Parm("director_id", $params["director_id"], 'integer'));
                    $movie = parent::get($this->get_dbName(), 'check_movie_exists', $spParms);
                    if ($movie->rowCount() > 0) { // movie with same name & director already exists
                        $errorInInput =  "movie with same name & director already exists";
                        return;
                    }
                    if ($method == "Update") {
                         array_unshift($spParms, new PDO_Parm("movie_id", $params["movie_id"], 'integer'));
                    }
                    $spName = $method == "Create" ? 'insert_movie' : 'update_movie';
                    $movie = parent::get($this->get_dbName(), $spName, $spParms);
            }
            catch (Exception $error) {
                throw $error;
            }
        }

        public function get_movies() {
            try {
                    $emptyParms = []; 
                    return parent::get($this->get_dbName(), 'get_movies', $emptyParms);
                }
            catch (Exception $error) {
                throw $error;
            }
        }

    }
    
?>
