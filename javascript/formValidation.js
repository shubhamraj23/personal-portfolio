function validateName(){
    var name = document.getElementById("name").value;
    var identifier = document.getElementById("form-validation-name");
    if (name==""){
        identifier.style.display = "block";
        return false;
    }
    identifier.style.display = "none";
    return true;
}

function validateEmail(){
    var email = document.getElementById("email").value;
    var identifier = document.getElementById("form-validation-email");
    if (email==""){
        identifier.style.display = "block";
        var second_identifier = document.getElementById("form-verify-email");
        second_identifier.style.display = "none";
        return false;
    }
    identifier.style.display = "none";
    return true;
}

function verifyEmail(){
    var email = document.getElementById("email").value;
    var identifier = document.getElementById("form-verify-email");
    var parts = email.split("@");
    if (parts.length != 2){
        identifier.style.display = "block";
        return false;
    }
    var domain = parts[1].split(".");
    if (domain.length >= 2 && domain[0].length > 0 && domain[1].length > 0){
        identifier.style.display = "none";
        return true;
    }
    identifier.style.display = "block";
    return false;
}

function validateForm(){
    var validName = validateName();
    var validEmail = validateEmail();
    if (validEmail){
        var emailCheck = verifyEmail();
    }
    else{
        var emailCheck = false;
    }
    var result = validName && validEmail && emailCheck;
    var identifier = document.getElementById("form-validate");
    if (result == false){
        var identifier = document.getElementById("form-validate");
        identifier.style.display = "block";
        var margin = document.getElementsByClassName('form-submit-button')[0];
        margin.style.marginBottom = "5px"
        return result;    
    }
    identifier.style.display = "none";
    var margin = document.getElementsByClassName('form-submit-button')[0];
    margin.style.marginBottom = "25px"
    return result;
}