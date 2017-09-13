$(document).ready(function () {
    validator = $("#frmCU").validate({
      rules:  {
        movie_name: {
          required: true,
          minlength: 3 
        },
        director_id: {
          required: true
        }
      } ,
      messages: {
        movie_name: "No movie name specified",
        director_id: "No director selected"
      },
      submitHandler: function() {
           generalMovie.ajaxSubmit();
        }
    });
  });
  

