'use strict'

var generalMovie = (function() {

    var app = {
        debugMode: true,   
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }

    function LoadCU_Template()
    {
        $.ajax('../../templates/create-movie-template.html').done(function(data) {
            $('#CreateUpdateDivFields').prepend(data);
            if ($('title').text() == "Create Movie") {
                $("#btnAction").html('Create Movie');
            }
            else {
                $("#btnAction").html('Update Movie');
            }
        });
    }
    
    function LoadDirectors()
    {
        generalDirector.Get_Directors(callback_BuildDDL);
    }
    
    var callback_BuildDDL = function(directors)
    {
            if ($('title').text() == "Create Movie"){
                $("#DirectorDDL").append("<option value=''>Please Select Director</option>");
            }

            for(let i=0; i < directors.length; i++) {
                 $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id));
            }
    }
         
    function ajaxSubmit(){

        var htmlTitle = $('title').text();    
        var verb = "";

        switch (htmlTitle) {
            case "Create Movie":
                verb = "POST";
                break;
            case "Update Movie":
                verb = "PUT";
                break;
            case "Delete Movie":
                verb = "DELETE";
                break;
        }
    
        var ajaxData = $('form').serialize();
        if (app.debugMode) {
            console.log(ajaxData);
        }
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
                alert(data.message); 
                if (data.status == 'error') { return;}
                if (data.action == "Update movie" || data.action == "Delete movie" ){ //if action was delete or update show updated movies table
                    showMovies.showMovies()
                }
                if (data.action == "Update movie") {
                    $("#movieTitle, #CreateUpdateDivFields").hide();
                }
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
        LoadCU_Template: LoadCU_Template,
        LoadDirectors : LoadDirectors
    }
})();

