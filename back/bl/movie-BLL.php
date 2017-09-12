<?php
    error_reporting(0);

    // require_once '../dal/Connection.php';
    // require_once '../dal/PDO_Parm.php';

    class movie_BLL  extends BusinessLogicLayer{

        function __construct() {
            parent::__construct('movie_project');
        }

        public function update_movie($SP_parms) {
            try {
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
    }
    
?>

