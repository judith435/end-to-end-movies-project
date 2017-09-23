'use strict'

$(document).ready(function () {
  var app = {
    debugMode: true,   
    movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
    }

    var response;
    $.validator.addMethod(
        "movie_already_exists", 
        function() {
          var movieName = $('#movieName').val().trim();
          var directorID = $('#DirectorDDL').val().trim();
          if(movieName == "" || directorID == "") {
            return true; //if either movie name of director missing no point in checking
          }
          var ajaxData = {
             ctrl: 'movie',
             movie_name: movieName,
             director_id: directorID
            };

            if(app.debugMode){
              console.log("validations >>>  ajaxData.movie_name  " + ajaxData.movie_name);
              console.log("validations >>>  ajaxData.director_id " + ajaxData.director_id);
            }

            $.ajax({
                      type: 'GET',
                      url: app.movieApi,
                      data: ajaxData
                  })
                  .done(function(data)
                    {
                      var movie = JSON.parse(data);
                      //If movie already exists, set response to true -1 means movie was not found
                      response = ( movie.id == -1 ) ? false : true;
                      if(app.debugMode){
                        console.log(".done  data " + data);
                        console.log(".done  response " + response);
                      }
                    })
                  .fail(function(data){
                    console.log(".fail >>>  data  " + data);
                    response = false;
                  })
                  return response;
              });

              var validator = $("#frmCU").validate({
                rules:  {
                  movie_name: {
                    required: true,
                  },
                  director_id: {
                    required: true
                  },
                  movie_already_exists: {
                    movie_already_exists: true
                  },
                } ,
                messages: {
                   movie_name: "No movie name specified",
                   director: "No director selected",
                   movie_already_exists: "Movie already exists"
                },
                submitHandler: function() {
                    console.log("submitHandler  response " + response);
                     generalMovie.ajaxSubmit();
                  }
              });
            

              
  });
  
