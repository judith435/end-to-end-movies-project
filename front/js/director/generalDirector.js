'use strict'

var generalDirector = (function() {    
    var app = {
        debugMode: true,   
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }

        function Get_Directors(CallBack_function){
            var ajaxData = {
                ctrl: 'director'
            };

            $.ajax({    
                type: 'GET',
                url: app.movieApi,
                data: ajaxData,
                success: function(response) {
                    if(app.debugMode){
                        console.log("movieApi ok response");
                        console.log(response);
                    }
                    var getDirectors_response = JSON.parse(response);
                    if (getDirectors_response.status != undefined &&
                        getDirectors_response.status == "error") {
                        alert (getDirectors_response.message);
                        return;
                    }
                    CallBack_function(getDirectors_response); 
                },
                // systen errors caused by a bad connection, timeout, invalid url  
                error: function(error_response){
                    if(app.debugMode){
                        console.log("movieApi error response");
                        console.log(error_response);
                    }
                alert("error: " + error_response); //===Show Error Message====
                    }
            });
        }

        function LoadCU_Template()
        {
            $.ajax('../../templates/create-director-template.html').done(function(data) {
                $('#InputFields').prepend(data);
                if ($('title').text() == "Create Director") {
                    $("#btnAction").html('Create Director');
                }
                else {
                    $("#btnAction").html('Update Director');
                }
            });
        }
    

    return {
        Get_Directors: Get_Directors,
        LoadCU_Template: LoadCU_Template,
        
    }


})();
