'use strict'
var updateMovie = (function() {

    var movieUpdated = {};

    jQuery(document).ready(function() {
        $("#navigation-bar").load("../../templates/navigation-template.html");
        showMovies.showMovies();
        generalMovie.LoadCU_Template();
        generalMovie.LoadDirectors();

        $("#movieTitle, #CreateUpdateDivFields").hide();
        
        $(document).on('click','#MoviesTable tr',function(e){
            update_Movie($(this));
        })

    });

    function update_Movie(row)
    {
        var movieID = row.find('td:first').text();
        //array  movieUpdated used for module export (module pattern) of info of movie being updated
        movieUpdated.movieName = row.find('td:nth-child(2)').text();
        movieUpdated.directorID = row.find('td:nth-child(3)').text();
        var directorName = row.find('td:nth-child(4)').text();

        var mo = MovieObject();
        var movie = new mo.Movie(movieID, movieUpdated.movieName, movieUpdated.directorID, directorName)

        $('#movieID').val(movie.movie_id);
        $('#movieName').val(movie.movie_name);
        $("#DirectorDDL").val(movie.director_id);
        $("#movieTitle").text("Movie# being updated: " + movie.movie_id).show();
        $("#CreateUpdateDivFields").show();
        $("#btnAction").html('Update Movie');
    }

    return {
        movieUpdated: movieUpdated
    }
})();

