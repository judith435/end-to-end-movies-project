'use strict'

var Share = function() {    
    var app = {
        debugMode: true,   
        movieApi: 'http://localhost:8080/joint/crm/server/crmAPI.php',
        //movieApi: 'http://localhost/crm/server/crmAPI.php',
        //movieApi: 'http://localhost/joint/crm/server/crmAPI.php',
        }

     return {
        Get_Directors: function (CallBack_function){
                        var resulti = "";
                        $.ajax({    
                            type: 'POST',
                            url: app.movieApi,
                            data: {action: 'getProducts'},
                            success: function(getProducts_response) {
                                CallBack_function(getProducts_response); 
                            },
                            error: function(data){
                                alert("error: " + data); //===Show Error Message====
                                }
                        });
                    }

    }
}

