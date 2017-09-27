'use strict' //problem of double checking happens from 2nd check onwards

$(document).ready(function () {
 
  var app = {
    debugMode: true,   
    movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
    }

  var validator = $("#frmCU").validate({
    rules:  {
      director_name: {
       required: true
      },
      duplicate_director: {  
       director_already_exists: true
      },
    } ,
    messages: {
        director_name: "No director name specified",
        duplicate_director: "Director with same name already exists",
    },
    submitHandler: function() {
          console.log("submitHandler  response " + response);
          generalDirector.ajaxSubmit();
      }
  });

  var response;
  $.validator.addMethod(
      "director_already_exists", 
      function() {
        var directorName = $('#directorName').val().trim();
        
        if (directorName == "" ) {
          return true; //if director name missing no point in checking
        }
        console.log("action button value " + $('#btnAction').text()); 
        //update director: no change made to data retrieved from db return relevant message to user
        if ($('#btnAction').text() == "Update Director") {
          console.log("director_already_exists() directorName from update: " + updateDirector.directorUpdated.directorName);
          if (directorName == updateDirector.directorUpdated.directorName ){
                validator.settings.messages.duplicate_director = 'No change in data - No update';
                return false; 
          }
        }

        var ajaxData = {
            ctrl: 'director',
            director_name: directorName
        }; 

        if(app.debugMode){
            console.log("validations >>>  ajaxData.director_name  " + ajaxData.director_name);
        }  
        $.ajax({
                  type: 'GET',
                  url: app.movieApi,
                  async: false,
                  data: ajaxData
              })
              .done(function(data)
                {
                  console.log("validations >>>  after ajax call data  " + data);
                  
                  var director = JSON.parse(data);
                  //-1 means director was not found
                  response = ( director.id == -1 ) ?  true : false;
                  if(app.debugMode){
                    console.log(".done  response " + response);
                    console.log(".done  data " + data);
                    console.log(".done  director.id " + director.id);
                  }
                })
              .fail(function(data){
                console.log(".fail >>>  data  " + data);
                response = true;
              })
              return response;
        });
      });
