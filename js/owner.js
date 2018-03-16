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
    var darkColors = ["#787878","#009900","#990000", "#b0b207"] ;
    var lightColors = ["#dfdfdf","#78ff43","#f44747","#f7f96b"] ;
    var ref = firebase.database().ref(); 
	var jsonDataTemp = "";	
    ref.on("value", function(snapshot){
        var json = snapshot.val();
		console.log(json);
		jsonDataTemp = JSON.parse(json.Passenger);
		console.log(jsonDataTemp);
   // border Colors
    document.getElementById('a1').style.borderColor = darkColors[jsonDataTemp.A1] ;
    document.getElementById('a2').style.borderColor = darkColors[jsonDataTemp.A2] ;
    document.getElementById('a3').style.borderColor = darkColors[jsonDataTemp.A3] ;
    document.getElementById('a4').style.borderColor = darkColors[jsonDataTemp.A4] ;

    document.getElementById('b1').style.borderColor = darkColors[jsonDataTemp.B1] ;
    document.getElementById('b2').style.borderColor = darkColors[jsonDataTemp.B2] ;
    document.getElementById('b3').style.borderColor = darkColors[jsonDataTemp.B3] ;
    document.getElementById('b4').style.borderColor = darkColors[jsonDataTemp.B4] ;

    document.getElementById('c1').style.borderColor = darkColors[jsonDataTemp.C1] ;
    document.getElementById('c2').style.borderColor = darkColors[jsonDataTemp.C2] ;
    document.getElementById('c3').style.borderColor = darkColors[jsonDataTemp.C3] ;
    document.getElementById('c4').style.borderColor = darkColors[jsonDataTemp.C4] ;

    document.getElementById('d1').style.borderColor = darkColors[jsonDataTemp.D1] ;
    document.getElementById('d2').style.borderColor = darkColors[jsonDataTemp.D2] ;
    document.getElementById('d3').style.borderColor = darkColors[jsonDataTemp.D3] ;
    document.getElementById('d4').style.borderColor = darkColors[jsonDataTemp.D4] ;

    document.getElementById('e1').style.borderColor = darkColors[jsonDataTemp.E1] ;
    document.getElementById('e2').style.borderColor = darkColors[jsonDataTemp.E2] ;
    document.getElementById('e3').style.borderColor = darkColors[jsonDataTemp.E3] ;
    document.getElementById('e4').style.borderColor = darkColors[jsonDataTemp.E4] ;

    // Bg Colors
    document.getElementById('a1').style.backgroundColor = lightColors[jsonDataTemp.A1] ;
    document.getElementById('a2').style.backgroundColor = lightColors[jsonDataTemp.A2] ;
    document.getElementById('a3').style.backgroundColor = lightColors[jsonDataTemp.A3] ;
    document.getElementById('a4').style.backgroundColor = lightColors[jsonDataTemp.A4] ;

    document.getElementById('b1').style.backgroundColor = lightColors[jsonDataTemp.B1] ;
    document.getElementById('b2').style.backgroundColor = lightColors[jsonDataTemp.B2] ;
    document.getElementById('b3').style.backgroundColor = lightColors[jsonDataTemp.B3] ;
    document.getElementById('b4').style.backgroundColor = lightColors[jsonDataTemp.B4] ;

    document.getElementById('c1').style.backgroundColor = lightColors[jsonDataTemp.C1] ;
    document.getElementById('c2').style.backgroundColor = lightColors[jsonDataTemp.C2] ;
    document.getElementById('c3').style.backgroundColor = lightColors[jsonDataTemp.C3] ;
    document.getElementById('c4').style.backgroundColor = lightColors[jsonDataTemp.C4] ;

    document.getElementById('d1').style.backgroundColor = lightColors[jsonDataTemp.D1] ;
    document.getElementById('d2').style.backgroundColor = lightColors[jsonDataTemp.D2] ;
    document.getElementById('d3').style.backgroundColor = lightColors[jsonDataTemp.D3] ;
    document.getElementById('d4').style.backgroundColor = lightColors[jsonDataTemp.D4] ;

    document.getElementById('e1').style.backgroundColor = lightColors[jsonDataTemp.E1] ;
    document.getElementById('e2').style.backgroundColor = lightColors[jsonDataTemp.E2] ;
    document.getElementById('e3').style.backgroundColor = lightColors[jsonDataTemp.E3] ;
    document.getElementById('e4').style.backgroundColor = lightColors[jsonDataTemp.E4] ;
	});
}