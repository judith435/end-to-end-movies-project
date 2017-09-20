$(document).ready(function () {
    
      //  var response;
        $.validator.addMethod(
            "movie_already_exists", 
            function() {
              var movieName = $('#movieName').val().trim();
              var directorID = $('#DirectorDDL').val().trim();
              var ajaxData = {
                 ctrl: 'movie',
                 movie_name: movieName,
                 director_id: directorID
                };
                console.log("validations >>>  ajaxData.movie_name  " + ajaxData.movie_name);
                console.log("validations >>>  ajaxData.director_id " + ajaxData.director_id);
                $.ajax({
                      type: 'GET',
                      url: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
                      data: ajaxData,
                      success: function(msg)
                        {
                          console.log("AFTER call to php check movie from form validations " + msg);
                          //If movie already exists, set response to true
                          response = ( msg == 'true' ) ? true : false;
                        }
                  });
                  //response = true;
                  return false ;// response;
            },
        );
    
    
    
        validator = $("#frmCU").validate({
          rules:  {
            movie_name: {
              required: true,
            },
            director_id: {
              required: true
            },
            movie_already_exists: {
              movie_already_exists: []
            },
          } ,
          messages: {
             movie_name: "No movie name specified",
             director: "No director selected",
             movie_already_exists: "Movie already exists"
          },
          submitHandler: function() {
               generalMovie.ajaxSubmit();
            }
        });
    
        //         messages: {
    //             username: {
    //                 required: "Username is required",
    //                 minlength: "Username must be at least 8 characters",
    //                 uniqueUserName: "This Username is taken already"
    //             }
    //         }
    
      //   $.validator.addMethod('totalCheck', function(value, element, params) {
      //     var field_1 = $('input[name="' + params[0] + '"]').val(),
      //         field_2 = $('input[name="' + params[1] + '"]').val();
      //     return parseInt(value) === parseInt(field_1) + parseInt(field_2);
      // }, "Enter the number of persons (including yourself)");
    
      });
      
    
    
    
    //   $(document).ready(function(){
    //     var response;
    //     $.validator.addMethod(
    //         "uniqueUserName", 
    //         function(value, element) {
    //             $.ajax({
    //                 type: "POST",
    //                 url: "http://"+location.host+"/checkUser.php",
    //                 data: "checkUsername="+value,
    //                 dataType:"html",
    //                 success: function(msg)
    //                 {
    //                     //If username exists, set response to true
    //                     response = ( msg == 'true' ) ? true : false;
    //                 }
    //              });
    //             return response;
    //         },
    //         "Username is Already Taken"
    //     );
    
    //     $("#regFormPart1").validate({
    //         username: {
    //             required: true,
    //             minlength: 8,
    //             uniqueUserName: true
    //         },
    //         messages: {
    //             username: {
    //                 required: "Username is required",
    //                 minlength: "Username must be at least 8 characters",
    //                 uniqueUserName: "This Username is taken already"
    //             }
    //         }
    //     });
    // });