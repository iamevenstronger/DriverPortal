
function loginMethod() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (typeof (Storage) == "undefined") {
        alert("No webstorage available!. Please try another browser");
        return false;
    }
    var jsonData = dataObject;
    var flag = 0 ;
    jsonData.forEach(element => {
        if (element.username == username && element.password == password) {
            localStorage.setItem("driverToken", element.token);
            flag = 1 ;
        }
    });
    if (flag == 0) {
        alert("Please enter right credentials!");
        return false;
    } else {
        window.location.href = "portal.html";
        return true;
    }
}
