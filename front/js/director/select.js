jQuery(document).ready(function() {
    
        $("#navigation-bar").load("../../templates/navigation-template.html");
        getDirectors.Get_Directors(getDirectors.callback_Build_Directors_Table);
    });
