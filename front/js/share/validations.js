$(document).ready(function () {
    validator = $("#frmCU").validate({
      rules:  {
        movieName: {
          required: true,
          minlength: 3 
          // letters: true
        },
        DirectorDDL: {
          required: true
        }
      } ,
      messages: {
        movieName: "Please specify movie name",
        DirectorDDL: "Please select director"
      },
      submitHandler: function() {
           generalMovie.ajaxSubmit("UpdateInsert");
        }
    });
  });
  

