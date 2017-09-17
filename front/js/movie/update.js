'use strict'

var movieName = '';
var directorID = '';
var directorName = '';

jQuery(document).ready(function() {

    generalMovie.showMovies();
    generalMovie.LoadDirectors();
    $('#MoviesTable').height('250px');
    $("#movieTitle, #CreateUpdateDivFields").hide();
    
    $(document).on('click','#MoviesTable tr',function(e){
        update_Movie($(this));
    })

});


function update_Movie(row)
{
    var movieID = row.find('td:first').text();
    movieName = row.find('td:nth-child(2)').text();
    directorID = row.find('td:nth-child(3)').text();
    directorName = row.find('td:nth-child(4)').text();
    var mo = MovieObject();
    var movie = new mo.Movie(movieID, movieName, directorID, directorName)

    $('#movieID').val(movie.movie_id);
    $('#movieName').val(movie.movie_name);
    $("#DirectorDDL").val(movie.director_id + "," + movie.director_name);
    $("#movieTitle").text("Movie# being updated: " + movie.movie_id).show();
    $("#CreateUpdateDivFields").show();
    $("#btnAction").html('Update Movie');

}

