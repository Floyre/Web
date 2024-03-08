function gen_click() {
    console.log("gen_click function");
    var sel_passwordLength = document.getElementById("length");
    var passwordLength = sel_passwordLength.options[sel_passwordLength.selectedIndex].text;
    var password = "";
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log(passwordLength);
    for(var i = 1; i <= passwordLength; i++) {
        console.log("loop");
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);

    }
    document.getElementById("output").value  = password;
    console.log(password);
}