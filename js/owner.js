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

function setSeatStatus() {
    var darkColors = ["#fefefe","#009900","#990000"] ;
    var jsonDataTemp = {
        a1: 0, a2: 1, b1: 2, b2: 0
    }
    document.getElementById('a1').style.borderColor = darkColors[jsonDataTemp.a1] ;
    document.getElementById('a1').style.borderColor = darkColors[jsonDataTemp.a1] ;
}