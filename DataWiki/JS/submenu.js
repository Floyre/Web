// Log-in menu
var loginStatus = document.getElementById("login");
var loginInfo = window.localStorage;

function loginEntrance(link){
    if(loginInfo.key(0)){
        loginStatus.innerText = "LogIn";
        loginInfo.clear();
    }
    else{
        login_popUp = window.open(link, "new", "width=600, height=400");
    }
}

function loginOKCheck() {
    let user_id = document.getElementById("user_id");
    let user_pw = document.getElementById("user_pw");
    var error = document.getElementById("login-error");
    if (user_id.value == "") {
        error.innerText = "학번/교직원번호를 다시 확인해주세요.";
        user_id.style.borderColor = "red";
        user_pw.style.borderColor = "rgb(217, 217, 221)";

    }
    else if (user_pw.value == "") {
        error.innerText = "비밀번호를 다시 확인해주세요.";
        user_id.style.borderColor = "rgb(217, 217, 221)";
        user_pw.style.borderColor = "red";
    }
    else {
        window.localStorage.setItem("userId", user_id.value);
        window.close();
    }
}

window.onload = function(){
    if(loginInfo.key(0)){
        loginStatus.textContent = "LogOut";
    }
}
