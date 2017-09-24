'use strict'

jQuery(document).ready(function() {
    $("#navigation-bar").load("../../templates/navigation-template.html");
    showMovies.showMovies();
    $(document).on('click','#MoviesTable tr',function(e){
        delete_Movie($(this));
    })

});

function delete_Movie(row)
{
    var movieID = row.find('td:first').text();
    var confirmation = confirm('Are you sure you want to delete movie number ' + movieID + "?");
    if (confirmation == true) {
        $('#movieID').val(movieID);
        generalMovie.ajaxSubmit();
    } 
}

