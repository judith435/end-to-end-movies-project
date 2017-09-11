<?php 
    require_once 'controller.php';
    require_once '../models/directorModel.php';
    require_once '../bl/BusinessLogicLayer.php';
    
    class DirectorController extends Controller{

        function __construct() {
            parent::__construct('movies');
        }
        
        // function CreateDirector($param) {
        //     $c = new DirectorModel($param);
        //     return "hi";
        //     //$this->db->CreateEntity($c);

        // }

        function getAll_Directors() {
            try {
                    $emptyParms = []; 
                    $allDirectors = array();
                    
                    $resultSet = BusinessLogicLayer::get($this->get_dbName(), 'get_Directors', $emptyParms);
                    $errorInInput = "";
                    while ($row = $resultSet->fetch())
                    {                           
                         array_push($allDirectors, new DirectorModel(["id" => $row['id'], "name" => $row['name']], $errorInInput));
                    }
                    return $allDirectors;
            }
            catch (Exception $error) {
                throw $error;
            }
        }

        // function getDirectorById($id) {
        //     // CONNECT BL
        //     $array = [
        //         "id" => $id,
        //         "name" => MD5($id)
        //     ];
           
        //     $c = new DirectorModel($array);
        //     return $c->jsonSerialize();
        // }


    }