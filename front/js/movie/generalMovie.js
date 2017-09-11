var generalMovie = (function() {
    var app = {
        debugMode: true,   
        //movieApi: 'http://localhost:8080/joint/end-to-end-movies-project/back/api/api.php',
        //movieApi: 'http://localhost/crm/server/crmAPI.php',
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }


    //write same generic add functionfor all crm objects
    $('#frmCU').on("submit", function (e) {   
        e.preventDefault();
    });

    function AjaxSubmitParms(action, entity, id) {
        this.action = action;
        this.entity = entity;
        this.id = id;
    }

    function ajaxSubmit(asp){
        if (asp.action == "delete"){
            var ajaxData = asp;
        }
        else {
            var ajaxData =  $('form').serialize();
        }
        $.ajax({
            type: "POST", //create
            url:  app.movieApi,
            data:  ajaxData,
            success: function(data){
                if (app.debugMode) {
                    console.log("movieApi response");
                    console.log(data);
                }
                data = JSON.parse(data);
                // data.message conatains CUD confirmation if successful or application errors => e.g. missing product if not
                alert(data.status + " " + data.action + " " + data.message); 
                if(data.status == 'error') { return; }
                if(data.action == "delete" || data.action == "UpdateLead" ){ //if action was delete update show new entitiy table
                    Show_Leads();
                    // switch (asp.entity) { => for future use
                    //     case "lead":
                    //         Show_Leads();
                    //         break;
                    // }
                }
                // if(data.action == "UpdateLead") {
                //     $("#CreateUpdateDivFields").html("");  
                //     $("#btnUpdateLead , #leadTitle").hide();
                // }
            },
            // systen errors caused by a bad connection, timeout, invalid url  
            error:function(data){
                alert(data); //===Show Error Message====
                }
        });

    }

    //ajaxSubmit is called from submitHandler:  in validator = $("#frmCU").validate({ from validations.js file
    return {
        ajaxSubmit: ajaxSubmit 
    }
})();

