<?php 

    require_once '../models/movieModel.php';

    class MovieController {

        function create_update_Movie($param, &$errorInInput) {
            try {
                    $Movie = new MovieModel($param, $errorInInput);
                    if ($errorInInput != "") { //error found in data members of movie object
                        return;
                    }

                    $movie_bll = new movie_BLL();
                    $returnMSG = $dir_bll->get_directors();

                    // $Parms =  array();
                    // array_push($Parms, new PDO_Parm("lead_name", $Lead -> getLeadName(), 'string')); 
                    // array_push($Parms, new PDO_Parm("lead_phone", $Lead -> getLeadPhone(), 'string'));
                    // array_push($Parms, new PDO_Parm("product_id", $Lead -> getProduct_ID(), 'integer'));
                    // $lead = BusinessLogicLayer::get('crm', 'check_Lead_exists', $Parms);
                    // if ($lead->rowCount() > 0) { // lead with same name, phone & product already exists
                    // $errorInInput = "lead with same name, phone & product already exists";
                    // return;
                    // }
                    // if ($action == "UpdateLead") {
                    // array_unshift($Parms, new PDO_Parm("lead_id", $Lead -> getID(), 'integer'));
                    // }
                    // $spName = $action == "AddLead" ? 'insert_lead' : 'update_lead';
                    // BusinessLogicLayer::update('crm', $spName, $Parms);

            }
            catch (Exception $error) {
                throw $error;
            }

        }

        function getAllCustomers() {
            
        }

        function getCustomerById($id) {
            $array = [
                "id" => $id,
                "name" => MD5($id)
            ];
           
            $c = new CustomerModel($array);
            return $c->jsonSerialize();
        }
    }

?>
