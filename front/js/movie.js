'use strict'

var Movie = (function() {

    jQuery(document).ready(function() {
        
        var share = Share();  
        share.Get_Directors(callback_BuildDDL);
        

        // $.ajax('../templates/create-lead-template.html').done(function(data) {
        //     $('#CreateUpdateDiv').prepend(data);
        // });
    });

    var callback_BuildDDL = function(callback_data)//(data, textStatus, xhr)
    {
            var directors = JSON.parse(callback_data);
            for(let i=0; i < directors.length; i++) {
            // $("#DirectorDDL").append(new Option(data[i].name, data[i].id + ',' + data[i].name));
            $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id));
        }

        alert("in call back: " + directors);
    }


})();
    