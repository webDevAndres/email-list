"use strict";

var $ = function (id) {
    return document.getElementById(id);
};

var validateEntries = function(emailAddress1, emailAddress2, firstName) {
    var isValid = true;

    if(emailAddress1 == "") {
        $("email_address1_error").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    }

    if(emailAddress2 == "") {
        $("email_address2_error").firstChild.nodeValue = "This field is required.";
        isValid = false;
    } else if (emailAddress1 != emailAddress2){
        $("email_address2_error").firstChild.nodeValue = "This entry must equal first entry";
        isValid = false;
        
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }

    if (firstName == "") {
        $("first_name_error").firstChild.nodeValue = "This field is required";
        isValid = false;
    } else {
        $("first_name_error").firstChild.nodeValue = "";
    }
    
    return isValid;
};


var processList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = validateEntries(emailAddress1, emailAddress2, firstName);

    if (isValid) {
        // use the submit method of the form object to submit the form
        $("email_form").submit();
    } 
};

window.onload = function() {
    $("join_list").onclick = processList;
    $("email_address1").focus();
};