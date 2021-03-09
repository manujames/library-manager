$(function () {
    $("#addBookForm input,#addBookForm textarea,#addBookForm button").jqBootstrapValidation();
});

/*When clicking on inputs hide fail/success boxes */
$("#title").focus(function () {
    $("#success").html("");
});
