'use strict'

// var Share = function() {
var Share = function() {    
    var app = {
        debugMode: true,   
        movieApi: 'http://localhost:8080/joint/crm/server/crmAPI.php',
        //crmApi: 'http://localhost/crm/server/crmAPI.php',
        //crmApi: 'http://localhost/joint/crm/server/crmAPI.php',
        }

     return {
        Get_Directors: function (CallBack_function){
                        var resulti = "";
                        $.ajax({    
                            type: 'POST',
                            url: app.movieApi,
                            data: {action: 'getProducts'},
                            success: function(getProducts_response) {
                                //this[CallBack_function](response);
                                CallBack_function(getProducts_response); 
                                
                                // if(CallBack_function.func){
                                //     CallBack_function.func(data); 
                                // }
                            },
                            // success: CallBack_function(dodo), //function(data){
                               // alert("success: " + data);
                            //},
                            error: function(data){
                                alert("error: " + data); //===Show Error Message====
                                }
                        });
                        // .done(function(data) {
                        //     if (app.debugMode) {
                        //         console.log("crmApi response");
                        //         console.log(data);
                        //         alert(data);
                        //     }
                        //     resulti = JSON.parse(data);
                        //     return resulti;
                        //     // for(let i=0; i < data.length; i++) {
                        //     //     // $("#ProductDDL").append(new Option(data[i].name, data[i].id + ',' + data[i].name));
                        //     //     $("#DirectorDDL").append(new Option(data[i].name, data[i].id));
                        //     // }
                        // });
                    }//,

        //ajaxSubmit is called from submitHandler:  in validator = $("#frmCUD").validate({ from validations.js file
        // return {
        //     // ajaxSubmit: ajaxSubmit,
        //     Get_Directors: Get_Directors 
        // }
    // } 
    }
}

// var test = function(str, cb) {
//     var data = 'Input values';
//     $.ajax({
//         type: 'post',
//         url: 'http://www.mydomain.com/ajaxscript',
//         data: data,
//         success: cb
//     });
// }
// test('Hello, world', callback);    