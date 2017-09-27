'use strict'

jQuery(document).ready(function() {
    $("#navigation-bar").load("../../templates/navigation-template.html");
    getDirectors.Get_Directors(getDirectors.callback_Build_Directors_Table);
    $(document).on('click','#DirectorsTable tr',function(e){
        delete_Director($(this));
    })

});

function delete_Director(row)
{
    var directorID = row.find('td:first').text();
    var confirmation = confirm('Are you sure you want to delete director number ' + directorID + "?");
    if (confirmation == true) {
        $('#directorID').val(directorID);
        generalDirector.ajaxSubmit();
    } 
}

