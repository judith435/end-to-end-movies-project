'use strict'

var Share = function() {    
    var app = {
        debugMode: true,   
        //movieApi: 'http://localhost:8080/joint/crm/server/crmAPI.php',
        //movieApi: 'http://localhost/crm/server/crmAPI.php',
        movieApi: 'http://localhost/joint/end-to-end-movies-project/back/api/api.php',
        }

     return {
        Get_Directors: function (CallBack_function){
                        var ajaxData = {
                            ctrl: 'director',
                            action: 'getDirectors'
                        };

                        $.ajax({    
                            type: 'GET',
                            url: app.movieApi,
                            data: ajaxData,
                            success: function(getDirectors_response) {
                                CallBack_function(getDirectors_response); 
                            },
                            error: function(data){
                                alert("error: " + data); //===Show Error Message====
                                }
                        });
                    }

    }
}

