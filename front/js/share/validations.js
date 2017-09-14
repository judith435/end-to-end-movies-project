$(document).ready(function () {

  //  var response;
    $.validator.addMethod(
        "movie_already_exists", 
        function(value, element, params) {
          var aaa = $('#movieName').val().trim();
          var uuu = $('#DirectorDDL').val().trim();
          alert(aaa + "  " + uuu);
            // $.ajax({
            //     type: "POST",
            //     url: "http://"+location.host+"/checkUser.php",
            //     data: "checkUsername="+value,
            //     dataType:"html",
            //     success: function(msg)
            //     {
            //         //If username exists, set response to true
            //         response = ( msg == 'true' ) ? true : false;
            //     }
            //  });
            //response = true;
            return false ;// response;
        },
    );



    validator = $("#frmCU").validate({
      rules:  {
        movie_name: {
          required: true,
          minlength: 2,
          // movie_already_exists: ['movie_name', 'director_id'] //['movie_name', 'director_id'] // <-- your custom rule
        },
        director: {
          required: true
        },
        // check_movie: {
        //   movie_already_exists: ['tolo', 'fdsaf'] // <-- your custom rule
        // },
      } ,
      messages: {
         movie_name: { required :"No movie name specified", movie_already_exists: "This Username is taken already"  },
         director: "No director selected",
         check_movie: "Movie already exists"
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