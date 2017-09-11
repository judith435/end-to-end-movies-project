<?php 

    require_once 'controller.php';
    require_once '../models/movieModel.php';

    class MovieController  extends Controller{
        private $db;

        function __construct() {
            parent::__construct('movies');
        }
        
        function create_update_Movie($param,  $errorInInput) {
            try {
                    $Movie = new MovieModel($param);
                    if ($errorInInput != "") { //error found in data members of movie object
                        return;
                    }
    }
            catch (Exception $error) {
                throw $error;
            }

        }


        // public static function add_update_Lead( $action, 
        //                                         $ld_id, 
        //                                         $ld_name, 
        //                                         $ld_phone, 
        //                                         $prod_id, 
        //                                         $prod_name, 
        //                                         &$errorInInput) {
        //     try {
        //             $Lead = new Lead($ld_id, $ld_name, $ld_phone, $prod_id, $prod_name, $errorInInput);
        //             if ($errorInInput != "") { //error found in data members of lead object
        //             return;
        //             }
        //             $Parms =  array();
        //             array_push($Parms, new PDO_Parm("lead_name", $Lead -> getLeadName(), 'string')); 
        //             array_push($Parms, new PDO_Parm("lead_phone", $Lead -> getLeadPhone(), 'string'));
        //             array_push($Parms, new PDO_Parm("product_id", $Lead -> getProduct_ID(), 'integer'));
        //             $lead = BusinessLogicLayer::get('crm', 'check_Lead_exists', $Parms);
        //             if ($lead->rowCount() > 0) { // lead with same name, phone & product already exists
        //             $errorInInput = "lead with same name, phone & product already exists";
        //             return;
        //             }
        //             if ($action == "UpdateLead") {
        //             array_unshift($Parms, new PDO_Parm("lead_id", $Lead -> getID(), 'integer'));
        //             }
        //             $spName = $action == "AddLead" ? 'insert_lead' : 'update_lead';
        //             BusinessLogicLayer::update('crm', $spName, $Parms);
        //         }
        //         catch (Exception $error) {
        //         throw $error;
        //         }
        //     }


        // function getAll_Directors() {
        //     try {
        //             $emptyParms = []; 
        //             $allDirectors = array();
                    
        //             $resultSet = BusinessLogicLayer::get($this->get_dbName(), 'get_Directors', $emptyParms);
        //             $errorInInput = "";
        //             while ($row = $resultSet->fetch())
        //             {                           
        //                  array_push($allDirectors, new DirectorModel(["id" => $row['id'], "name" => $row['name']], $errorInInput));
        //             }
        //             return $allDirectors;
        //     }
        //     catch (Exception $error) {
        //         throw $error;
        //     }
        // }


        function getAllCustomers() {
            
        }

        function getCustomerById($id) {
            // CONNECT BL
            $array = [
                "id" => $id,
                "name" => MD5($id)
            ];
           
            $c = new CustomerModel($array);
            return $c->jsonSerialize();
        }


    }