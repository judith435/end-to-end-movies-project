$(document).ready(function () {
    validator = $("#frmCUD").validate({
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
        //   crmGeneral.ajaxSubmit("UpdateInsert");
        }
    });
  });
  

