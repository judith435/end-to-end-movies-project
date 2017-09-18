'use strict'
var updateMovie = (function() {
    
var movieName = 'toto';
var directorID = '5';

jQuery(document).ready(function() {

    showMovies.showMovies();
    generalMovie.LoadCU_Template();
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
    var directorName = row.find('td:nth-child(4)').text();
    var mo = MovieObject();
    var movie = new mo.Movie(movieID, movieName, directorID, directorName)

    $('#movieID').val(movie.movie_id);
    $('#movieName').val(movie.movie_name);
    $("#DirectorDDL").val(movie.director_id);
    $("#movieTitle").text("Movie# being updated: " + movie.movie_id).show();
    $("#CreateUpdateDivFields").show();
    $("#btnAction").html('Update Movie');

}

return {
    movieName: movieName, 
    directorID: directorID 
}
})();

