$(document).ready(function(){
    $(function () {
        $("#signupForm input").jqBootstrapValidation();
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
        
        // Redirect to login page after a delay
        setTimeout(function(){
            window.location.replace('/accounts/login');
        },2000);
    
    }
    
    /*When clicking on inputs hide fail/success boxes */
    $("#signupForm input").focus(function () {
        $("#success").html("");
    });
});