$(document).ready(function(){
    $(function () {
        $("#addAuthorForm input,#addAuthorForm textarea").jqBootstrapValidation();
    });

    if(window.errorMsg){
        $("#success").html("<div class='alert alert-danger'>");
        $("#success > .alert-danger")
            .html(
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
        $("#success > .alert-danger").append(
            $("<strong>").text(window.errorMsg)
        );
        $("#success > .alert-danger").append("</div>");
    }
    
    if(window.successMsg){
        $("#success").html("<div class='alert alert-success'>");
        $("#success > .alert-success")
            .html(
                "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;"
            )
            .append("</button>");
        $("#success > .alert-success").append(
            $("<strong>").text(window.successMsg)
        );
        $("#success > .alert-success").append("</div>");
    }
    
    /*When clicking on inputs hide fail/success boxes */
    $("#addAuthorForm input #addAuthorForm textarea").focus(function () {
        $("#success").html("");
    });
});