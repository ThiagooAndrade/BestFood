function isUserLogged() {
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        if (cookie === "isLogged=true") {
            return true;
        }
    }
    return false;
}


if (!isUserLogged()) {
    window.location.href = "login.html";
}
