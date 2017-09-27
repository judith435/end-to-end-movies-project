'use strict'

var getDirectors = (function() {    
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


        var callback_Build_Directors_Table = function(directors)
        {
            $("#DirectorsTable").load("../../templates/director/directors-table-template.html");
            
            var directorsArray = [];
            var dirobj = DirectorObject();
            for (let i = 0; i < directors.length; i++) {
                directorsArray.push(new dirobj.Director(directors[i].id, directors[i].name));
            }      
            $.ajax('../../templates/director/director-template.html').done(function(data) {
                $("#directors").html("");
                for(let i=0; i < directorsArray.length; i++) {
                    let template = data;
                    template = template.replace("{{director_id}}", directorsArray[i].director_id);
                    template = template.replace("{{director_name}}", directorsArray[i].director_name);
                    $('#directors').append(template);
                }
            });
        }
        

    return {
        Get_Directors: Get_Directors,
        callback_Build_Directors_Table : callback_Build_Directors_Table,
    }

})();
