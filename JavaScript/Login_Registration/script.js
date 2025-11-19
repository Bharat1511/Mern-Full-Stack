function login() {
    console.log("Login Button Clicked");

    const em = document.getElementById("LoginEmail").value;
    const ps = document.getElementById("LoginPassword").value;
    console.log("Email : " + em);
    console.log("Password : " + ps);

    alert("Login Done");

    document.getElementById("LoginEmail").value = "";
    document.getElementById("LoginPassword").value = "";
}

function registration() {
    console.log("Registration Button Clicked");

    const fn = document.getElementById("RegistrationFullName").value;
    const Em = document.getElementById("RegistrationEmail").value;
    const crps = document.getElementById("RegistrationCreatePassword").value;
    const cps = document.getElementById("RegistrationConfirmPassword").value;
    console.log("FullName : " + fn);
    console.log("Email : " + Em);
    console.log("CreatePassword : " + crps);
    console.log("confirmPassward :" + cps);

    alert("Registration Done");

    document.getElementById("RegistrationFullName").value= "";
    document.getElementById("RegistrationEmail").value= "";
    document.getElementById("RegistrationCreatePassword").value= "";
    document.getElementById("RegistrationConfirmPassword").value= "";

}