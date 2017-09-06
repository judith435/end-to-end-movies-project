'use strict'

// var Share = function() {
var Share =  
    {    
        app : {
                debugMode: true,   
                movieApi: 'http://localhost:8080/joint/crm/server/crmAPI.php',
                //crmApi: 'http://localhost/crm/server/crmAPI.php',
                //crmApi: 'http://localhost/joint/crm/server/crmAPI.php',
            },
            
        Get_Directors: function (){
            alert("start Get_Directors  ");
            alert("this.app.movieApi  " + this.app.movieApi);
            alert("this.app.debugMode  " + this.app.debugMode);
            
                        var resulti = "";
                        $.ajax({    
                            type: 'POST',
                            url: this.app.movieApi,
                            data: {action: 'getProducts'},
                        })
                        .done(function(data) {
                            //if (this.app.debugMode) {
                                console.log("crmApi response");
                                console.log(data);
                            //}
                            resulti = JSON.parse(data);
                            alert("1:  " + resulti);
                            return resulti;
                            // for(let i=0; i < data.length; i++) {
                            //     // $("#ProductDDL").append(new Option(data[i].name, data[i].id + ',' + data[i].name));
                            //     $("#DirectorDDL").append(new Option(data[i].name, data[i].id));
                            // }
                        });
                    }//,
        //dodo: Get_Directors.          

        //ajaxSubmit is called from submitHandler:  in validator = $("#frmCUD").validate({ from validations.js file
        // return {
        //     // ajaxSubmit: ajaxSubmit,
        //     Get_Directors: Get_Directors 
        // }
    // } 
}
//Share.Get_Directors();  
 var toto = Share.Get_Directors();  
 alert("2:  " + toto);

// var yoyo = toto;
// var lolo = yoyo;

// })();
    