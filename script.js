function validateDulu(){
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var bodynih = document.getElementById("bodynih").value;
    var check = document.getElementById("agree");

    if(fname.length < 5){
        alert("Username length must be at least 5 characters");
    }else if(!email.endsWith("@gmail.com")){
        alert("Email must end with @gmail.com");
    }else if(country.length < 3){
        alert("Country Region length must be at least 3 characters");
    }else if(bodynih.length < 5){
        alert("Email body (message) length must be at least 5 characters");
    }else if(!check.checked){
        alert("Please Check The Agreement");
    }else{
        alert("Form Submitted! Thank you for contacting us.");
    }
}