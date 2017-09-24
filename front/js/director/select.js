jQuery(document).ready(function() {
    
        $("#navigation-bar").load("../../templates/navigation-template.html");
        generalDirector.Get_Directors(callback_Build_Directors_Table);
    });
        

    var callback_Build_Directors_Table = function(directors)
    {
        $("#DirectorsTable").load("../../templates/directors-table-template.html");
        
        var directorsArray = [];
        var dirobj = DirectorObject();
        for (let i = 0; i < directors.length; i++) {
            directorsArray.push(new dirobj.Director(directors[i].id, directors[i].name));
        }      
        $.ajax('../../templates/director-template.html').done(function(data) {
            $("#directors").html("");
            for(let i=0; i < directorsArray.length; i++) {
                let template = data;
                template = template.replace("{{director_id}}", directorsArray[i].director_id);
                template = template.replace("{{director_name}}", directorsArray[i].director_name);
                $('#directors').append(template);
            }
        });
}
