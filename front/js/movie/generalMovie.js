'use strict'

var generalMovie = (function() {
    var app = {
        debugMode: true,   
        //movieApi: 'http://localhost:8080/joint/end-to-end-movies-project/back/api/api.php',
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }

    function showMovies(){
        $("#MoviesTable").load("../../templates/movies-table-template.html");

        var ajaxData = {
            ctrl: 'movie'//,
            //action: 'getDirectors'
        };

        $.ajax({    
            type: 'GET',
            url: app.movieApi,
            data: ajaxData,
            success: function(response) {
                var data = JSON.parse(response);
                if (data.status == "error"){ 
                    alert(data.message);
                    return;
                }

                var moviesArray = [];
                var mo = MovieObject();
                for (let i = 0; i < data.length; i++) {
                    moviesArray.push(new mo.Movie(data[i].id, 
                                                  data[i].name,
                                                  data[i].director_id,
                                                  data[i].director_name,
                                            ));
                }      
                $.ajax('../../templates/movie-template.html').done(function(data) {
                    $("#movies").html("");
                    for(let i=0; i < moviesArray.length; i++) {
                        let template = data;
                        template = template.replace("{{movie_id}}", moviesArray[i].movie_id);
                        template = template.replace("{{movie_name}}", moviesArray[i].movie_name);
                        template = template.replace("{{director_id}}", moviesArray[i].director_id);
                        template = template.replace("{{director_name}}", moviesArray[i].director_name);
                        $('#movies').append(template);
                    }
                });
        },
            // systen errors caused by a bad connection, timeout, invalid url  
            error: function(error_response){
                    if(app.debugMode){
                        console.log("movieApi error response");
                        console.log(error_response);
                    }
                    alert("error: " + error_response); //===Show Error Message====
                }
        });
    }
        
    //write same generic add function for  movie & director objects for create and update operations
    // $('#frmCU').on("submit", function (e) {   
    //     e.preventDefault();
    //     return false;
    // });

    // function AjaxSubmitParms(action, entity, id) {
    //     this.action = action;
    //     this.entity = entity;
    //     this.id = id;
    // }

    //function ajaxSubmit(asp){
    function ajaxSubmit(){
            
        var verb;
        switch ($('title').text()) {
            case "Create Movie":
                verb = "POST";
                break;
            case "Update Movie":
                verb = "PUT";
            break;
            // case "Delete Lead":
            //     Delete_Lead();
            //     break;
        }
    
        // if (asp.action == "delete"){
        //     var ajaxData = asp;
        // }
        // else {
            var ajaxData = $('form').serialize();
            var toto = ajaxData;
        // }
        $.ajax({
            type: verb,
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
                // if(data.status == 'error') { return; }
                // if(data.action == "delete" || data.action == "UpdateLead" ){ //if action was delete update show new entitiy table
                //     Show_Leads();
                //     // switch (asp.entity) { => for future use
                //     //     case "lead":
                //     //         Show_Leads();
                //     //         break;
                //     // }
                // }
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
        ajaxSubmit: ajaxSubmit, 
        showMovies: showMovies
        
    }
})();

