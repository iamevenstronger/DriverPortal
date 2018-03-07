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
        a1: 0, a2: 1, a3: 2, a4: 0,
        b1: 0, b2: 0, b3: 0, b4: 0,
        c1: 0, c2: 1, c3: 2, c4: 0,
        d1: 0, d2: 0, d3: 0, d4: 0,
        e1: 0, e2: 0, e3: 0, e4: 0,
    }
    document.getElementById('a1').style.borderColor = darkColors[jsonDataTemp.a1] ;
    document.getElementById('a2').style.borderColor = darkColors[jsonDataTemp.a2] ;
    document.getElementById('a3').style.borderColor = darkColors[jsonDataTemp.a3] ;
    document.getElementById('a4').style.borderColor = darkColors[jsonDataTemp.a4] ;

    document.getElementById('b1').style.borderColor = darkColors[jsonDataTemp.b1] ;
    document.getElementById('b2').style.borderColor = darkColors[jsonDataTemp.b2] ;
    document.getElementById('b3').style.borderColor = darkColors[jsonDataTemp.b3] ;
    document.getElementById('b4').style.borderColor = darkColors[jsonDataTemp.b4] ;

    document.getElementById('c1').style.borderColor = darkColors[jsonDataTemp.c1] ;
    document.getElementById('c2').style.borderColor = darkColors[jsonDataTemp.c2] ;
    document.getElementById('c3').style.borderColor = darkColors[jsonDataTemp.c3] ;
    document.getElementById('c4').style.borderColor = darkColors[jsonDataTemp.c4] ;

    document.getElementById('d1').style.borderColor = darkColors[jsonDataTemp.d1] ;
    document.getElementById('d2').style.borderColor = darkColors[jsonDataTemp.d2] ;
    document.getElementById('d3').style.borderColor = darkColors[jsonDataTemp.d3] ;
    document.getElementById('d4').style.borderColor = darkColors[jsonDataTemp.d4] ;

    document.getElementById('e1').style.borderColor = darkColors[jsonDataTemp.e1] ;
    document.getElementById('e2').style.borderColor = darkColors[jsonDataTemp.e2] ;
    document.getElementById('e3').style.borderColor = darkColors[jsonDataTemp.e3] ;
    document.getElementById('e4').style.borderColor = darkColors[jsonDataTemp.e4] ;

}