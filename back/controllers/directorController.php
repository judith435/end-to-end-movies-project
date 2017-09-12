<?php 
    require_once '../models/directorModel.php';
    require_once '../bl/director-BLL.php';
    
    class DirectorController {

        // function CreateDirector($param) {
        //     $c = new DirectorModel($param);
        //     return "hi";
        //     //$this->db->CreateEntity($c);

        // }

        function getAll_Directors() {
            try {
                    
                    $dir_bll = new director_BLL();
                    $resultSet = $dir_bll->get_directors();

                    $allDirectors = array();
                    $errorInInput = ""; //use to check no problems in directors data retrieved from db -> if yes send error back to client

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

?>