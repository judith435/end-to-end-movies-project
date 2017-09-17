'use strict'

var generalMovie = (function() {

    var movieName = '';
    var directorID = '';
    var directorName = '';

    var app = {
        debugMode: true,   
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }


    function LoadDirectors()
    {
        generalDirector.Get_Directors(callback_BuildDDL);
    
        $.ajax('../../templates/create-movie-template.html').done(function(data) {
            $('#CreateUpdateDivFields').prepend(data);
        });
    
    }
    
    var callback_BuildDDL = function(directors)
    {
            if ($('title').text() == "Create Movie"){
                $("#DirectorDDL").append("<option value=''>Please Select Director</option>");
            }
            for(let i=0; i < directors.length; i++) {
            $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id + ',' + directors[i].name));
        }
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

    // function update_Movie(row)
    // {
    //     var movieID = row.find('td:first').text();
    //     movieName = row.find('td:nth-child(2)').text();
    //     directorID = row.find('td:nth-child(3)').text();
    //     directorName = row.find('td:nth-child(4)').text();
    //     var mo = MovieObject();
    //     var movie = new mo.Movie(movieID, movieName, directorID, directorName)

    //     $('#movieID').val(movie.movie_id);
    //     $('#movieName').val(movie.movie_name);
    //     $("#DirectorDDL").val(movie.director_id + "," + movie.director_name);
    //     $("#movieTitle").text("Movie# being updated: " + movie.movie_id).show();
    //     $("#CreateUpdateDivFields").show();
    //     $("#btnAction").html('Update Movie');

    // }

    // function delete_Movie(row)
    // {
    //     var movieID = row.find('td:first').text();
    //     var confirmation = confirm('Are you sure you want to delete movie number ' + movieID + "?");
    //     if (confirmation == true) {
    //         $('#movieID').val(movieID);
    //         ajaxSubmit();
    //     } 
    // }

    function ajaxSubmit(){

        var htmlTitle = $('title').text();    
        var verb = "";

        //update movie - check existing values changed by user
        if (htmlTitle == "Update Movie"){
            if(!InputChanged()){
                alert("no change in data - no update");
                return;
            }
        }

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
        console.log(ajaxData);
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
                if (data.action == "Update movie" || data.action == "Delete movie" ){ //if action was delete update show updated movies table
                    showMovies()
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

    function InputChanged() {
        return $('#movieName').val().trim() != movieName || $('#DirectorDDL').val().trim() !=  directorID  + "," + directorName;
    }
  
    //ajaxSubmit is called from submitHandler:  in validator = $("#frmCU").validate({ from validations.js file
    return {
        ajaxSubmit: ajaxSubmit, 
        showMovies: showMovies,
        // update_Movie: update_Movie,
        // delete_Movie: delete_Movie,
        LoadDirectors : LoadDirectors
    }
})();

