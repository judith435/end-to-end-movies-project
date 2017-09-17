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
        // case "Update Movie":
        //     generalMovie.showMovies();
        //     LoadDirectors();
        //     Update_Movie();
        //     $('#MoviesTable').height('250px');
        //     break;
        // case "Delete Movie":
        //     generalMovie.showMovies();
        //     Delete_Movie();
        //     break;
    }

});

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

// function Update_Movie(){
//     $("#movieTitle, #CreateUpdateDivFields").hide();
    
//     $(document).on('click','#MoviesTable tr',function(e){
//         generalMovie.update_Movie($(this));
//     })
// }

// function Delete_Movie(){

//         $(document).on('click','#MoviesTable tr',function(e){
//             generalMovie.delete_Movie($(this));
//         })
//     }
    
