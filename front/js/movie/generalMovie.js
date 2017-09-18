'use strict'

var generalMovie = (function() {

    // var movieName = '';
    // var directorID = '';
    // var directorName = '';

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
                // $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id + ',' + directors[i].name));
                 $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id));
                 
        }
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

    function InputChanged() {
        return  $('#movieName').val().trim() != updateMovie.movieName || 
                $('#DirectorDDL').val().trim() !=  updateMovie.directorID;
    }
  
    //ajaxSubmit is called from submitHandler:  in validator = $("#frmCU").validate({ from validations.js file
    return {
        ajaxSubmit: ajaxSubmit, 
        LoadCU_Template: LoadCU_Template,
        LoadDirectors : LoadDirectors
    }
})();

