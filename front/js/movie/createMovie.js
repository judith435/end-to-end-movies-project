'use strict'

var createMovie = (function() {

    var entity = 'movie';
    
    jQuery(document).ready(function() {
        var director_share = directorShare();  
        director_share.Get_Directors(callback_BuildDDL);
        
        $.ajax('../../templates/create-lead-template.html').done(function(data) {
            $('#CreateUpdateDivFields').prepend(data);
        });
    });

    var callback_BuildDDL = function(directors)
    {
            if ($('title').text() == "Create Movie"){
                $("#DirectorDDL").append("<option value=''>Please Select Director</option>");
            }
            for(let i=0; i < directors.length; i++) {
            // $("#DirectorDDL").append(new Option(data[i].name, data[i].id + ',' + data[i].name));
            $("#DirectorDDL").append(new Option(directors[i].name, directors[i].id));
        }
    }

    function Lead(id, lead_name, lead_phone, product_id, product_name) {
        this.id = id;
        this.lead_name = lead_name;
        this.lead_phone = lead_phone;
        this.product_id = product_id;
        this.product_name = product_name;
        }


    function Show_Leads(){
        $("#LeadsTable").load("../../templates/leads-table-template.html");

        $.ajax({    
                    type: 'POST',
                    url: 'http://localhost:8080/joint/crm/server/crmAPI.php',// app.crmApi,
                    data: {action: 'getLeads'},
            })
                .done(function(data) {
                    if (true) {
                        console.log("crmApi response");
                        console.log(data);
                    }

                    data = JSON.parse(data);
                    if (data.status == "error"){ 
                        alert(data.message);
                        return;
                    }
    
                    var leadsArray = [];
                    for (let i = 0; i < data.length; i++) {
                        leadsArray.push(new Lead(data[i].id, 
                                                        data[i].lead_name,
                                                        data[i].lead_phone,
                                                        data[i].product_id,
                                                        data[i].product_name,
                                                        ));
                    }      
                    $.ajax('../../templates/lead-template.html').done(function(data) {
                        $("#leads").html("");
                        for(let i=0; i < leadsArray.length; i++) {
                            let template = data;
                            template = template.replace("{{id}}", leadsArray[i].id);
                            template = template.replace("{{lead_name}}", leadsArray[i].lead_name);
                            template = template.replace("{{lead_phone}}", leadsArray[i].lead_phone);
                            template = template.replace("{{product_id}}", leadsArray[i].product_id);
                            template = template.replace("{{product_name}}", leadsArray[i].product_name);
                            $('#leads').append(template);
                        }
                    });
            });
    }

    function Update_Lead(){
        $.ajax('../../templates/create-lead-template.html').done(function(data) {
            $('#CreateUpdateDivFields').prepend(data);
        });
        $("#btnUpdateLead , #leadTitle, #CreateUpdateDivFields").hide();
        Show_Leads();
        $(document).on('click','#LeadsTable tr',function(e){
            var leadNumber = $(this).find('td:first').text();
            var leadName = $(this).find('td:nth-child(2)').text();
            var leadPhone = $(this).find('td:nth-child(3)').text();
            var productID = $(this).find('td:nth-child(4)').text();
            var productName = $(this).find('td:nth-child(5)').text();
            var lead = new Lead( leadNumber, 
                                    leadName,
                                    leadPhone,
                                    productID,
                                    productName);

            $('#movieName').attr("value", lead.lead_name);
            $("#DirectorDDL").val(lead.product_id);
            $("#leadTitle").text("Lead# being updated: " + lead.id).show();
            $("#btnUpdateLead , #CreateUpdateDivFields").show();
            
        })
    }


})();
    