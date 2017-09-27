'use strict'
var updateDirector = (function() {

    var directorUpdated = {};

    jQuery(document).ready(function() {
        $("#navigation-bar").load("../../templates/navigation-template.html");
        getDirectors.Get_Directors(getDirectors.callback_Build_Directors_Table);
        generalDirector.LoadCU_Template();
        
        $("#directorTitle, #InputFields").hide();
        $(document).on('click','#DirectorsTable tr',function(e){
            update_Director($(this));
        })
    });

    function update_Director(row)
    {
        var directorID = row.find('td:first').text();
        //array  movieUpdated used for module export (module pattern) of info of movie being updated
        directorUpdated.directorName = row.find('td:nth-child(2)').text();

        var dirObj = DirectorObject();
        var director = new dirObj.Director(directorID, directorUpdated.directorName)

        $('#directorID').val(director.director_id);
        $('#directorName').val(director.director_name);
        $("#directorTitle").text("Director# being updated: " + director.director_id).show();
        $("#InputFields").show();
        $("#btnAction").html('Update Director');
    }

    return {
        directorUpdated: directorUpdated
    }
})();

