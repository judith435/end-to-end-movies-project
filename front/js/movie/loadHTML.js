'use strict'

jQuery(document).ready(function() {

    switch ($('title').text()) {
        case "Show Movies":
            generalMovie.showMovies();
            break;
        case "Create Movie":
            $("#btnAction").prop('value', 'Create Movie')
          //  $("#btnAction").html('Create Movie');
            LoadDirectors()
            break;
        case "Update Movie":
            generalMovie.showMovies();
            LoadDirectors();
            Update_Movie();
            break;
        // case "Delete Lead":
        //     Delete_Lead();
        //     break;
    }

});

function LoadDirectors()
{
    // var director_share = generalDirector();  
    // director_share.Get_Directors(callback_BuildDDL);

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


function Update_Movie(){

    $("#movieTitle, #CreateUpdateDivFields").hide();
    
    $(document).on('click','#MoviesTable tr',function(e){
        generalMovie.update_delete_Movies($(this));
    })
}


