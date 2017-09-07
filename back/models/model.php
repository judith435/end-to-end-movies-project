<?php
    class Model {

        private $spName;

        function __construct($sp) {
            set_spName($sp);
        }

        public function set_spName($sp){
            $this->spName = $sp;
        }


    }
?>
    