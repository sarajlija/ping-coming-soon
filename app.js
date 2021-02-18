
function validateemail() {
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {

        //alert("Please enter a valid e-mail address");
        document.querySelector(".error__desktop").innerHTML = "Please provide a valid email address";
        document.querySelector(".error__desktop").style.color = "#FF6666";
        document.querySelector("#email").style.border = "1px solid #FF6666";
        document.querySelector("#button__mobile").style.marginTop = "20px";
        

    }
    else { return alert("Thank you, your email is valid!") }

}

