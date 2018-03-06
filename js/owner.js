// Session check
if (!hasSession()) {
    window.location.href = "error.html";
}

function hasSession() {
    var jsonData = dataObject;
    var flag = 0;
    for (var i = 0; i < jsonData.length; i++) {
        if (jsonData[i].token === localStorage.getItem("driverToken")) {
            if(jsonData[i].role === "owner") {
                return true;
            } else {
                return false;
            }
        }
    }
    return false;
}